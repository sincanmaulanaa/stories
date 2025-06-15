# Stories

> A modern web application for creating and sharing stories with interactive maps, animations, and offline support via PWA.

![Stories](/src/public/images/screenshot.png)

## ✨ Features

- **📝 Rich Story Creation** - Create and share stories with detailed descriptions
- **📸 Multi-source Media** - Take photos using camera, upload from device, or capture screenshots
- **🗺️ Interactive Maps** - Pin your stories to specific locations with Leaflet maps **integration**
- **🔔 Push Notifications** - Subscribe to stories and receive updates
- **⚡ Modern UI** - Clean, responsive design with smooth animations
- **🔄 Offline Support** - Full Progressive Web App (PWA) capabilities for offline usage
- **📱 Mobile-friendly** - Responsive design that works across all device sizes
- **⌨️ Keyboard Shortcuts** - Productivity enhancements for power users

## 🛠️ Technologies

- **Frontend Framework**: Vanilla JavaScript with modern ES6+ features
- **Styling**: Custom CSS with responsive design principles
- **Maps**: Leaflet.js for interactive mapping
- **Animations**: Framer Motion for UI animations
- **Offline Support**: Workbox for PWA and service worker management
- **Storage**: IndexedDB (via idb) for client-side data persistence
- **Carousel**: Tiny Slider for image galleries
- **Build Tools**: Webpack 5 for module bundling and optimization

## 📋 Prerequisites

- Node.js 18+ or Bun 1.0+
- Modern web browser (Chrome, Firefox, Safari, Edge)

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/sincanmaulanaa/stories.git
cd stories

# Using npm
npm install

# OR using Bun (faster)
bun install
```

## 🚀 Development

Start the development server:

```bash
# Using npm
npm run dev

# OR using Bun
bun run dev
```

The application will be available at `http://localhost:9001`.

## 🏗️ Build

Create a production build:

```bash
# Using npm
npm run build

# OR using Bun
bun run build
```

Output files will be generated in the dist directory.

## 🌐 Deployment

Deploy to GitHub Pages:

```bash
# Using npm
npm run deploy

# OR using Bun
bun run deploy
```

## 📁 Project Structure

```
stories-final/
├── dist/                  # Production build files
├── src/
│   ├── public/            # Static assets
│   │   ├── icons/         # App icons for PWA
│   │   └── sw.js          # Service Worker file
│   ├── scripts/
│   │   ├── components/    # Reusable UI components
│   │   ├── data/          # Data handling and API services
│   │   ├── pages/         # Page implementations
│   │   ├── routes/        # Routing logic
│   │   ├── templates/     # HTML templates
│   │   └── utils/         # Utility functions
│   ├── styles/            # CSS files
│   └── index.html         # Main HTML template
├── webpack.common.js      # Shared webpack configuration
├── webpack.dev.js         # Development webpack configuration
├── webpack.prod.js        # Production webpack configuration
└── package.json           # Project dependencies and scripts
```

## 📱 PWA Features

Stories is a Progressive Web App with:

- **Offline Capability**: Access previously viewed stories without an internet connection
- **Installable**: Add to your home screen for app-like experience
- **Push Notifications**: Stay updated with new content
- **Background Sync**: Post stories even when offline (queued for when connection returns)

## 🔑 Key Components

- **Story Feed**: Browse and discover stories from other users
- **Story Detail**: View full story content with images and map location
- **Story Creation**: Rich editor for creating new stories
- **Camera Integration**: Take photos directly within the app
- **Screenshot Utility**: Capture screenshots for your stories

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

- **Sincan Maulana** - [sincanmaulanaa](https://github.com/sincanmaulanaa)

## 🙏 Acknowledgments

- [Dicoding Indonesia](https://www.dicoding.com/) for the API service
- All contributors and testers who have helped improve this project

---

Built with ❤️ using modern web technologies
