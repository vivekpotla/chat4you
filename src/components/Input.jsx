import { arrayUnion, Timestamp, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { GrAttachment ,GrGallery} from "react-icons/gr";
import {  useSelector } from 'react-redux'
import {storage} from '../firebase.js'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import {v4 as uuid} from "uuid"
import {db} from '../firebase'
function Input() {
  let selectedUser = useSelector(state => state.chatUser[0])
  let currentUser =JSON.parse(localStorage.getItem("username"))
  const combinedId=
    currentUser.uid > selectedUser.uid
    ? currentUser.uid + selectedUser.uid
    : selectedUser.uid + currentUser.uid
  const [text,setText]=useState("")
  const [img,setImg]=useState(null)
  const handleSend=async()=>{
    if(text){
    if(img){
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, img).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        await updateDoc(doc(db,"chats",combinedId),{
          messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          img:downloadURL
        }),
      }); 
    })
  });
  }else{
      await updateDoc(doc(db,"chats",combinedId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        })
      });
    }
    await updateDoc(doc(db,"userChats",selectedUser.uid),{
      [combinedId+".lastMessage"]:{
        text,
      },
      [combinedId+".date"]:serverTimestamp(),
    });
    await updateDoc(doc(db,"userChats",currentUser.uid),{
      [combinedId+".lastMessage"]:{
        text,
      },
      [combinedId+".date"]:serverTimestamp(),
    });
    setText("")
    setImg(null)
  }
}
  return (
    <div className='input'>
      <input type="text"  placeholder='Type Something' onChange={e=>setText(e.target.value)} value={text}/>
      <div className='send '>
        <GrAttachment style={{cursor:"pointer"}}/>
        <input type="file" accept="image/*"  id="file" style={{display:"none"}} onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor='file' className='mb-1'>
          <GrGallery style={{cursor:"pointer"}} className='my-auto'/>
        </label>
        <button type="submit"className='sendButton' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input