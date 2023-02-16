import React from 'react'
import './Message.css'
function Message() {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' />
        <span>Just Now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' />
      </div>
    </div>
  )
}

export default Message