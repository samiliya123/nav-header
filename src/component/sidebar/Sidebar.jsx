import React from 'react'
import './sidebar.css'
import { SidebarData } from '../sideData/SidebarData'

export default function Sidebar() {
  
  return (
    <div className='sidebar'>
      <ul className="sidebarList">
        {SidebarData.map((val, key) =>
        <li className="sidebarListed" id={window.location.pathname === val.link ? 'active' : ''} key={key} onClick={() => {window.location.pathname = val.link}}>
          <div className="sidebarIcon">{val.icon}</div>
          <div className="sidebarTitle">{val.title}</div>
        </li>
        )}
      </ul>
    </div>
  )
}
