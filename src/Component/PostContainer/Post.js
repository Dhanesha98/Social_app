import React from 'react'
import "./post.css"
import ProfileImage from "../Images/Profile.png";
export default function Post() {
  return (
    <div className='PosContainer'>
      <div className='SubPostContainer'>
          <div>
          <img src={ProfileImage} alt=''/>
          <p>Suman</p>
          </div>
      </div>
      
    </div>
  )
}
