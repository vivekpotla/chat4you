import React from 'react'
import { BsSearch } from "react-icons/bs";
function search() {
  return (
    <div className='search d-flex justify-content-around  my-auto'>
     
        <input type='text' className='searchinput' placeholder='Tap to search'/>
        <button className='my-auto border-0 btn btn-transparent'><BsSearch className='my-auto border-0 '/></button>
    </div>
  )
}

export default search