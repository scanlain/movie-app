import React from 'react'
import { useNavigate } from 'react-router-dom';

const MoviePoster = ({movieId, title, imageUrl, rating }) => {

  const posterUrl = imageUrl
    ? `https://image.tmdb.org/t/p/w500/${imageUrl}` // Append the base URL for TMDb images
    : 'https://via.placeholder.com/300';

  const navigate = useNavigate(); // Initialize the navigate function

  // Handle click to navigate to the movie details page
  const handleClick = () => {
    navigate(`/movie/${movieId}`); // Redirect to the movie details page with movieId
  };

  return (
    <div onClick={handleClick} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
      <img
        // src={imageUrl}
        src={posterUrl}
        alt={title}
        style={{ width: '300px', height: '300px' }}
      />
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
};





export default MoviePoster