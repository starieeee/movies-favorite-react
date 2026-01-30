import { useState } from 'react';
import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const [notification, setNotification] = useState(null);
  
  function onFavoriteClick() {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
      showNotification(`You unfavorited ${movie.title}!`);
    } else {
      addToFavorites(movie);
      showNotification(`You favorited ${movie.title}!`);
    }
  }
  
  function showNotification(message) {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000); // Auto-hide after 3 seconds
  }
  
  return (
    <>
      {notification && (
        <div className="notification-toast">
          {notification}
        </div>
      )}
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : "" }`} onClick={onFavoriteClick}>
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;