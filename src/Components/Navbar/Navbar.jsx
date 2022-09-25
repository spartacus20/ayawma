import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../api/axios";
import CartIcon from "../../Assets/CartIcon";
import Barras from "../../Assets/Barras";
import XIcon from "../../Assets/XIcon";
import Camara from "../../Assets/Group.js";
import GameIcon from "../../Assets/GameIcon.js";
import Components from "../../Assets/Components";
import Smartphones from "../../Assets/Smartphones.js";
import Gadgets from "../../Assets/Gadgets";
import Cables from "../../Assets/Cables";
import Computers from "../../Assets/Computers";
import Acessories from "../../Assets/Acessories";
import TV from "../../Assets/TV";
import Router from "../../Assets/Router";
import Carita from "../../Assets/Carita";
import im1 from "../../Images/Foto.jpeg";

function Navbar({ Home }) {
  const [dropdown, setDropDown] = useState(false);
  const [name, setName] = useState("");
  const [loggeIn, setLoggetIn] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [search, setSeach] = useState();
  const toggleDropDown = () => setDropDown(!dropdown);
  const toggleSidebar = () => setSidebar(!sidebar);
  var isHome = Home;
  const navigate = useNavigate();
  const cookie = new Cookies();

  const handleSearch = (e) => {
    e.preventDefault();
    let product = search.replace(" ", "-");
    navigate("/s/" + product);
  };
  const handleLogOut = () => {
    cookie.remove("jid", {
      path: "/",
    });
    setLoggetIn(false);
  };

  const handleCart = (e) => {
    console.log("quantity");
  };

  useEffect(() => {
    const refreshToken = cookie.get("jid");

    const HTTP = async () => {
      try {
        const res = await axiosPrivate.get("api/user", {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        let { data } = res;
        console.log(data);
        data = data.decodedToken;
        console.log(data);
        setName(data.username);
        setLoggetIn(true);
      } catch (e) {
        setLoggetIn(false);
        cookie.remove("jid", {
          path: "/",
        });
      }
    };

    HTTP();
  }, []);

  return (
    <div className="bg-blue-100 shawdow-md w-full  top-0 left-0  fixed">
      <nav className="md:flex bg-white py-5 sm:py-1 sm:flex mx-auto">
        {/* sidebar */}

        <div
          className={`${
            sidebar ? "ml-[-5000px] " : "ml-[0px]"
          } h-[100%] w-[100%] bg-red-400 fixed top-[0px] opacity-90`}
        >
          <div
            className="c w-[10%] h-[5%] flex mt-[20px] ml-[30px] items-center justify-flex-start"
            onClick={toggleSidebar}
          >
            <XIcon />
          </div>
          <ul className="text-white">
            <li className="mb-[10px] flex justify-center items-center">
              <Camara />
              <a href="" className="ml-[5px]">
                Foto & Video{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <GameIcon />
              <a href="" className="ml-[5px]">
                Gaming{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Components />
              <a href="" className="ml-[5px]">
                Components{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Smartphones />
              <a href="" className="ml-[5px]">
                Smartphones{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Gadgets />
              <a href="" className="ml-[5px]">
                Gadgets{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Cables />
              <a href="" className="ml-[5px]">
                Cables & Adapters{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Computers />
              <a href="" className="ml-[5px]">
                Computers{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Acessories />
              <a href="" className="ml-[5px]">
                Acessories{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <TV />
              <a href="" className="ml-[5px]">
                TV{" "}
              </a>
            </li>
            <li className="mb-[10px] flex justify-center items-center">
              <Router />
              <a href="" className="ml-[5px]">
                Router{" "}
              </a>
            </li>
          </ul>
        </div>

        {/* parte de la izquierda */}

        <div className="w-[20%] flex items-center justify-center">
          <div className="flex ml-[100px] my-auto cursor-pointer text-2xl font-[Open sans] font-bold font-sans ">
            <div
              className={
                isHome
                  ? "2xl:hidden xl:hidden lg:hidden sm:mr-[10px] md:mr-[10px] "
                  : "flex 2xl:mr-[20px] 2xl:mt-[5px] xl:mr-[20px] xl:mt-[5px] lg:mr-[20px] lg:mt-[5px] sm:mr-[10px] md:mr-[10px] "
              }
              onClick={toggleSidebar}
            >
              <Barras />
            </div>
            <Link to="/">
              <span className="text-4xl xl:text-3xl sm:text-xl ml-[100xp]">
                AYAWMA
              </span>
            </Link>
          </div>
        </div>

        {/* parte del medio */}

        <div className="w-[60%] ">
          <div className="rounded-[50px] w-[80%] h-[50px] mx-auto sm:hidden  flex ml-100 border-2 border-solid border-[#000032] shadow-lg  lg:flex md:flex ">
            <form onSubmit={handleSearch} className="flex w-full">
              <input
                type="text"
                placeholder="Search for anything..."
                onChange={(e) => setSeach(e.target.value)}
                className=" border-solid border-[#000032] w-[94%] rounded-[50px] pl-[10px] outline-none  "
              />

              <button className="flex item-center w-[5%] ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto mx-auto"
                >
                  <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                    fill="black"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* parte de la derecha */}
        <div className="w-[20%] flex">
          <div className="w-[50%] text-2xl  sm:py-4  flex justify-center items-center  h-[100%]">
            <span className={loggeIn ? "hidden" : "text-[1.2rem] sm:text-base"}>
              <a href="/login">Sign in</a>
            </span>
            <div
              className={
                loggeIn
                  ? "2xl:border-2 2xl:border-[#000032] xl:border-2 xl:border-[#000032] lg:border-2 lg:border-[#000032] rounded-[50px] w-[100%] h-[100%] flex  items-center h-[100%] flex-wrap  "
                  : "hidden"
              }
              onClick={toggleDropDown}
            >
              <div className="h-[100%] flex items-center ml-[10px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden">
                <Carita />
              </div>

              <span className="text-[14px] ml-[10px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden">
                {name}
              </span>

              <a
                href="#"
                className="block relative 2xl:hidden xl:hidden lg:hidden md:flex sm:flex"
                onClick={toggleDropDown}
              >
                <img
                  alt="profil"
                  src={im1}
                  className="mx-auto object-cover  h-[32px] w-[32px] "
                />
              </a>

              {/* DropdownMenu */}

              <div
                className={
                  dropdown
                    ? "absolute 2xl:mr-[170px] 2xl:top-[60px] xl:mr-[90px] xl:top-[60px] lg:mr-[60px] lg:top-[60px] md:top-[60px] md:right-[0px] sm:top-[60px] sm:right-[0px]  w-56 rounded-md shadow-lg  bg-black  ring-1 ring-black ring-opacity-5"
                    : "hidden"
                }
              >
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600
                    sm:text-[12px] md:text-[14px]"
                    role="menuitem"
                  >
                    <span className="flex flex-col">
                      <span>Orders</span>
                    </span>
                  </a>
                  <hr />
                  <a
                    href="#"
                    className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600
                    sm:text-[12px] md:text-[14px]
                    "
                    role="menuitem"
                  >
                    <span className="flex flex-col">
                      <span>Account Settings</span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600
                    sm:text-[12px] md:text-[14px]
                    "
                    role="menuitem"
                  >
                    <span className="flex flex-col" onClick={handleLogOut}>
                      <span>Log out</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[50%] flex justify-center items-center"
            onClick={handleCart}
          >
            <Link to="/shopcart" relative="path">
              <CartIcon onClick={handleCart} />
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
