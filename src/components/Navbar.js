import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './Navbar.css'
import {Button} from 'react-bootstrap'
import { logout } from '../slices/userSlice'
import { removechat } from '../slices/chatSlice'
import { useDispatch } from 'react-redux'
function Navbar() {
   let dispatch = useDispatch()
   let navigate=useNavigate()
   function LogOut() {
    alert("Successfully logged out")
    localStorage.removeItem('username')
    dispatch(logout())
    dispatch(removechat())
    navigate('/login')
}
let currentUser =JSON.parse(localStorage.getItem("username"))
  return (
    <div className='sidenavbar'>
      <span className='logo'>Chat4you</span>
      <div className='user'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='navimg' alt="nav"/>
        <span className='mt-2'>{currentUser.displayName}</span>
      </div>
      <Button onClick={LogOut} className='btn btn-secondary text-white rounded-pill' ><FiLogOut className=''/></Button>
    </div>
  )
}

export default Navbar