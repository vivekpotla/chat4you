import { onSnapshot,doc } from 'firebase/firestore'
import {db} from '../firebase'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Message from './Message'
function Messages() {
  let selectedUser = useSelector(state => state.chatUser[0])
  let currentUser =JSON.parse(localStorage.getItem("username"))
  const [messages,setMessages]=useState([])
  const combinedId=
    currentUser.uid > selectedUser.uid
    ? currentUser.uid + selectedUser.uid
    : selectedUser.uid + currentUser.uid
  useEffect(()=>{
    const unSub=onSnapshot(doc(db,"chats",combinedId),(doc)=>{
      doc.exists() && setMessages(doc.data())
    })
    return()=>{
      unSub()
    }
  },[combinedId])
  console.log(combinedId)
  return (
      <>
      <div className='messages'>
      { messages.length &&  messages.map(m=>(
        <Message message={m}/>
      ))
      }
      </div>
      </>
    
  )
}

export default Messages