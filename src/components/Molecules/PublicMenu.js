import React from 'react'
import { NavLink } from 'react-router-dom'

export const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
    </ul>
  )
}
