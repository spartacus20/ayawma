import React, { useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Email from "../../Assets/Email";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function getEmail(){
  return document.getElementById("sign-in-email").value;
}


function RecorveryPassword() {
  

  const recaptchaRef = useRef(null);
  let navigate = useNavigate();
  const handleSumit = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();

    if (!token || !getEmail()) {
      return toast.error("Please enter your email address or check the catcha");
    }

    navigate("/password-sent?email="+getEmail());
  };
  console.log(process.env.REACT_APP_SITE_KEY)
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center  w-full max-w-md px-4 py-8 bg-white rounded-lg shadow bg-[black] sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Recovery Password
          </div>
          <div className="mt-8 w-[400px]  ">
            <form action="#" autoComplete="off">
              <div className="flex relative mb-[30px]">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <Email />
                </span>
                <input
                  type="email"
                  id="sign-in-email"
                  name="RecoveryPassword"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div className="flex relative mb-[30px]">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  ref={recaptchaRef}
                />
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={handleSumit}
                >
                  Recovery Password
                </button>
              </div>
              <br />
            </form>
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="/login"
              className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              <span className="ml-2">Do you want to login?</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecorveryPassword;
