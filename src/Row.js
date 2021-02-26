import React, { useState, useEffect } from "react";
import axios from "./axios";
import './style.css'

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row_">
      {/* title  */}
      <h2>{title}</h2>

      {/* container -> posters  */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`} 
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
