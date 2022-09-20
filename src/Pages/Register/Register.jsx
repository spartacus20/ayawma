import React, { useState, useEffect} from "react";
import { useNavigate} from "react-router-dom"
import axios from "../../api/axios";
import Cookies from "universal-cookie";
import GoogleLogin from "react-google-login";
import Navbar from "../../Components/Navbar/Navbar";
import Email from "../../Assets/Email";
import Password from "../../Assets/Password";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";


//TO DO: CHECH IF EMAIL CONTAINS @ AND .COM... AND IF THE PASSWORD IS STRONG

function Register() {

  const clientId = "235810836453-l5j7h9ithmbsf1is1bsld3o7aao9rmiv.apps.googleusercontent.com"; //Google CLIENT ID.
  const cookie = new Cookies();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const REGISTER_URL = "/users/register";

  //Register button Click.
  const handleClick = (e) => {
    e.preventDefault();
    if (password != repeatedPassword) {
      toast.error("Passwords do not match");
    } else if (password == ""|| userName == "" || email  == "" || repeatedPassword == "" ){
      toast.error("Fill the form with the fields");
    }else{
      axios
        .post(REGISTER_URL, {
          username: userName,
          email: email,
          password: password,
        })
        .then((response) => {
          //Create cookie with refreshToken only to server access.
          const { data } = response;
          console.log(data)
       
          cookie.set("jid", data.refreshToken, {
            maxAge: 60 * 60 * 24 * 7, // 7 is relative to the days.
            path: "/",
          });
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.refreshToken}`; 
          window.location.href = "/"
        })
        .catch((error) => {
          toast.error("User aleready registered", {
            theme: "dark",
          });
        });

    }
  };

  //Google Button login Response Handler.
  const responseGoogle = (response) => {
    const usernameReg = response.profileObj.name;
    const email = response.profileObj.email;
    const googleToken = response.tokenId;

    axios
      .post(REGISTER_URL, {
        username: usernameReg,
        email: email,
        googleToken: googleToken,
      })
      .then((response) => {
        const { data } = response;
        console.log(data)
    
        cookie.set("jid", data.refreshToken, {
          maxAge: 60 * 60 * 24 * 7, // 7 is relative to the days.
          path: "/",
        });
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.refreshToken}`;
        window.location.href = "/"
      });
  };

  //CHECK IF USER IS ALREADY LOGGED IN
  useEffect(() => {
    if(cookie.get("jid") != null){ 
      window.location.href = "/"
    }
  })


  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center  w-full max-w-md px-4 py-8 bg-white rounded-lg shadow bg-[black] sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Sign in
          </div>

          <div className="mt-8 w-[400px]  mt-[100px] ">
            <form autoComplete="off">
              <div className="flex flex-col mb-2 ">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <FaUserAlt />
                  </span>
                  <input
                    type="text"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2 ">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <Email />
                  </span>
                  <input
                    type="email"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <Password />
                  </span>
                  <input
                    type="password"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <Password />
                  </span>
                  <input
                    type="password"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your password"
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Login
                </button>
              </div>
              <br />

              <div className="flex flex-col w-full">
                <GoogleLogin
                  clientId={clientId}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle} // TODO: Create a new function on failure.
                  buttonText="Continue  with Google"
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="/login"
              className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              <span className="ml-2">You have an account?</span>
            </a>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
