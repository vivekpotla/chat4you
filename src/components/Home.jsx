import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import './Home.css'
export const Home = () => {
  return (
    <div className='home'>
    <div className='hcontainer'>
    <Sidebar/>
    <Chat/>
    </div>
    </div>
  )
}
