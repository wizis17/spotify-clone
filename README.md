# 🎵 **Spotify Clone**

A fully functional **Spotify Clone** built with **React**, featuring seamless music playback, interactive playlists, and a responsive, polished user interface.  

![Spotify Clone](https://img.shields.io/badge/Spotify_Clone-1DB954?style=for-the-badge&logo=spotify&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📚 **Table of Contents**

- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🎓 What I Learned](#-what-i-learned)
- [🚀 Installation](#-installation)
- [💻 Usage](#-usage)
- [🎯 Key Features Implemented](#-key-features-implemented)
- [🎨 UI/UX Highlights](#-uiux-highlights)
- [🔮 Future Enhancements](#-future-enhancements)
- [📝 Development Journey](#-development-journey)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [🎉 Acknowledgments](#-acknowledgments)

---

## ✨ **Features**

### 🎵 Music Player
- ▶️ **Play/Pause** – Start or stop any song  
- ⏭️ **Next/Previous Track** – Skip or replay songs  
- ⏱️ **Seek Bar** – Jump to any point in the track  
- ⏳ **Real-Time Progress** – Displays playback time and duration  
- 🔊 **Volume Control** – Smooth adjustable slider  
- 🎚️ **Audio Visualizer** – Animated green bars synchronized to music  

### 🎨 User Interface
- 📱 **Responsive Design** – Works beautifully on all devices  
- 💿 **Album & Playlist Cards** – Browse interactive collections  
- 💡 **Hover Effects** – Spotify-like green glow on hover  
- 🔍 **Search Bar** – Instantly find songs (UI placeholder)  
- 🧭 **Navigation Bar & Sidebar** – Quick, clean, and functional  

### 🎼 Music Features
- 🎧 Click any song to play instantly  
- 💬 Displays song title, artist, and album art  
- 🎞️ Smooth transitions and animations  
- 🖱️ Hidden scrollbars for a modern look  

---

## 🛠️ **Technologies Used**

| Category | Technology |
|-----------|-------------|
| **Frontend** | React 18 |
| **Styling** | Tailwind CSS, CSS Animations |
| **Routing** | React Router DOM |
| **State Management** | React Context API |
| **Build Tool** | Vite |
| **Code Quality** | ESLint |

## 🎓 **What I Learned**

### 🧠 React Context API
- Built global state management for the player  
- Shared state (play/pause, track, volume) across components  
- Used `useContext` and `useReducer` for organized state control  

### 🎧 HTML5 Audio API Integration
- Controlled playback, seek, and volume  
- Managed lifecycle using `useRef` and event listeners  
- Updated UI based on real-time audio events  

### 🎨 Tailwind & CSS Animations
- Designed keyframe animations for visualizer bars  
- Applied smooth hover and scaling effects  
- Customized range sliders and scrollbars  

### 🧩 Component Architecture
- Modular, reusable components  
- Prop-driven data flow with centralized Context API  
- Separation of concerns for better maintenance  

### 🚦 Routing & Navigation
- SPA navigation using React Router  
- Dynamic album routes (`/album/:id`)  
- Navigation history with `useNavigate` and `useParams`

---

## 🚀 **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 💻 **Usage**

### ▶️ Playing Music
1. Click any song in **Today’s Biggest Hits**  
2. Control playback via bottom player bar  
3. Adjust volume or seek using sliders  

### 🎛️ Player Controls
- **Play/Pause** – Toggle playback  
- **Next/Previous** – Switch tracks  
- **Seek** – Jump to position  
- **Volume** – Adjust sound  

### 🧭 Navigation
- **Home** – Main dashboard  
- **Albums** – Browse by album  
- **Search** – Find songs (UI)  
- **Arrows** – Navigate through pages  

---

## 🎯 **Key Features Implemented**

| Category | Features |
|-----------|-----------|
| 🎵 Player | Play/Pause, Next/Prev, Volume, Seek, Real-time progress |
| 🖼️ UI | Responsive layout, Hover glow, Hidden scrollbars |
| 🧠 State | Context API global state management |
| 🧭 Routing | React Router with dynamic album routes |
| 🎨 Animation | CSS keyframes, Smooth transitions |
| 🎧 Visualizer | Animated bars on album art |

---

## 🎨 **UI/UX Highlights**

- 🧭 **Navigation Bar** – Arrows, search bar, and premium/install buttons  
- 🎚️ **Music Player** – Song info, visualizer, and custom controls  
- 💿 **Album Cards** – Clean, hover-animated grid layout  
- 📜 **Scrollable Sections** – Smooth horizontal scroll with hidden bars  

---

## 🔮 **Future Enhancements**

- [ ] Shuffle & repeat modes  
- [ ] Playlist creation & management  
- [ ] Working search feature  
- [ ] User authentication  
- [ ] Favorites / liked songs  
- [ ] Lyrics display  
- [ ] Mini player & mobile app version  
- [ ] Queue management  
- [ ] Keyboard shortcuts  

---

## 📝 **Development Journey**

### 💡 Challenges & Solutions
| Challenge | Solution |
|------------|-----------|
| Syncing audio with React state | Used refs & event listeners inside Context |
| Custom range inputs | Styled Webkit & Moz selectors manually |
| Performance in animations | Used CSS keyframes and transforms |
| Dynamic routing | Implemented album routes with URL params |

---

## 🤝 **Contributing**

Contributions are always welcome!  
You can:
- Add more songs/albums  
- Enhance player functionality  
- Improve animations or design  
- Connect to a backend for real data  

To contribute:
```bash
fork → branch → commit → push → pull request
```

---

## 📄 **License**

This project is licensed under the **MIT License**.  
You’re free to use, modify, and distribute with attribution.

---

## 👨‍💻 **Author**

Created by **Taz** 💻  
A learning project to master React, Context API, Audio APIs, and UI design.

---

## 🎉 **Acknowledgments**

- Inspired by the official **Spotify** interface  
- Built with ❤️ using **React** + **Tailwind CSS**  
- All design assets are for **educational use only**

---

> 🎶 *“Code, play, repeat.”*
