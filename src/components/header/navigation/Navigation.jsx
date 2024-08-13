import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'
export const Navigation = () => {
  return (
    <nav>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <NavLink className={isActive =>
            "nav-menu__item-link" + (isActive.isActive ? " selected" : "")
          } to='/'>Home</NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink className={isActive =>
            "nav-menu__item-link" + (isActive.isActive ? " selected" : "")
          } to='/contact'>Contact</NavLink>
        </li>
        <li className='nav-menu__item'>
          <NavLink className={isActive => "nav-menu__item-link" + (isActive.isActive ? " selected" : "")
          } to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
