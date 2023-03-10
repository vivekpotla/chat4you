import React from 'react'
import './Chat.css'
import { FaVideo } from 'react-icons/fa';
import {AiOutlineUserAdd} from 'react-icons/ai'
import {GrMore} from 'react-icons/gr'
import Messages from './Messages';
import Input from './Input';
import { useSelector } from 'react-redux';

function Chat() {
  
  
  let selectedUser = useSelector(state => state.chatUser[0])
  console.log("Selected user from store ", selectedUser)
  
  return (
    <div className='chat'>
      {/* When a user is selected */}
      { 
      selectedUser!==undefined 
      &&
      <>
      <div className="chatInfo">
        <div className="d-flex gap-3 my-auto">
        <img src={selectedUser.photoURL} className='sender-img ' />
        <span className='my-auto'>{selectedUser.displayName}</span>
        </div>
        <div className='chatIcons d-flex gap-4'>
          <FaVideo style={{cursor:"pointer"}}/>
          <AiOutlineUserAdd style={{cursor:"pointer"}}/>
          <GrMore style={{cursor:"pointer"}}/>
        </div>
      </div>
      
      <Messages/>
      <Input/>
      </>
    }

    {/* No user selected */}
   {selectedUser==undefined &&
        <div>
          No user selected
        </div>
   }
    </div>
  )
}

export default Chat