import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

import { BsPlayFill, BsPlay, BsPlus, BsPeople } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const MovieInfo = () => {
  const TMDB_APIKEY = import.meta.env.VITE_TMDB_APIKEY;
  const MOVIE_BASE_URL = import.meta.env.VITE_TMDB_MOVIE_BASE_URL;
  const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMG_BASE_URL;

  const [params] = useSearchParams();
  const getMovieID = params.get("movieID");

  const [movie, setMovie] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    axios
      .get(
        MOVIE_BASE_URL +
          getMovieID +
          "?api_key=" +
          TMDB_APIKEY +
          "&append_to_response=videos"
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getMovieID]);


  const url = IMAGE_BASE_URL + movie.backdrop_path;

  const index = movie?.videos?.results.findIndex(
    (element) => element?.type === "Trailer"
  );

  const trailerKey = movie.videos?.results[index]?.key;

  return (
    <div
      className="md-h-[calc(100vh-78px)] h-[calc(100vh-70px)]  relative z-50"
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {movie.title || movie.original_title}
        </h1>
        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
            <BsPlayFill className="h-6 md:h-8 text-3xl" />
            <span className="uppercase font-medium tracking-wide">Play</span>
          </button>

          <button
            className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
            onClick={() => setShowPlayer(true)}
          >
            <BsPlay className="h-6 md:h-8 text-3xl" />
            <span className="uppercase font-medium tracking-wide">Trailer</span>
          </button>

          <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
            <BsPlus className="h-6 md:h-8 text-lg text-white" />
          </div>

          <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
            <BsPeople className="h-6 md:h-8 text-lg text-white" />
          </div>
        </div>

        <p className="text-xs md:text-sm text-white">
          {movie.release_date} • {Math.floor(movie.runtime / 60)}h{" "}
          {movie.runtime % 60}m •{" "}
          {movie.genres?.map((genre) => genre.name + " ")}{" "}
        </p>
        <h4 className="text-sm md:text-lg max-w-4xl text-white">
          {movie.overview}
        </h4>
      </div>

      {showPlayer && (
        <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
      )}

      <div
        className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
          showPlayer ? "opacity-100 z-50" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
          <span className="font-semibold">Play Trailer</span>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
            onClick={() => setShowPlayer(false)}
          >
            <IoClose className="h-5" />
          </div>
        </div>
        <div className="relative pt-[48%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
            width="100%"
            height="85%"
            style={{ position: "absolute", top: "0", left: "0" }}
            controls={true}
            playing={showPlayer}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
