import { subscribePushNotification, unsubscribePushNotification } from '../data/api.js';
import { VAPID_KEY } from '../config.js';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function handleSubscribe() {
  try {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('Push notifications are not supported by your browser.');
      return false;
    }

    let permission = Notification.permission;
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }

    if (permission !== 'granted') {
      throw new Error('Notification permission denied.');
    }

    const registration = await navigator.serviceWorker.ready;
    console.log('Service Worker is ready:', registration);

    let subscription = await registration.pushManager.getSubscription();
    console.log('Existing subscription:', subscription);

    if (!subscription) {
      const applicationServerKey = urlBase64ToUint8Array(VAPID_KEY);
      console.log('Subscribing with applicationServerKey (length):', applicationServerKey.length);

      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
      });
      console.log('New subscription created:', subscription);
    }

    const subscriptionJson = subscription.toJSON();
    await subscribePushNotification(subscriptionJson);
    return true;
  } catch (error) {
    console.error('Error subscribing to push:', error);
    alert(`Failed to subscribe: ${error.message}`);
    return false;
  }
}

export async function handleUnsubscribe() {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      await unsubscribePushNotification({ endpoint: subscription.endpoint });
      await subscription.unsubscribe();
    }
  } catch (error) {
    console.error('Gagal melakukan unsubscribe:', error);
  }
}

export async function debugServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.error('Service Worker not supported in this browser');
    return;
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    console.log('SW registrations found:', registrations.length);

    registrations.forEach((reg, i) => {
      console.log(`SW #${i + 1}:`, {
        scope: reg.scope,
        active: reg.active ? 'Yes' : 'No',
        installing: reg.installing ? 'Yes' : 'No',
        waiting: reg.waiting ? 'Yes' : 'No',
        updateViaCache: reg.updateViaCache,
      });
    });

    return registrations.length > 0;
  } catch (err) {
    console.error('Error checking SW registrations:', err);
    return false;
  }
}
