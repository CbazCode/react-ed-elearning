import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'



export const Header = () => {
  const menu = useRef();
  const toggleMenu = () => {
    menu.current.classList.toggle("show")
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
              <ul>
                <li><NavLink exact to = "/">Inicio</NavLink></li>
                <li><NavLink to = "/especialidades">Especialidades</NavLink></li>
                <li><NavLink to = "/cursos">Cursos</NavLink></li>
                <li><NavLink to = "/profesores">Profesores</NavLink></li>
              </ul>
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
