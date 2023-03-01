import React, { useState } from 'react'
import './Login.css'
import Alert from 'react-bootstrap/Alert';
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js'
import formbg from "./images/formbg.png"
import logingif from "./images/logingif.gif"
import { GoAlert } from "react-icons/go";
function Login() {

  const [err, setErr] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate=useNavigate()
  const onFormSubmit = (userCredObj) => {
      let email= userCredObj.email;
      let password=userCredObj.password
      console.log(userCredObj)

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in successfully
        //console.log("User logged in " , userCredential)
        const user = userCredential.user;
        console.log("Login successful \nLogged in User is " , user.displayName)
        alert(`Welcome back ${user.displayName} ..!`)
        navigate('/home')
       
        // ...

      })
      .catch((error) => {
        const errorCode = error.code;
       // const errorMessage = error.message;
       // console.log(errorCode)
          if(errorCode==='auth/wrong-password')
          setErr("Wrong Password.! Try Again..!")
          else if(errorCode==='auth/user-not-found')
          setErr("User Not Found...!")
          else if(errorCode==='auth/too-many-requests')
          setErr('Too many requests..! Try after some time')
          else setErr(errorCode)
      });

  }
  return (

    <div className='loginbody pt-5 pb-5'>
      {/* To be removed after development */}
      <span><Link to='/home' >GO to Home</Link></span>
      <div className='d-flex '>
      <img src={logingif} className='m-5 h-50 logingif'/>
      <form className="signupform  m-5 mx-auto  p-5 w-25 " onSubmit={handleSubmit(onFormSubmit)} >
      
        <img src={formbg} className='formimg'/>
        <div className='formcontent'>
      <h3 className='text-center'>Login</h3>
   
    {/* Username and Password */}
       <div className="row mb-4 m-2 ">
          <div className=" form-floating ">
            <input type="email" className="form-control border border-2 border-secondary" id="email" placeholder="email" {...register("email",{required:true})}/>
            <label  className="form-label ms-3">Email</label>
          </div>
          {errors.email?.type === 'required' && <p role="alert" className='text-danger'>* Email is required</p>}
         </div>
        <div className="row mb-4 m-2">
          <div className=" form-floating">
            <input type="password" className="form-control border border-2 border-secondary" placeholder="password"  {...register("password",{required:true})}/>
            <label  className="form-label ms-3">Password</label>
            {errors.password?.type === 'required' && <p role="alert" className='text-danger'>* Password is required</p>}
          </div>
          
        </div>

      <div className="mt-4 ">
       Not having an account ?  <Link to='/signup'><button type="submit" className="btn btn-sm text-dark ms-2 " style={{backgroundColor:'rgb(204, 181, 208)'}}>SignUp</button></Link>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-5 ms-4 mb-4">
        <button type="submit" className="btn ps-5 pe-5 lbtn btn-lg text-white shadow"  style={{backgroundColor:'rgb(70,70,98)'}}>Login</button>
      </div>
      {err && 
         
          <Alert  variant='danger' className='p-1 ps-3  m-0'>
            <GoAlert className='mb-1' /> {err}
        </Alert>
        }
        </div>
    </form>
    </div>
</div>
  )
}

export default Login