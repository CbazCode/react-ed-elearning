import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import PrivateMenu from '../Molecules/PrivateMenu.js';
import { PublicMenu } from '../Molecules/PublicMenu.js';



export const Header = () => {
  const menu = useRef();
  const toggleMenu = () => {
    menu.current.classList.toggle("show")
  }

  const removeToken = () => {
    localStorage.removeItem('token')
    window.location = "/login"
  }
  
  return (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
          <div className= "s-cols-4 lg-cols-1 s-cross-center">
            <NavLink to = "/">
              <img
                src="https://ed.team/static/images/logo.svg"
                alt="logo_ed"
                className = "main-log"
                />
            </NavLink>
          </div>
          <div className = "s-cols-1 lg-cols-3 s-cross-center s-main-end">
            <nav className = "main-menu" ref = {menu}>

              {
                !(localStorage.getItem('token')) ? 
                <PublicMenu /> :
                <PrivateMenu />
              }
            </nav>
            <div 
              className = "main-menu-toggle to-l"
              onClick = {() => toggleMenu()}
              ></div>
            
          </div>
        </div>
    </header>
  )
}
