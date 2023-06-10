import React from "react";

import bgImg from "../assets/images/hero-background.jpg";
import ctaLogo1 from "../assets/images/cta-logo-one.svg";
import ctaLogo2 from "../assets/images/cta-logo-two.png";

import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import { useSelector, useDispatch } from "react-redux";
import { getSignedInUser } from "../redux/userSlice";

const Login = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        dispatch(getSignedInUser(userData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="relative">
      <div
        className="relative min-h-[100vh]"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
          <img
            src={ctaLogo1}
            alt="Hulu-Disney-ESPN"
            className="w-[600px] h-[150px] object-contain"
          />
          <button
            className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee] text-white"
            onClick={handleAuth}
          >
            Login
          </button>
          <p className="text-xs text-center text-white">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription.
          </p>

          <img
            src={ctaLogo2}
            alt="Package"
            className="w-[600px] h-[70px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
