# Game Hub

**Game Hub** is a responsive, multi-page app for discovering video games, allowing users to search, filter, sort, and explore detailed game information. Built with modern front-end technologies and best practices, Game Hub delivers a seamless and engaging user experience optimized for performance.

## 🚀 Live Demo

<a href="https://game-hub-eb.com" target="_blank" rel="noopener noreferrer">**Game Hub App**</a>
<a href="https://github.com/eborjiantech/game-hub" target="_blank" rel="noopener noreferrer">**GitHub Repository**</a>

## ✨ Features

### **1. Core Functionality**

- **Game Discovery:**

  - Search, filter, sort, and view video games with data powered by the <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer">RAWG Video Games Database API</a>.
  - Game cards dynamically display images, platform icons, critic scores, and emojis based on ratings.

- **Game Details:**
  - Expandable descriptions and detailed attributes, including platforms, genres, critic scores, and publishers.
  - View optimized, high-quality game trailers and screenshots rendered dynamically based on viewport size.

### **2. User Experience**

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Dark Mode:** Toggle between light and dark themes.
- **Error Handling:** Gracefully handles API errors and invalid routes with user-friendly messages.
- **Performance Optimization:**
  - Optimized `.webp` images and assets for faster loading.
  - Graceful handling of games missing backend-provided images.
  - Ships genres and platforms as static data, ensuring faster loading and improved user experience.

### **3. Advanced Features**

- **Infinite Scrolling:** Browse large datasets seamlessly.
- **Dynamic Filtering:** Genre and platform filters update game listings instantly.
- **Sorting:** Sort games by relevance, date added, name, release date, popularity, or average rating.
- **CI/CD Pipeline:** Integrated with GitHub and Vercel for automated deployments triggered by pushes to the `main` branch.

## 🛠️ Tech Stack

### **Front-End**

- **React**: Library for building dynamic and interactive user interfaces.
- **TypeScript**: Typed superset of JavaScript enabling safer and scalable development.
- **React Router**: Library for multi-page navigation.
- **Zustand**: Library for managing shared application state.
- **React Query**: Library for efficient data fetching and caching.
- **Chakra UI**: Component library for responsive and accessible design.
- **React Infinite Scroll Component**: Library for infinite scrolling.

### **API Integration**

- **RAWG API**: API for retrieving game data, including names, descriptions, images, videos, platforms, genres, publishers, and critic scores.
- **Axios**: Library for handling HTTP requests and errors.
- **ms**: Library for simplifying time calculations.

### **Version Control**

- **GitHub**: Platform for repository hosting and collaboration.

### **Build and Deployment**

- **Vite**: Build tool for fast and efficient web development.
- **Vercel**: Platform for CI/CD pipelines and automatic deployments.

## 🧩 System Design

### **State Management**

- Centralized using Zustand for managing queries like genre, platform, sorting, and search text.

### **Data Flow**

- **Fetching:** React Query retrieves data from the RAWG API with efficient caching and infinite scrolling.
- **Rendering:** Game cards and details dynamically update based on user interactions.

### **Routing**

- **Multi-Page Setup:**
  - **Home Page:** Browse, filter, and sort games.
  - **Game Details Page:** View in-depth information about a selected game.
  - **Error Page:** Handles unexpected errors and invalid routes gracefully.

## 🚦 Getting Started

### **Installation**

1. Clone the repository:

```bash
git clone https://github.com/eborjiantech/game-hub.git
```

2. Navigate to the project directory:

```bash
cd game-hub
```

3. Install dependencies:

```bash
npm install
```

### **Running Locally**

Start the development server:

```bash
npm run dev
```

## 🌟 Acknowledgements

- RAWG API for providing detailed game data.
- Chakra UI for enabling responsive and accessible design.
- Zustand, React Query, and React Router for state management, data fetching, and navigation.

## ⚠️ Disclaimer

- This application was created for learning purposes and is inspired by <a href="https://rawg.io" target="_blank" rel="noopener noreferrer">RAWG</a>, a video game discovery site that allows users to browse and discover games. RAWG also provides developers access to its extensive database of over 500,000 video games.
- This project is not affiliated with RAWG and is not intended for commercial use or distribution.
