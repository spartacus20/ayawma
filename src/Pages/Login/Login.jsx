import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"

import Cookies from "universal-cookie";
import Email from "../../Assets/Email";
import Password from "../../Assets/Password";
import GoogleLogin from "react-google-login";
import axios from "../../Services/axios";

function Login() {

  const [completed, setCompleted] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const cookie = new Cookies();
  const clientId = "235810836453-l5j7h9ithmbsf1is1bsld3o7aao9rmiv.apps.googleusercontent.com";
  const LOGIN_URL = "/users/login";

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(LOGIN_URL, {
      username: "",
      email: email,
      password: password
    }).then(res => {
      const { data } = res;
      cookie.set("jid", data.refreshToken, {
        maxAge: 60 * 60 * 24 * 7, // 7 is relative to the days.
        path: "/",
      });
      window.location.href = "/"
    }).catch(err => {
      console.log(err);
    })
  };

  const emailCompleted = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 5) {
      setCompleted(true);
    }
  }

  const responseGoogle = (response) => {


    const googleEmail = response.profileObj.email

    console.log(response.profileObj)
    axios.post(LOGIN_URL, {
      username: response.profileObj.name,
      email: googleEmail,
      password: password
    }).then(res => {
      const { data } = res;
      console.log(data)
      cookie.set("jid", data.refreshToken, {
        maxAge: 60 * 60 * 24 * 7, // 7 is relative to the days.
        path: "/",
      });
      window.location.href = "/"
    }).catch(err => {
      toast.error(err.message)
    })

  };

  //CHECK IF USER IS ALREADY LOGGED IN
  useEffect(() => {
    document.title = "Ayawma Sign-In"
    if (cookie.get("jid") != null) {
      window.location.href = "/"
    }
  })


  return (
    <>
      <Navbar />
      <div className="mx-auto mt-[150px] bg-[#CBCBCB] xl:w-[400px] sm:w-[380px] px-6 py-6 rounded-xl">

        <h2 className="text-2xl font-semibold mb-10">Sign in</h2>
        <input type="email" name="" id="" placeholder="Enter your email address" className="w-full h-[45px] rounded-lg pl-3 border-2 border-black mb-5" onChange={emailCompleted} />
        <input type="password" name="" id="" placeholder="Enter your password" className={completed ? " w-full h-[45px] rounded-lg pl-3 border-2 border-black mb-1 " : "hidden"} onChange={(e) => setPassword(e.target.value)} />

        <Link to="/recovery-password">
          <p className={completed ? "text-right text-gray-500 sm:text-sm hover:text-gray-700 mb-5 cursor-pointer" : "hidden"}>Forgot Password?</p>
        </Link>

        <button className="w-full h-[54px] bg-black text-white rounded-lg mb-7" onClick={handleLogin}>Sign in</button>

        <Link to="/signup">
          <p className="text-lg font-semibold text-center mb-10 cursor-pointer">Sign up</p>
        </Link>

        <h5 className="text-lg font-semibold text-center mb-5">or</h5>

        <GoogleLogin
          className="w-full rounded-lg"
          clientId={clientId}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />



      </div>

    </>

  );
}

export default Login;
