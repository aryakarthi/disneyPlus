import React , { useEffect }from "react";

import ProductionHouse from "../components/ProductionHouse";
import SwipeMovie from "../components/SwipeMovie";
import GenreMovieList from "../components/GenreMovieList";

import { useSelector, useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { getSignedInUser } from "../redux/userSlice";

const Home = () => {

  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getSignedInUser(user));
      } else {
        dispatch(getSignedInUser(null));
      }
    });
  }, []);

  return (
    <>
      <SwipeMovie />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
};

export default Home;
