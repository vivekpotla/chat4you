import React from 'react'
import { GrAttachment ,GrGallery} from "react-icons/gr";
function Input() {
  return (
    <div className='input'>
      <input type="text"  placeholder='Type Something'/>
      <div className='send '>
        <GrGallery style={{cursor:"pointer"}}/>
        <input type="file" name="" id="file" style={{display:"none"}}/>
        <label htmlFor='file' className='mb-1'>
          <GrAttachment style={{cursor:"pointer"}} className='my-auto'/>
        </label>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Input