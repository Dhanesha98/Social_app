import React from 'react'
import "./Navbar.css";
import searchIcon from "../Images/search.png";
import Notification from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png";
export default function Navbar() {
  return (
    <div className='mainNavbar'>
        <div className='LogoContainer'> 
            <p>Social</p>
        </div>
        <div>
            <div className='searchInputContainer'>
            <img src={searchIcon} className='searchIcon'   alt="" />
                <input type='text' className='searchInput' placeholder='Search your friends ' id=''></input>
            </div>
        </div>
        <div className='IconsContainer'>
            <img src={Notification} className='Icons' alt=""/>
            <img src={Message} className='Icons' alt=""/>
            <div style={{display:'flex',alignItems:'center'}}>
                 <img src={Profileimage} className='ProfileImage' alt=""/>
                 <p style={{marginLeft:'5px'}}>Suman</p>
            </div>
        </div>
    </div>
  )
}
