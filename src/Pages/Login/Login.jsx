import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import Email from "../../Assets/Email";
import Password from "../../Assets/Password";
import GoogleLogin from "react-google-login";

function showPassword() {
  var x = document.getElementById("sign-in-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



function Login() {
  const clientId =
    "235810836453-l5j7h9ithmbsf1is1bsld3o7aao9rmiv.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <div class="flex flex-col items-center  w-full max-w-md px-4 py-8 bg-white rounded-lg shadow bg-[black] sm:px-6 md:px-8 lg:px-10">
          <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Login To Your Account
          </div>
          <div class="mt-8 w-[400px]  mt-[100px] ">
            <form action="#" autoComplete="off">
              <div class="flex flex-col mb-2 ">
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <Email />
                  </span>
                  <input
                    type="text"
                    id="sign-in-email"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm"
                  onClick={showPassword}>
                    <Password />
                  </span>
                  <input
                    type="password"
                    id="sign-in-password"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your password"
                  />
                </div>
              </div>
              <div class="flex items-center mb-6 -mt-4">
                <div class="flex ml-auto">
                  <a
                    href="/recovery-password"
                    class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>
              <div class="flex w-full">
                <button
                  type="submit"
                  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Login
                </button>
              </div>
              <br />

              <div class="flex flex-col w-full">
                <GoogleLogin
                  clientId="235810836453-l5j7h9ithmbsf1is1bsld3o7aao9rmiv.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  buttonText="Continue  with Google"
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </form>
          </div>

          <div class="flex items-center justify-center mt-6">
            <a
              href="/signin"
             
              class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              <span class="ml-2">You don&#x27;t have an account?</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
