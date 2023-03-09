import React, { useState, useEffect } from 'react'
import './Chats.css'
import {db} from '../firebase'
import { doc, onSnapshot } from "firebase/firestore";
function Chats() {
  const [chats,setChats]=useState([])
  let currentUser =JSON.parse(localStorage.getItem("username"))
  useEffect(()=>{
  const getChats=()=>{
    const unsub = onSnapshot(doc(db, "userChats",currentUser.uid ), (doc) => {
      setChats(doc.data())
   });
   return ()=>{
     return unsub;
   }
  };
  currentUser.uid && getChats()
  },[currentUser.uid])
  console.log(Object.entries(chats))
  
  return (
    <div>
      {Object.entries(chats)?.map((chat)=>(
        <div className=' ps-2 border-bottom' key={chat[0]}>
        <img src={chat[1].userInfo.photoURL} className='searchimg' alt=""/>
        <div className='mt-3'>
        <span className='username'>{chat[1].userInfo.displayName}</span>
        <p className='msg'>{chat[1].userInfo.LastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
} 

export default Chats