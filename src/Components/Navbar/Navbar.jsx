import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../api/axios";
import { Badge } from '@mui/material';
import { useStateValue } from "../../StateProvider";
import CartIcon from "../../Assets/CartIcon";
import Barras from "../../Assets/Barras";
import XIcon from "../../Assets/XIcon";
import Carita from "../../Assets/Carita";
import im1 from "../../Images/Foto.jpeg";
import SeachIcon from "../../Assets/SeachIcon";
import CategorieList from "./CategorieList";
import Dropdown from "./Dropdown";
function Navbar({ Home }) {
  const [dropdown, setDropDown] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket?.length)
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
        data = data.decodedToken;
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
      <nav className="md:flex bg-white py-5 sm:py-1 sm:flex mx-auto ">
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
          <CategorieList/>
        </div>

        {/* parte de la izquierda */}

        <div className="w-[20%] flex items-center justify-center">
          <div className="flex ml-[100px] my-auto cursor-pointer text-2xl font-[Open sans] font-bold font-sans items-center">
            <div
              className={
                isHome
                  ? "2xl:hidden xl:hidden lg:hidden sm:mr-[10px] md:mr-[10px] "
                  : "flex 2xl:mr-[20px] 2xl:mt-[5px] xl:mr-[20px] xl:mt-[5px] lg:mr-[20px] lg:mt-[5px] sm:mr-[10px] md:mr-[10px] sm:mt-[0px]"
              }
              onClick={toggleSidebar}
            >
              <Barras />
            </div>
            <Link to="/">
              <span className="text-4xl xl:text-3xl sm:text-xl ml-[100xp] ">
                AYAWMA
              </span>
            </Link>
          </div>
        </div>

        {/* parte del medio */}

        <div className="xl:w-[60%] xl:flex sm:hidden ">
          <div className="rounded-[50px] w-[80%] h-[50px] mx-auto sm:hidden  flex ml-100 border-2 border-solid border-[#000032] shadow-lg  lg:flex md:flex ">
            <form onSubmit={handleSearch} className="flex w-full">
              <input
                type="text"
                placeholder="Search for anything..."
                onChange={(e) => setSeach(e.target.value)}
                className=" border-solid border-[#000032] w-[94%] rounded-[50px] pl-[10px] outline-none  "
              />
              <button className="flex item-center w-[5%] ">
                <SeachIcon/>
              </button>
            </form>
          </div>
        </div>

        {/* parte de la derecha */}
        <div className="xl:w-[20%] flex sm:ml-[140px] sm:w-[50%]">
          <div className="xl:w-[50%] sm:w-[120px] sm:mr-[0px] text-2xl  sm:py-4  flex justify-center items-center  h-[100%]">
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
                {/* DropDown */}
                <Dropdown logOut={handleLogOut}/>
              </div>
            </div>
          </div>
          <div
            className="xl:w-[50%] sm:ml-[5px] flex justify-center items-center"
            onClick={handleCart}
          >
            <Link to="/shopcart" relative="path">
              <Badge badgeContent={basket?.length} color="primary">
                <CartIcon onClick={handleCart} />
              </Badge>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
