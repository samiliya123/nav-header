import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbarCard">
      <ul className="navbarList">
        <li className="navbarListed">Home</li>
        <li className="navbarListed">About</li>
        <li className="navbarListed">News</li>
      </ul>
     
     </div>
     <button className='navBtn'>Sign in</button>
     
    </div>
  )
}
