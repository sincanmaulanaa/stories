import { getAllSavedStories, deleteSavedStory } from '../../data/IndexedDB.js';

export default class BookmarkPage {
  constructor() {
    this.data = [];
  }

  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Story Collection</h2>
        <div id="bookmark-content" class="stories"></div>
      </div>
    `;
  }

  async afterRender() {
    this.data = await getAllSavedStories();
    const bookmarkContainer = document.getElementById('bookmark-content');
    if (this.data.length === 0) {
      bookmarkContainer.innerHTML =
        '<p class="empty-message">Tidak ada Story Collection tersimpan.</p>';
      return;
    }

    bookmarkContainer.innerHTML = this.data.map(this.renderBookmarkItem).join('');
    bookmarkContainer.addEventListener('click', async (event) => {
      if (event.target.classList.contains('delete-btn')) {
        const id = event.target.dataset.id;
        await deleteSavedStory(id);
        this.afterRender();
      }
    });
  }

  renderBookmarkItem(story) {
    return `
      <div class="story-item">
        <h3>${story.name}</h3>
        <p>${story.description}</p>
        <p>Latitude: ${story.lat}</p>
        <p>Longitude: ${story.lon}</p>
        <img src="${story.photoUrl}" alt="${story.name}" />
        <button class="delete-btn" data-id="${story.id}">Hapus</button>
      </div>
    `;
  }
}
