import './App.css';
import SignUp from './components/SignUp';
import { Home } from './components/Home';
import Login from './components/Login';
import {Link, Navigate, Route ,Routes} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {

  // const {currentUser} = useContext(AuthContext)
  // console.log("current user from app.js" , currentUser)
  
  // const ProtectedRoute =({children})=>{
  //   if(!currentUser){
  //     return <Navigate to='/login'/>
  //   }
  // }
  
  
  
  return (
    <div className="App">
     
    <Routes>
    <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="signup" element={<SignUp/>} />
    </Routes>
    </div>
  );
}

export default App;
