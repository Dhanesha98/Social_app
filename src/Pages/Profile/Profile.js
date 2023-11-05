import React from 'react'
import Navbar from "../../Component/Navbar/Navbar";
import "./profile.css"
import ProfileLeftbar from '../../Component/ProfileLeftsideContainer/ProfileLeftbar';
import ProfileMainPost from '../../Component/MainPostContainer/ProfileMainPost';
import ProfileRightbar from '../../Component/ProfileRightsideContainer/ProfileRightbar';
export default function Profile() {
  return (
    <div className='ProfileContainer'>
      <Navbar/>
      <div className='subProfileContainer'>
            <ProfileLeftbar/>
            <ProfileMainPost/>
            <ProfileRightbar/>
      </div>
    </div>
  )
}
