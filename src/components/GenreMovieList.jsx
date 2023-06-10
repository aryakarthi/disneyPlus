import React from "react";

import GenresList from "../constants/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genres.map((item, index) => (
        <div className="p-4 px-4 md:px-8" key={index}>
          <h2
            className="text-[20px] text-white 
                font-bold"
          >
            {item.name}
          </h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
