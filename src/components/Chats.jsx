import React, { useState, useEffect } from 'react'
import './Chats.css'
import {db} from '../firebase'
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch,useSelector } from 'react-redux' 
import { onclick } from '../slices/chatSlice';

function Chats() {
      let dispatch =useDispatch();
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
      //console.log(Object.entries(chats))

      //dispatching selected user to store
      const handleSelect=(u)=>{
        let actionObj = onclick(u);
        dispatch(actionObj);
      }
      console.log(Object.entries(chats))
  return (
    <div>
      {currentUser!=="null" && 
      <>
         {Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map((chat)=>(
        <div className='userchats ps-2 border-bottom' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoURL} className='searchimg' alt=""/>
        <div className='mt-3'>
        <span className='username'>{chat[1].userInfo.displayName}</span>
        <p className='msg'>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
      </>
      }
    </div>
  )
} 

export default Chats