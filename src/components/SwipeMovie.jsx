import React, { useEffect, useState } from "react";

import GlobalApi from "../services/GlobalApi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const SwipeMovie = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  return (
    <div>
      <Swiper
        // slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="mySwiper2 w-full px-8 py-4"
      >
        {movieList.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={import.meta.env.VITE_TMDB_IMG_BASE_URL + item.backdrop_path}
              className="min-w-full  md:h-[50vh] object-cover
            object-left-top mr-5 rounded-md hover:border-[1px]
            border-gray-400 transition-all duration-100 ease-in-out"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeMovie;
