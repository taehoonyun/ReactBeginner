import React from "react";
import PropTypes from "prop-types";
import "./Moive.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres, rate, runtime }) {
  return (
    <Link
      to="/About"
      state={{ id, year, title, summary, poster, genres, rate, runtime }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genges_genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
