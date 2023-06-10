import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

import HeaderItem from "./HeaderItem";

import { useSelector, useDispatch } from "react-redux";

import { auth, provider } from "../config/firebase";
import { signOut } from "firebase/auth";

import { logOut } from "../redux/userSlice";

const Header = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const userStatus = state?.signedInUser;
  const userDP = state?.signedInUser?.photoURL;

  const defaultImg =
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745";

  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watch List",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <Link to={"/home/:id"}>
          <img
            src={logo}
            className="w-[80px] 
        md:w-[115px] object-cover"
          />
        </Link>
        {userStatus ? (
          <>
            <div className="hidden lg:flex gap-5">
              {menu.map((item, index) => (
                <Link key={index} to={item.name === "Home" ? "/home/:id" : "/"}>
                  <HeaderItem name={item.name} Icon={item.icon} />
                </Link>
              ))}
            </div>
            <div className="flex lg:hidden gap-5">
              {menu.map(
                (item, index) =>
                  index < 2 && (
                    <Link
                      key={index}
                      to={item.name === "Home" ? "/home/:id" : "/"}
                    >
                      <HeaderItem name={""} Icon={item.icon} />
                    </Link>
                  )
              )}
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
      {userDP ? (
        <img
          src={userDP}
          className="w-[30px] rounded-full"
          onClick={handleLogOut}
        />
      ) : (
        <img src={defaultImg} className="w-[30px] rounded-full" />
      )}
    </div>
  );
};

export default Header;
