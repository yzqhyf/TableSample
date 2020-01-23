import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => (
  <div className="NavBar__container">
    <NavLink
      activeClassName="NavBar__active-item"
      to="/requests"
      exact
    >
      Code
    </NavLink>
    <NavLink
      activeClassName="NavBar__active-item"
      to="/instructions"
      exact
    >
      Instructions
    </NavLink>
    <NavLink
      activeClassName="NavBar__active-item"
      to="/wireframe"
      exact
    >
      Wireframe
    </NavLink>
  </div>
)

export default NavBar
