import React, { useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Message.css'
const Message=({message})=> {
  console.log(message)
  let selectedUser = useSelector(state => state.chatUser[0])
  let currentUser =JSON.parse(localStorage.getItem("username"))
  let ref=useRef();
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
  },[message])
  return (
    <div ref={ref} className={`message ${message.senderId===currentUser.uid && "owner"}` }>
      <div className='messageInfo'>
        <img src={message.senderId=== currentUser.uid? currentUser.photoURL : selectedUser.photoURL} />
      {/* <span>Just Now</span>} */}
      </div>
      <div className='messageContent'>
        <p>{message.text}</p>
        {message.img && 
        <>
        <img src={message.img} className='rounded' />  
        {/* <button className="btn btn-rounded bg-primary text-white" data-toggle="modal" data-target="#myModal">view</button> */}
        </>}
      </div>
    </div>
  )
}

export default Message