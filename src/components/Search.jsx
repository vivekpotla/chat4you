import React from 'react'

function search() {
  return (
    <div className='search'>
        <input type='text' className='searchinput' placeholder='find a user'/>
      <div className='messages'>
        <img src='https://i.pinimg.com/236x/01/4b/ba/014bba6c5196101bf43042c820b92db0.jpg' className='searchimg'/>
        <div className='mt-3'>
        <span className='username'>Neeha</span>
        <p className='msg'>Hello</p>
        </div>
      </div>

    </div>
  )
}

export default search