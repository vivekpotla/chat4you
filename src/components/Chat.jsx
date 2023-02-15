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
        <span>Username</span>
        <div className='chatIcons d-flex gap-4'>
          <FaVideo/>
          <AiOutlineUserAdd/>
          <GrMore/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default chat