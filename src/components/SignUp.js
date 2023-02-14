import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
function SignUp() {
  return (
    <div className='signupbody pt-5 pb-5'>
      <div className="text-center lead">
        <h1 className='heading w-25 mx-auto border rounded-pill '>chat4you</h1>
        <h6>Full-Stack Development Courses</h6> 
      </div>

      <h3 className="text-center">Sign Up</h3>

      <form className="signupform  m-5 mx-auto border border-2 border-secondary p-5 " >

      {/* Names */}
        <div className="row mb-4">
          <div className="col-sm-6 form-floating ">
            <input type="text" className="form-control border border-2 border-secondary" id="fname" placeholder="fname"/>
            <label  className="form-label ms-3">First Name</label>
          </div>
          <div className="col-sm-6 form-floating">
            <input type="text" className="input form-control border border-2 border-secondary" id="lname" placeholder="fname"/>
            <label className="form-label ms-3">Last Name</label>
          </div>
        </div>
      {/* Username and Mobile number */}
        <div className="row mb-5">
          <div className="col-sm-6 form-floating">
            <input type="text" className="form-control border border-2 border-secondary" placeholder="Username" />
            <label  className="form-label ms-3">@Username</label>
          </div>
          <div className="col-sm-6 form-floating">
            <input type="number" className="form-control border border-2 border-secondary" placeholder="no"/>
            <label  className="form-label ms-3">Mobile No.</label>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <label  className="form-label">
              <img className="img1" src="https://cdn.icon-icons.com/icons2/2768/PNG/512/email_icon_176616.png" alt=""/>
            </label>
          </div>
          <div className="col form-floating">
            <input type="email" className="form-control border border-2 border-secondary  p-2" placeholder="email" id="email"/>
            <label  className="form-label ms-3">Email</label>
          </div>
        </div>

        <div className="mt-5 text-end">
         Already a user ?   <Link to='/login'><button type="submit" className="btn btn-sm btn-primary  ">Login</button></Link>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-5 ms-4">
          <button type="submit" className="btn btn-lg btn-success  ">Create An Account</button>
        </div>

      </form>
</div>
  )
}

export default SignUp