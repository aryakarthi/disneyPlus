import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import HorizontalCard from "./HorizontalCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Keyboard, Navigation, Autoplay } from "swiper";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  return (
    <div
      className="flex overflow-x-auto gap-8
    scrollbar-none scroll-smooth pt-2 px-3 pb-2"
    >
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Keyboard, Navigation, Autoplay]}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="mySwiper w-full px-4 py-4"
      >
        {movieList.map((item, index) => (
          <SwiperSlide key={index}>
            {index_ % 3 == 0 ? (
              <HorizontalCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
