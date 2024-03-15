import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimage"
        />
      </div>
      <div className="absolute bg-black p-12 w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-85 ">
        <h2 className=" text-3xl my-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <form className=" " action="">
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className=" p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className=" p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Comfirm Password"
              className=" p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
            />
          )}
          <button className=" bg-red-600 w-full my-4 py-4 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm && (
            <p className=" text-center cursor-pointer my-2">Forgot Password?</p>
          )}
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            value="rememberMeValue"
          />
          <label htmlFor="rememberMe"> Remember Me</label>
          <p className=" py-6">
            {isSignInForm ? "New to Netflix?" : "Already registered"}
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? " Sign up now." : " Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
