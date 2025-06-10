export default class RenderNotFound {
  async render() {
    return `
        <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center;">
          <h1 style="font-size: 48px; font-weight: bold;">404</h1>
          <p style="font-size: 18px;">Halaman yang Anda cari tidak ditemukan.</p>
          <a href="/" style="margin-top: 20px; color: blue; text-decoration: none;">Kembali ke Beranda</a>
        </section>
      `;
  }

  async afterRender() {}
}
