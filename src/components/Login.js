import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkPasswordMatched, checkValidations } from "../utils/Validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    // validate the form
    const message = checkValidations(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setNameError(message.name);
    setEmailError(message.email);
    setPasswordError(message.password);
    console.log(name?.current?.value + "  " + nameError);

    // check password validation for sign up
    if (!isSignInForm) {
      const isPasswordMatched = checkPasswordMatched(
        password?.current?.value,
        confirmPassword?.current?.value
      );
      setConfirmPasswordError(isPasswordMatched);
    }

    // do sign in/up
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
        <form onSubmit={(e) => e.preventDefault()} className=" " action="">
          {!isSignInForm && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className=" p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
              />
              {nameError != null && (
                <p className="py-2 font-bold text-red-600">{nameError}</p>
              )}
            </>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className=" p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
          />
          {emailError != null && (
            <p className="py-2 font-bold text-red-600">{emailError}</p>
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
          />
          {passwordError != null && (
            <p className="py-2 font-bold text-red-600">{passwordError}</p>
          )}
          {!isSignInForm && (
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Comfirm Password"
              className=" p-4 my-2 w-full bg-gray-800 bg-opacity-40 border border-white  rounded-lg"
            />
          )}
          {confirmPasswordError != null && (
            <p className="py-2 font-bold text-red-600">
              {confirmPasswordError}
            </p>
          )}
          <button
            className=" bg-red-600 w-full my-4 py-4 rounded-lg"
            onClick={handleFormSubmit}
          >
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
            <span
              className="cursor-pointer font-bold"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up now." : " Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
