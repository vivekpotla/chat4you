import React from 'react'
import './Chats.css'
function chats() {
  return (
    <div className=''>
    <div className='chats ps-2'>
          <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='searchimg' alt=""/>
          <div className='mt-3'>
          <span className='username'>Neeha</span>
          <p className='msg'>Hello</p>
          </div>
    </div>
      <div className='chats ps-2'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='searchimg' alt=""/>
        <div className='mt-3'>
        <span className='username'>Neeha</span>
        <p className='msg'>Hello</p>
        </div>
      </div>
      <div className='chats ps-2'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='searchimg' alt=""/>
        <div className='mt-3'>
        <span className='username'>Neeha</span>
        <p className='msg'>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default chats