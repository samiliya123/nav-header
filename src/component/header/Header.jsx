import React from 'react'
import './header.css'
 

export default function Header() {
  return (
    <div className='header'> 
    <div className="headerSearch">
    <i   class="fa-solid fa-magnifying-glass"></i>
    <input type="text" className='input' placeholder='Type to search...' />
    </div>
     
       <img className='headerImg' src="./assets/images/witch.jpg.jpg"   alt="" />
       
    </div>
  )
}
