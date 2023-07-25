import React from 'react'
import './home.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import Sidebar from '../../component/sidebar/Sidebar'
import Posts from '../../component/posts/Posts'

export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>

        <div className="homePost">
          <div className="homeFlex">
          <Sidebar/>
          <Posts/>
          </div>  
        </div>
        
    </div>
  )
}
