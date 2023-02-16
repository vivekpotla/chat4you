import React from 'react'

function navbar() {
  return (
    <div className='sidenavbar'>
      <span className='logo'>Chat4you</span>
      <div className='user'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='navimg' alt="nav"/>
        <span className='mt-2'>Neeha</span>
        <button className='navbutton mt-2'>logout</button>
      </div>
    </div>
  )
}

export default navbar