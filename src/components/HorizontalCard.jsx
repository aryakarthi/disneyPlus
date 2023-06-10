import React from "react";
import { useNavigate } from "react-router-dom";

const HorizontalCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const navigateMovieInfo = useNavigate();
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className=" rounded-lg
    hover:border-[2px] border-gray-500 cursor-pointer hover:scale-110 transition-all duration-150 ease-in
    "
        onClick={() => {
          navigateMovieInfo(`/movie_info?movieID=${movie.id}`);
        }}
      />
    </>
  );
};

export default HorizontalCard;
