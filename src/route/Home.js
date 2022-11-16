import React from "react";
import "./Home.css";
import ProtoTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movies";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="contaniner">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="mainHome">
            <header>
              <h1>Download THY movies: HD smallest size</h1>
              <h3>
                Welcome to the official THY.MX(LT) Website Here you can browse
                and download TIFY movies in excellent 720p, 1080p, 2160p 4K and
                3D quality, all at the smallest file size. THY Movies Torrents
              </h3>
            </header>
            <div className="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    rate={movie.rating}
                    runtime={movie.runtime}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
