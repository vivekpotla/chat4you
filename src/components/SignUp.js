import React, { useState } from 'react'
import './SignUp.css'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import {auth,storage ,db} from '../firebase.js'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiOutlinePicture,AiOutlineMail } from "react-icons/ai";
import { doc, setDoc } from "firebase/firestore";
import 'firebase/firestore' 
import 'firebase/auth'
function SignUp() {
  let navigate= useNavigate();
  const [err,setErr] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onFormSubmit = async (userCredObj) => {
    const displayName =userCredObj.username
    const email = userCredObj.email
    const password = userCredObj.password
    const file = userCredObj.file
    const phoneNumber=userCredObj.phoneNumber
    console.log(userCredObj);
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
              
            //      //Object.keys(res.user)
            //         //  ['providerId', 'proactiveRefresh', 'reloadUserInfo', 'reloadListener', 
            //         // 'uid', 'auth', 'stsTokenManager', 'accessToken', 'displayName', 'email', 'emailVerified', 
            //         // 'phoneNumber', 'photoURL', 'isAnonymous', 'tenantId', 'providerData', 'metadata']
          

      const storageRef = ref(storage, `${displayName}.jpg`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //console.log("Image url : " ,downloadURL)
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
              phoneNumber
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              phoneNumber,
              email,
              photoURL: downloadURL,
            });


           // create empty user chats on firestore
           await setDoc(doc(db, "userChats", res.user.uid), {});
           alert("User signed up successfully")
           navigate('/home')
 
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });


          
        }
        catch(err)
        {
         
          if(err.code==='auth/email-already-in-use')
          setErr("Email already in use..! Try with another one")
        }

    
  }
 


  return (
    <div className='signupbody pt-5 pb-5'>
      <div className="text-center lead">
        <h1 className='heading w-25 mx-auto border rounded-pill '>THE CIRCLE</h1>
        <h6>Full-Stack Development Courses</h6> 
      </div>

      <h3 className="text-center">Sign Up</h3>
     
      <form className="signupform  m-5 mx-auto border border-2 border-secondary p-5 " onSubmit={handleSubmit(onFormSubmit)} >

      {/* UserName */}
        <div className="row mb-4">
          <div className=" form-floating ">
            <input type="text" className="form-control border border-2 border-secondary" id="username" placeholder="username" {...register("username",{required:true})}/>
            <label  className="form-label ms-3">UserName</label>
          </div>
          {errors.username?.type === 'required' && <p role="alert" className='text-danger'>* Username is required</p>}
         </div>
      {/* Pw*/}
        <div className="row mb-4">
          <div className=" form-floating">
            <input type="password" className="form-control border border-2 border-secondary" placeholder="password"  {...register("password", { required: "* Password is required", minLength: { value: 6, message: "* Password must be atleast 6 characters" }, maxLength: { value: 12, message: "* Password cannot exceed more than 12 characters" }})}/>
            <label  className="form-label ms-3">Password</label>
            {errors.password  && <p role="alert" className='text-danger p-0 m-0'>{errors.password.message}</p>}
          </div>
          
        </div>
        <div className='row mb-4'>
          <div className="form-floating">
              <input type="number" className="form-control border border-2 border-secondary" placeholder="Mobile No.(+91)" {...register("phoneNumber",{required:true})}/>
              <label  className="form-label ms-3">Mobile No.</label>

            </div>
            {errors.phoneNumber?.type === 'required' && <p role="alert" className='text-danger'>* Mobile number is required</p>}
        </div>

        <div className="row mb-4">
          <div className="col-2">
          <AiOutlineMail size='lg' className='mx-auto'/>
          </div>
          <div className="col form-floating">
            <input type="email" className="form-control border border-2 border-secondary " placeholder="email" id="email" {...register("email",{required:true})}/>
            <label  className="form-label ms-3">Email</label>
          </div>
          {errors.email?.type === 'required' && <p role="alert" className='text-danger'>* Email ID is required</p>}
        </div>
        <div className="row">
          <div className="col-2">
            <AiOutlinePicture size='lg' className='mx-auto'/>
          </div>
          <div className="col ">
            <input type="file" className="form-control border border-2 border-secondary  p-2" accept="image/png, image/jpeg,image/jpg" placeholder="Profile Photo" id="Image" {...register("file",{required:true})}/>
          </div>
          {errors.file?.type === 'required' && <p role="alert" className='text-danger'>* Upload a photo</p>}
        </div>

        <div className="mt-5 text-end">
         Already a user ?   <Link to='/login'><button type="submit" className="btn btn-sm btn-primary  ">Login</button></Link>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-5 ms-4 mb-3">
          <button type="submit" className="btn btn-lg btn-success  ">Create An Account</button>
        </div>
        {err && 
          <Alert  variant='danger'>
          {err}
        </Alert>
        }

      </form>
</div>
  )
}

export default SignUp