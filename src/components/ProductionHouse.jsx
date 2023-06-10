import React from "react";

import disneyImg from "../assets/images/disney.png";
import marvelImg from "../assets/images/marvel.png";
import natgeoImg from "../assets/images/nationalG.png";
import pixarImg from "../assets/images/pixar.png";
import starwarImg from "../assets/images/starwar.png";

import starwarVid from "../assets/videos/star-wars.mp4";
import disneyVid from "../assets/videos/disney.mp4";
import marvelVid from "../assets/videos/marvel.mp4";
import natgeoVid from "../assets/videos/national-geographic.mp4";
import pixarVid from "../assets/videos/pixar.mp4";

const ProductionHouse = () => {
  const phList = [
    {
      id: 1,
      image: disneyImg,
      video: disneyVid,
    },
    {
      id: 2,
      image: pixarImg,
      video: pixarVid,
    },
    {
      id: 3,
      image: marvelImg,
      video: marvelVid,
    },
    {
      id: 4,
      image: starwarImg,
      video: starwarVid,
    },
    {
      id: 5,
      image: natgeoImg,
      video: natgeoVid,
    },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row gap-5 md:gap-5 p-2 px-5 md:px-16 ">
      {phList.map((item) => (
        <div key={item.id}
          className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 w-[200px] md:w-[auto]
            "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
