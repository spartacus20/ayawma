import React from 'react'
import GoogleLogin from "react-google-login";
import Email from "../../Assets/Email";
import Password from "../../Assets/Password";
import Navbar from '../../Components/Navbar/Navbar';
import {FaUserAlt} from "react-icons/fa";

function Register() {
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
          Sign in 
        </div>
        
        <div class="mt-8 w-[400px]  mt-[100px] ">
          <form action="#" autoComplete="off">
            <div class="flex flex-col mb-2 ">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <FaUserAlt />
                </span>
                <input
                  type="text"
                  id="sign-in-email"
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div class="flex flex-col mb-2 ">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <Email />
                </span>
                <input
                  type="email"
                  id="sign-in-email"
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div class="flex flex-col mb-2">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <Password />
                </span>
                <input
                  type="password"
                  id="sign-in-email"
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your password"
                />
                
              </div>
            </div>

            <div class="flex flex-col mb-6">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <Password />
                </span>
                <input
                  type="password"
                  id="sign-in-email"
                  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your password"
                />
                
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
            href="/login"
     
            class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span class="ml-2">You have an account?</span>
          </a>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register