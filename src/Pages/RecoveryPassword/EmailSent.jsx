import React, { useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify"
import { useLocation } from "react-router-dom";
import axios from "../../Services/axios";
function EmailSent() {
  const recaptchaRef = useRef(null);
  let loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const email = query.get("email");

  useEffect(() => {

    const HTTP = async () => {
      axios.post("/forgot-password", { email: email })
        .then((res) => {
          console.log(res.data.msg)
        }).catch((err) => {
          toast.error("Someting went wrong")
        })
    }

    HTTP();

  }, [])



  const handleClick = async () => {
    const response = await axios.post("/forgot-password", { email: email })
    toast.success(response.data.msg)
  }


  return (
    <>
      <Navbar />
      <div className="mx-auto xl:mt-[150px] sm:mt-[100px] 2xl:w-[38%] 2xl:h-[60%] xl:w-[40%] flex flex-wrap flex-col sm:w-[80%]">
        <h1 className="mb-[20px] font-bold text-[2rem]">AYAWMA</h1>
        <h4 className="mb-[20px] font-semibold text-[1.4rem] text-center mx-auto">
          We'll send you an email with instructions on how to reset your
          password.
        </h4>
        <p className="italic text-[0.9rem]">
          Let's do it! Check your email and click on the link to confirm. If
          you can't find your message in your inbox, check your SPAM! Heads
          up! The link will be active for 15 minutes from the moment you
          receive it. Haven't received the email yet?
        </p>


        <span className="xl:mt-[40px] mb-[40px] ">{email}</span>
        <button className="border-2 border-black mb-[40px] rounded  mx-auto py-2 px-4  bg-black hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   " onClick={handleClick}>
          Resent link
        </button>
        <ReCAPTCHA
          className="mx-auto mb-[30px]"
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={recaptchaRef}
        />
        <p className="text-[#999999]">
          If you still have doubts about the process, visit our support center
          .
        </p>
      </div>

    </>
  );
}

export default EmailSent;
