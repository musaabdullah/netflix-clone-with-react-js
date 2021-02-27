import React, { useState, useEffect } from "react";
import axios from "./axios";
import './style.css'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try{
        const request = await axios.get(fetchUrl);
        
        if(request.status !== 200){
          throw Error 
        }
        console.log(request.data.results);
        setMovies(request.data.results);
      } catch (error) {
     
        setError(error.message);
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row_">
      {/* title  */}
      <h2>{title}</h2>

      {/* container -> posters  */}
      {error && <div className="">Error: You can't get data check your internet connection.</div>}
      {movies && <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row_posterLarge": ""}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          />
        ))}
      </div>}
    </div>
  );
}

export default Row;
