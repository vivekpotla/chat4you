import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='loginbody pt-5 pb-5'>
    <div className="text-center lead">
      <h1 className='heading w-25 mx-auto border rounded-pill '>chat4you</h1>
    
    </div>

    <h3 className="text-center">Login</h3>

    <form className="signupform  m-5 mx-auto border border-2 border-secondary p-5 " >

   
    {/* Username and Mobile number */}
      <div className="row mb-5 gap-5">
        <div className="col-sm-12 form-floating">
          <input type="text" className="form-control border border-2 border-secondary" placeholder="Username" />
          <label  className="form-label ms-3">Username</label>
        </div>
        <div className="col-sm-12 form-floating">
          <input type="password" className="form-control border border-2 border-secondary" placeholder="no"/>
          <label  className="form-label ms-3">Password</label>
        </div>
      </div>

      <div className="mt-5 text-end">
       Not having an account ?  <Link to='/signup'><button type="submit" className="btn btn-sm btn-primary  ">SignUp</button></Link>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-5 ms-4">
        <button type="submit" className="btn btn-lg btn-success  ">Login</button>
      </div>

    </form>
</div>
  )
}

export default Login