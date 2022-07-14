import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

/* showLink serve para não renderizar o button no movie.tsx */
const movieCard = ({ movie, showLink = true }) => {
  const imageUrl = import.meta.env.VITE_IMG;
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>
      {/* url definida no react router dom */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};
export default movieCard;
