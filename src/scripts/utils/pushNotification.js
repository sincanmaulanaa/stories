import { subscribePushNotification, unsubscribePushNotification } from '../data/api.js';
import { VAPID_KEY } from '../config.js';

export async function handleSubscribe() {
  try {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('Push notifications are not supported by your browser.');
    }

    let permission = Notification.permission;
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }

    if (permission !== 'granted') {
      throw new Error('Notification permission denied.');
    }

    const registration = await navigator.serviceWorker.ready;

    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: VAPID_KEY,
      });
    }
    const subscriptionJson = subscription.toJSON();
    await subscribePushNotification(subscriptionJson);
  } catch (error) {
    console.error('Error:', error);
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
