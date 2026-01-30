# 🎬 Movies Favorite

A modern movie browsing application that allows users to search for movies, view details, and save their favorites. Built with React and powered by The Movie Database (TMDb) API.

![Movies Favorite](https://img.shields.io/badge/React-18.x-blue)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7)

## 🌟 Features

- **Search Movies**: Search for any movie using the TMDb database
- **Browse Popular Movies**: Discover trending and popular movies
- **Favorite System**: Save your favorite movies for quick access
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Movie Details**: View movie posters, titles, and release dates
- **Persistent Storage**: Your favorites are saved in local storage

## 🚀 Live Demo

Check out the live application: [Movies Favorite](https://moviesfavorite.netlify.app/)

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Context API** - State management
- **CSS3** - Styling and animations
- **TMDb API** - Movie database
- **Netlify** - Deployment and hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movies-favorite.git
cd movies-favorite
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDb API key:
```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔑 Getting TMDb API Key

1. Go to [The Movie Database](https://www.themoviedb.org/)
2. Create an account or log in
3. Navigate to Settings > API
4. Request an API key
5. Copy your API key and add it to your `.env` file

## 📁 Project Structure
```
movies-favorite/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── contexts/
│   │   └── MovieContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   └── ...
│   ├── css/
│   │   ├── MovieCard.css
│   │   └── ...
│   ├── App.jsx
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🎨 Features in Detail

### Search Functionality
- Real-time search as you type
- Searches across the entire TMDb database
- Displays relevant results instantly

### Favorites Management
- Add/remove movies from favorites with one click
- Toast notifications for user feedback
- Favorites persist across sessions using local storage

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Website: [yourwebsite.com](https://yourwebsite.com)

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the amazing framework
- [Netlify](https://www.netlify.com/) for seamless deployment

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Search Results
![Search Results](screenshots/search.png)

### Favorites Page
![Favorites](screenshots/favorites.png)

---

⭐ If you found this project helpful, please consider giving it a star!
