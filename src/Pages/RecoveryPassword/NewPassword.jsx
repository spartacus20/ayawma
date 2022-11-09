import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Password from "../../Assets/Password";
import { toast } from "react-toastify"
import PasswordStrengthBar from 'react-password-strength-bar';
import axios from "../../Services/axios";

function showPassword() {
    var x = document.getElementById("reset-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }





function NewPassword() {

    const navigate = useNavigate();
    const {id, token} = useParams();
    const [password, setPassword] = useState(""); 
    const handleClick = async () => {
      const response = await axios.post("/reset-password/"+id+"/"+token, { password })
      toast.success(response.data.msg)
      navigate("/login")
    }


  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="w-[38%] h-[60%] border-2 border-black flex flex-wrap flex-col bg-black">
          <h1 className="mb-[20px] font-bold text-[2rem] text-white mt-[10%]">
            AYAWMA
          </h1>
          <h4 className="mb-[10px] font-semibold text-[1.4rem]  ml-[110px] text-white  text-left">
            New password
          </h4>
          <h6 className="text-[#999999] text-left mb-[20px] ml-[110px]">
            Enter your new password
          </h6>
          <div className="flex relative mb-[20px] w-[60%] mx-auto">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm"
            onClick={showPassword}
            >
              <Password />
            </span>
            <input
              type="password"
              id="reset-password"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Your password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <PasswordStrengthBar 
            className="w-[60%] mx-auto"
          password={password} />
         
          
          <div className="flex w-[50%] mx-auto">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={handleClick}
            >
              Update password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
