import React from "react";

import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigateMovieInfo = useNavigate();
  return (
    <>
      <img
        src={import.meta.env.VITE_TMDB_IMG_BASE_URL + movie.poster_path}
        className=" rounded-lg
        hover:border-[2px] border-gray-500 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in"
        onClick={() => {
          navigateMovieInfo(`/movie_info?movieID=${movie.id}`);
        }}
      />
    </>
  );
};

export default MovieCard;
