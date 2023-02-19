import React, { useState } from 'react'
import './Login.css'
import Alert from 'react-bootstrap/Alert';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js'
import { GoAlert } from "react-icons/go";
function Login() {

  const [err, setErr] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (userCredObj) => {
      let email= userCredObj.email;
      let password=userCredObj.password
      console.log(userCredObj)

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in successfully
        //console.log("User logged in " , userCredential)
        const user = userCredential.user;
        console.log("Logged in User is " , user)
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
    <div className="text-center lead">
      <h1 className='heading w-25 mx-auto border rounded-pill '>chat4you</h1>
    
    </div>

    <h3 className="text-center">Login</h3>

    <form className="signupform  m-5 mx-auto border border-2 border-secondary p-5 " onSubmit={handleSubmit(onFormSubmit)} >

   
    {/* Username and Mobile number */}
      <div className="row mb-5 gap-5">
        <div className="col-sm-12 form-floating">
          <input type="text" className="form-control border border-2 border-secondary" placeholder="email" {...register("email",{required:true})}/>
          <label  className="form-label ms-3">Email</label>
        </div>
        <div className="col-sm-12 form-floating">
          <input type="password" className="form-control border border-2 border-secondary" placeholder="password" {...register("password",{required:true})}/>
          <label  className="form-label ms-3">Password</label>
        </div>
      </div>

      <div className="mt-5 text-end">
       Not having an account ?  <Link to='/signup'><button type="submit" className="btn btn-sm btn-primary  ">SignUp</button></Link>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-5 ms-4 mb-4">
        <button type="submit" className="btn btn-lg btn-success  ">Login</button>
      </div>
      {err && 
         
          <Alert  variant='danger' className='p-1 ps-3  m-0'>
            <GoAlert className='mb-1' /> {err}
        </Alert>
        }
    </form>
    
</div>
  )
}

export default Login