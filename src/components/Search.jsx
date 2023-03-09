import React, { useContext, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { collection, query, where, getDocs, getDoc, setDoc,doc, updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import './Search.css'
import './Chats.css'
function Search() {
  const [username,setUsername]=useState("")
  const [user,setUser]=useState(null)
  const [err,setErr]=useState(false)
  let currentUser = useSelector(state => state.user[0])
  const handleSelect =async()=>{
    //check if the chats collection for two users exist or not and create new one if no
   
    console.log("searched user " , user)
    console.log("current user ", currentUser)
    const combinedId=
    currentUser.uid > user.uid
    ? currentUser.uid + user.uid
    : user.uid + currentUser.uid
    try{
      const res=await getDoc(doc(db,"chats",combinedId))
      if(!res.exists()){
        //create chat in chats collection
        await setDoc(doc(db,"chats",combinedId),{messages:[]})
        //create user chats in firestore
        await updateDoc(doc(db,"userchats",currentUser.uid),{
          [combinedId.uid+"userInfo"]:{
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId+"date"]:serverTimestamp()
        })
        await updateDoc(doc(db,"userchats",user.uid),{
          [combinedId.uid+"userInfo"]:{
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+"date"]:serverTimestamp()
        })
      }
    }catch(err){}
  }
  const handleSearch =async()=>{
    const q=query(collection(db,"users"), where("displayName","==", username))
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
      });
    }catch(err){
      setErr(true)
    }
  }
  const handleKey= e=>{
    e.code == "Enter" && handleSearch();
  }
  return (
    <div className='search justify-content-around  my-auto'>
     <div className='d-flex'>
      <input type='text' className='searchinput' placeholder='Tap to search' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
      <button className='my-auto border-0 btn btn-transparent' onClick={handleSearch}><BsSearch className='my-auto border-0 '/></button>
      </div>
  
      {err && <span>User Not Found!</span>}
      {user && <div className='chats' onClick={handleSelect}>
        <img  src={user.photoURL} className='searchimg'/>
      <div className='username'>
        <span>{user.displayName}</span>
      </div>
      </div>}
    </div>
  )
  }
export default Search