import React from 'react'
import './Chat.css'
import { FaVideo } from 'react-icons/fa';
import {AiOutlineUserAdd} from 'react-icons/ai'
import {GrMore} from 'react-icons/gr'
import Messages from './Messages';
import Input from './Input';

function chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className="d-flex gap-3 my-auto">
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='sender-img ' />
        <span className='my-auto'>Vivek Chowdary</span>
        </div>
        <div className='chatIcons d-flex gap-4'>
          <FaVideo style={{cursor:"pointer"}}/>
          <AiOutlineUserAdd style={{cursor:"pointer"}}/>
          <GrMore style={{cursor:"pointer"}}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default chat