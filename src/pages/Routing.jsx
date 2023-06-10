import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import MovieInfo from "./MovieInfo";

import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { getSignedInUser } from "../redux/userSlice";
import Header from "../components/Header";

const Routing = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const isUser = state?.signedInUser;

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
    <div>
      <BrowserRouter>
      <Header/>
        {isUser ? (
          <>
            <Routes>
              <Route path="/home/:id" element={<Home />}></Route>
              <Route path="/movie_info" element={<MovieInfo />}></Route>
              <Route
                path="*"
                element={<Navigate to={`/home/:id`}></Navigate>}
              ></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="*"
              element={<Navigate to={`/login`}></Navigate>}
            ></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

const StateProvider = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default StateProvider;
