import './App.css';
import SignUp from './components/SignUp';
import { Home } from './components/Home';
import Login from './components/Login';
import {Link, Navigate, Route ,Routes} from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
    
     let loggedInUser = JSON.parse(localStorage.getItem('username'))
     console.log("Logged in user " , (loggedInUser))
  return (

    <div className="App">
      
    <Routes>
    <Route path="/" element={<Login/>} />
    
      {loggedInUser!==null && 
      <>
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Home/>} />
      </>

      }
      {loggedInUser===null && 
      <>
       <Route path="/login" element={<Navigate to='/home' />} />
       <Route path="/home" element={<Navigate to='/login' />} />
       </>
     
      }

      <Route path="signup" element={<SignUp/>} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </div>
  );
}

export default App;
