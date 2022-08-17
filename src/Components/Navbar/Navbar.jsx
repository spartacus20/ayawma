import React, { useState } from 'react'
import "./navbar.css"
import { RiBarChartHorizontalFill } from 'react-icons/ri';
 

function Navbar() {

  const [isActive, setActive] = useState(false); 

  const showSidebar = () => !setActive(!isActive); 

  return (
    <div className="NAVBAR">
      <div className="left">
      <div className="icon1"> <RiBarChartHorizontalFill size={33}  onClick={showSidebar}/></div> 
          <nav className={isActive ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="nav-icon">
                
              </li>
              <li className="nav-text">

              </li>
              <li className="nav-text">
                
              </li>

            </ul>



          </nav>
      </div>
      <div className="middle">

      </div>
      <div className="right">

      </div>



    </div>

  )
}

export default Navbar