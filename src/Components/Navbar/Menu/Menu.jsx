import React from 'react'
import XIcon from '../../../Assets/XIcon'
import CategorieList from '../CategorieList'
import './menu.css'

function Menu({ sidebar, toggleSidebar }) {
  return (
    <div className={sidebar ? 'inactive' : 'active'}>
      <div className='Sidebar'>
        <div className='icon' onClick={toggleSidebar}>
          <XIcon />
        </div>
        <CategorieList />
      </div>
      <div className='Othercontent' onClick={toggleSidebar}></div>
    </div>
  )
}

export default Menu