import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './Navbar.css'
function navbar() {
  return (
    <div className='sidenavbar'>
      <span className='logo'>Chat4you</span>
      <div className='user'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='navimg' alt="nav"/>
        <span className='mt-2'>Sweety</span>
      </div>
      <Link to='/login' className='btn btn-secondary text-white rounded-pill'><FiLogOut className=''/></Link>
    </div>
  )
}

export default navbar