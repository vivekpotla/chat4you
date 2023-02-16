import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <hr className='hr-line m-0 p-0 text-white border border-light  border-2'/>
      <Chats/>
    </div>
  )
}

export default Sidebar