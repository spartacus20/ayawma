import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { BiUser } from "react-icons/bi"
import { Authentication } from "../../Services/Authentication"
import { useNavigate } from "react-router-dom";
import { Badge } from '@mui/material';
import Menu from './Menu/Menu';
import { useStateValue } from "../../StateProvider";
import CartIcon from "../../Assets/CartIcon";
import Barras from "../../Assets/Barras";
import Carita from "../../Assets/Carita";
import im1 from "../../Images/Foto.jpeg";
import SeachIcon from "../../Assets/SeachIcon";
import Dropdown from "./Dropdown";
import useScrollBlock from "../../Hooks/useScrollBlock.js"
import { info } from "autoprefixer";

function Navbar({ Home }) {
 
  const [data, setData] = useState({});
  const [blockScroll, allowScroll] = useScrollBlock()
  const [dropdown, setDropDown] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [loggeIn, setLoggetIn] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [search, setSeach] = useState();
  const toggleDropDown = () => setDropDown(!dropdown);
  const toggleSidebar = () => {
    setSidebar(!sidebar)
    if (sidebar) {
      blockScroll();
    } else {
      allowScroll();
    }
  };
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



  //TO DO: Refactor this code beacuse when i logge out it redirects to product page
  //Try to get refreshToken by cookie and check it or try to use react reducer and context 
  //To store the information of the user. 


  useEffect(() => {

    const HTTP = async () => {
      try {
        const res = await Authentication();
        
        setData(res.data[0]);
        setLoggetIn(true);
      } catch (e) {
        setLoggetIn(false);
      }
    };

    HTTP();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className={sidebar ? 'hidden' : 'h-[100%] absolute top-0'}>
        <Menu sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </div>
      <header className="w-full h-[80px] bg-white fixed z-20 flex items-center top-0">
        <nav className="xl:px-16 py-5 flex xl:container sm:w-full items-center mx-auto flex-wrap">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="flex items-center xl:px-5">
              <div className={Home ? "xl:hidden sm:flex" : "flex"} onClick={toggleSidebar} >
                <Barras />
              </div>
              <Link to="/">
                <h1 className="xl:ml-5 sm:ml-2 xl:text-2xl sm:text-lg  font-bold">AYAWMA</h1>
              </Link>
            </div>
            <form className="flex items-center h-[48px] xl:w-[600px] border-2 border-black rounded-3xl sm:hidden xl:flex">
              <input type="text" placeholder="Search for anything..." className="h-[100%] w-[92%] px-3 rounded-3xl outline-none" onChange={(e) => setSeach(e.target.value)} />
              <button onClick={handleSearch}><SeachIcon /></button>

            </form>
            <Link to="/signin">
              <span className={!loggeIn ? "xl:text-lg sm:text-md font-semibold sm:hidden xl:flex" : "hidden"}>Sign in</span>
            </Link>

            <div className={loggeIn ? "border-2 border-black rounded-3xl px-3 py-1 xl:flex sm:hidden items-center cursor-pointer relative" : "hidden"} onClick={toggleDropDown} >
              <Carita />
              <span className="text-md font-semibold ml-2" >Hi, {data.name}</span>
              <div className={dropdown ? "xl:flex sm:hidden" : "hidden"}>
                <Dropdown  logOut={handleLogOut} data={data}/>
              </div>

            </div>

            <div className="flex items-center ">
              <div className={loggeIn ? "hidden" : "flex"}>
                <Link to="/signin">
                  <BiUser size={25} className="sm:flex xl:hidden mr-3" />
                </Link>
              </div>
              <div className={loggeIn ? "flex relative" : "hidden"} onClick={toggleDropDown} >
                <BiUser size={25} className="sm:flex xl:hidden mr-3" />
                <div className={dropdown ? "xl:hidden sm:flex" : "hidden"}>
                <Dropdown logOut={handleLogOut} data={data}/>
              </div>
              </div>
              <Link to="/shopcart" relative="path">
                <Badge badgeContent={basket?.length} color="primary">
                  <CartIcon />
                </Badge>
              </Link>
            </div>
          </div>


        </nav>
      </header>

    </>
  );
}

export default Navbar;
