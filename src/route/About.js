import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  if (location.state) {
    const { title, poster, summary, year, genres, rate, runtime } =
      location.state;
    return (
      <section
        className="about_page"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.8)), url(${poster})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
        }}
      >
        <div className="movie_description">
          <div className="movie_watch">
            <img className="img" src={poster}></img>
            <button
              style={{
                width: "230px",
                height: "50px",
                backgroundColor: "skyblue",
              }}
            >
              Download
            </button>
            <button
              style={{
                width: "230px",
                height: "50px",
                backgroundColor: "lightgreen",
              }}
            >
              Watch Now
            </button>
          </div>
          <div className="contents">
            <h1>{title}</h1>
            <h3>{year}</h3>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>
                  <h3>{genre}</h3>
                </li>
              ))}
            </ul>
            <div className="download">
              <img
                className="download_img"
                src="https://i.postimg.cc/vZr5M5zz/download.png"
                alt="download"
                style={{ backgroundColor: "lightgreen" }}
              ></img>
              <h2 style={{ color: "lightgreen" }}>Available in: 720.WEB</h2>
            </div>

            <button
              style={{
                background: "none",
                color: "green",
                fontSize: "24px",
                borderStyle: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ♡
            </button>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>: 0</span>
            <h3 style={{ fontSize: "24px" }}>rate : {rate}</h3>
            <h3 style={{ fontSize: "24px" }}>runtime : {runtime}</h3>
            <h3>Summary</h3>
            <h3>{summary}</h3>
          </div>
        </div>
      </section>
    );
  }
  return null;
}

export default About;
