import { showFormattedDate } from './utils';

export function generateLoaderTemplate() {
  return `
    <div class="loader"></div>
  `;
}

export function generateLoaderAbsoluteTemplate() {
  return `
    <div class="loader loader-absolute"></div>
  `;
}

export function generateMainNavigationListTemplate() {
  return `
    <li><a href="#/collection">Story Collection</a></li>
    <li><a href="#/404">404</a></li>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="login-button" href="#/login">Login</a></li>
    <li><a id="register-button" href="#/register">Register</a></li>
  `;
}

export function generateAuthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="new-report-button" class="btn new-report-button" href="#/new">New Story <i class="fas fa-plus"></i></a></li>
    <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
  `;
}

export function generateStoryListEmptyTemplate() {
  return `
    <div id="reports-list-empty" class="reports-list__empty">
      <h2>Tidak ada story yang tersedia</h2>
      <p>Saat ini, tidak ada story yang di tampilkan.</p>
    </div>
  `;
}

export function generateStoryListErrorTemplate(message) {
  return `
    <div id="reports-list-error" class="reports-list__error">
      <h2>Terjadi kesalahan pengambilan daftar Story</h2>
      <p>${message ? message : 'Gunakan jaringan lain atau laporkan error ini.'}</p>
    </div>
  `;
}

export function generateReportDetailErrorTemplate(message) {
  return `
    <div id="reports-detail-error" class="reports-detail__error">
      <h2>Terjadi kesalahan pengambilan detail laporan</h2>
      <p>${message ? message : 'Gunakan jaringan lain atau laporkan error ini.'}</p>
    </div>
  `;
}

export function generateStoryItemItemTemplate({
  id,
  name,
  description,
  photoUrl,
  reporterName,
  createdAt,
  lat,
  lon,
}) {
  const locationText = lat && lon ? `${lat}, ${lon}` : 'Not available';

  const imageSrc = photoUrl || 'https://picsum.photos/200/300';

  return `
    <div tabindex="0" class="report-item" data-reportid="${id}">
      <img class="report-item__image" src="${imageSrc}" alt="${name}">
      <div class="report-item__body">
        <div class="report-item__main">
          <h2 id="report-title" class="report-item__title">${name}</h2>
          <div class="report-item__more-info">
            <div class="report-item__createdat">
              <i class="fas fa-calendar-alt"></i> ${showFormattedDate(createdAt, 'id-ID')}
            </div>
            <div class="report-item__location">
              <i class="fas fa-map"></i> ${locationText}
            </div>
          </div>
        </div>
        <div id="report-description" class="report-item__description">
          ${description}
        </div>
        <div class="report-item__more-info">
          <div class="report-item__author">
           Ditulis oleh: ${reporterName}
          </div>
        </div>
        <a class="btn report-item__read-more" href="#/story/${id}">
          Selengkapnya <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;
}

export function generateDamageLevelMinorTemplate() {
  return `
    <span class="report-detail__damage-level__minor" data-damage-level="minor">Kerusakan Rendah</span>
  `;
}

export function generateDamageLevelModerateTemplate() {
  return `
    <span class="report-detail__damage-level__moderate" data-damage-level="moderate">Kerusakan Sedang</span>
  `;
}

export function generateDamageLevelSevereTemplate() {
  return `
    <span class="report-detail__damage-level__severe" data-damage-level="severe">Kerusakan Berat</span>
  `;
}

export function generateDamageLevelBadge(damageLevel) {
  if (damageLevel === 'minor') {
    return generateDamageLevelMinorTemplate();
  }

  if (damageLevel === 'moderate') {
    return generateDamageLevelModerateTemplate();
  }

  if (damageLevel === 'severe') {
    return generateDamageLevelSevereTemplate();
  }

  return '';
}

export function generateReportDetailImageTemplate(imageUrl = null, alt = '') {
  if (!imageUrl) {
    return `
      <img class="report-detail__image" src="images/placeholder-image.jpg" alt="Placeholder Image">
    `;
  }

  return `
    <img class="report-detail__image" src="${imageUrl}" alt="${alt}">
  `;
}

export function generateStorytDetailTemplate({
  title,
  description,
  evidenceImages,
  latitudeLocation,
  longitudeLocation,
  reporterName,
  createdAt,
  address,
}) {
  const createdAtFormatted = showFormattedDate(createdAt, 'id-ID');

  const normalizedEvidenceImages = Array.isArray(evidenceImages)
    ? evidenceImages
    : evidenceImages
      ? [evidenceImages]
      : [];

  const imagesHtml = normalizedEvidenceImages.reduce(
    (accumulator, evidenceImage) =>
      accumulator.concat(generateReportDetailImageTemplate(evidenceImage, title)),
    '',
  );

  return `
    <div class="report-detail__header">
      <div class="report-detail__images__container">
        <div id="images" class="report-detail__images">${imagesHtml}</div>
      </div>
    </div>

    <div class="container">
      <div class="report-detail__body">
        <div class="report-detail__body__actions__container">
          <h1 id="title" class="report-detail__title">${title}</h1>

          <div class="report-detail__actions__buttons">
            <div id="save-actions-container"></div>
            <div id="notify-me-actions-container">
              <button id="report-detail-notify-me" class="btn btn-transparent">
                Try Notify Me <i class="far fa-bell"></i>
              </button>
            </div>
          </div>
        </div>

        <hr>

        <div id="author" class="report-detail__author">
          Ditulis oleh ${reporterName} pada ${createdAtFormatted}
        </div>

        <div class="report-detail__body__description__container">
          <h2 class="report-detail__description__title">Deskripsi</h2>
          <div id="description" class="report-detail__description__body">
            ${description}
          </div>
        </div>

        <hr>

        <div class="report-detail__body__map__container">
          <h3 class="report-detail__map__title" >Lokasi</h3>
          <br>
          <div>
            <div class="report-detail__more-info__inline">
              <div 
                id="location-latitude" 
                class="report-detail__location__latitude" 
                >
                Latitude: ${latitudeLocation}
              </div>
              <div 
                id="location-longitude" 
                class="report-detail__location__longitude" 
                >
                Longitude: ${longitudeLocation}
              </div>

              <div id="location-address" class="report-detail__location__address">
               Address: ${address}
              </div>
            </div>
          </div>

          <br>

          <div class="report-detail__map__container">
            <div id="map" class="report-detail__map"></div>
            <div id="map-loading-container"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function generateUnsubscribeButtonTemplate() {
  return `
    <button id="unsubscribe-button" class="btn unsubscribe-button">
      Unsubscribe <i class="fas fa-bell-slash"></i>
    </button>
  `;
}

export function generateSaveReportButtonTemplate() {
  return `
    <button id="report-detail-save" class="btn btn-transparent">
      Simpan Story <i class="far fa-bookmark"></i>
    </button>
  `;
}

export function generateRemoveReportButtonTemplate() {
  return `
    <button id="report-detail-remove" class="btn btn-transparent">
      Buang laporan <i class="fas fa-bookmark"></i>
    </button>
  `;
}
