import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const baseURL = "http://image.tmdb.org/t/p/original";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchBanner(){
            console.log("inside useeffect")
            const bannerURL = await axios.get(requests.fetchNetflixOrignals);
            console.log(bannerURL.data.results[Math.floor(Math.random() * bannerURL.data.results.length)])
            setMovie(bannerURL.data.results[Math.floor(Math.random() * bannerURL.data.results.length)]);
        }
        fetchBanner();
    }, []);

    function truncate (str, n) {
        if (str?.length > n) {
            return (str.substring(0, n) + "...");
        }
        else {
        return str;
    }
    }

    return (
        <header className="banner" style={
            {
                backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }
        }>
            {/** Background Image */}
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
                <h2 className="banner__description">{truncate(movie?.overview,150)}</h2>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
