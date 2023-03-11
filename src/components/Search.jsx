import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { collection, query, where, getDocs, getDoc, setDoc,doc, updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase'
import { useDispatch} from 'react-redux'
import { onclick } from '../slices/chatSlice';
import './Search.css'
import './Chats.css'
function Search() {
  const [username,setUsername]=useState("")
  const [user,setUser]=useState(null)
  const [err,setErr]=useState(false)
  let dispatch=useDispatch()
  //let currentUser = useSelector(state => state.user[0])
  let currentUser =JSON.parse(localStorage.getItem("username"))
  const handleSelect =async(u)=>{
    let actionObj = onclick(user);
    dispatch(actionObj);
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
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId+".date"]:serverTimestamp()
        })
        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
      }
    }catch(err){
      console.log(err)
    }
    setUser(null)
    setUsername("")
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
    e.code === "Enter" && handleSearch();
  }
  return (
    <div className='search justify-content-around  my-auto'>
     <div className='d-flex'>
      <input type='text' className='searchinput' placeholder='Tap to search' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username}/>
      <button className='my-auto border-0 btn btn-transparent' onClick={handleSearch}><BsSearch className='my-auto border-0 '/></button>
      </div>
  
      {err && <span>User Not Found!</span>}
      {user && <div className='userchats' onClick={()=>handleSelect(user)}>
        <img  src={user.photoURL} className='searchimg' alt='user'/>
      <div className='username'>
        <span>{user.displayName}</span>
      </div>
      </div>}
    </div>
  )
  }
export default Search