import React, { useState } from 'react'
import "./navbar.css"
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineUser} from 'react-icons/ai'; 
import {BsHeadphones, BsSearch, BsCart} from 'react-icons/bs'; 
import {GiProcessor} from 'react-icons/gi'; 
function Navbar() {

  const [isActive, setActive] = useState(false); 

  const showSidebar = () => !setActive(!isActive); 

  const [isUser, setUser] = useState(false); 
  const showUserInfo = () => setUser(!isUser);

  return (
    <header className="NAVBAR">
      <div className="left">
        <div className="icon1"> <RiBarChartHorizontalFill size={40}  onClick={showSidebar}/> </div> 
            <nav className={isActive ? 'nav-menu active': 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="nav-icon">
                  <AiOutlineClose  onClick={showSidebar} size={30}/>
                  <a href="/">AYAWMA</a>
                </li>
                <li className="nav-text"></li>
                <li className="nav-text">
                    <GiProcessor/> <a href="">Componentes</a> 
                  
                </li>
                <li className="nav-text">
                <BsHeadphones/> <a href="">Periféricos</a> 
                </li>

              </ul>
            </nav>
        <div className="BussinessName"><a href="/">AYAWMA</a></div>
      </div>
      <div className="middle">
          <div className="SearchBar">
  
            <div className="SearchIcon"><BsSearch size={20}/></div>
            <input type="text" name="searchbar" id="" className='bar'/>
          </div>
         
      </div>
      <div className="right">
          <div className={isUser ? 'Usericon active': 'Usericon'}>
            <AiOutlineUser onClick={showUserInfo} size={40}/>
            <div className={isUser ? 'UserInfo active': 'UserInfo'}>
              <a href="">Login</a>
              <a href="">Register</a>
            </div>
          </div>
          <div className="UserCart">
            <BsCart size={40}/> 
          </div>
      </div>  



    </header>

  )
}

export default Navbar