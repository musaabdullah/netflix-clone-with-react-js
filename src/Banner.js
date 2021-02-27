import React from 'react'
import { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';
import './banner.css';
function Banner() {
 
    const [movie, setMovie] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            console.log(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }
        fetchData();
    }, [])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
     
             <header className="banner"
              style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(
                      ${baseUrl}${movie?.backdrop_path}
                  )`,
                  backgroundPosition: "center center",
              }}>
               {/* <img src={`${baseUrl}${movie.backdrop_path}`}/> */}
                <div className="banner__contents">

                {/* Background image */}
                {/* title */}
                <h1 className="banner__title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                {/* div > 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* description */}
                <h1 className="banner__description">
                 {truncate(movie?.overview, 150)}
                </h1>
                <div className="banner--fadeBottom" />
                </div>
            </header> 
     
    )
}

export default Banner
