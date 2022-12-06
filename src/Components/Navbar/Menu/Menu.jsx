import React from 'react'
import XIcon from '../../../Assets/XIcon'
import CategorieList from '../CategorieList'
import './menu.css'

function Menu({ sidebar, toggleSidebar }) {
  return (
    <div className={sidebar ? 'inactive' : 'active'}>
      <div className='Sidebar'>
        <div className='icon' onChange={toggleSidebar}>
          <XIcon />
        </div>
        <CategorieList />
      </div>
      <div className='Othercontent' onChange={toggleSidebar}></div>
    </div>
  )
}

export default Menu