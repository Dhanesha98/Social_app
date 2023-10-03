import React from 'react'
import "./Rightbar.css";
import ads from "../Images/ads.jpg";
import image3 from "../Images/image3.jpg";
import image2 from "../Images/image2.jpg";
import image1 from "../Images/image1.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addfriends from "../Images/add-user.png"
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={ads} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={image3} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={image2} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>

      </div>
      <div className='rightcontainer2'>
        <h1 style={{textAlign:"start", marginLeft:"10px"}}>Suggest for you</h1>
        <div style={{marginTop:"10px"}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image3} className='Profileimage' alt=''/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"{start"}}>Ruwanthi</p>
            <p style={{marginLeft:"10px", textAlign:"{start", marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Suggest for you</p>
            </div>
          </div>
          <div style={{backgroundColor:'#aaa', padding:'10px',marginRight:13, borderRadius:"50%" , cursor:'pointer'}}>
            <img src={addfriends} className='addfriend' alt=''/>
          </div>
        </div>
        </div>
        <div style={{marginTop:"10px"}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image1} className='Profileimage' alt=''/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"{start"}}>Ayesha</p>
            <p style={{marginLeft:"10px", textAlign:"{start", marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Followed by suman</p>
            </div>
          </div>
          <div style={{backgroundColor:'#aaa', padding:'10px',marginRight:13, borderRadius:"50%" , cursor:'pointer'}}>
            <img src={addfriends} className='addfriend' alt=''/>
          </div>
        </div>
        </div>
        <div style={{marginTop:"10px"}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image4} className='Profileimage' alt=''/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"{start"}}>Dhanesha</p>
            <p style={{marginLeft:"10px", textAlign:"{start", marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Followed by suman</p>
            </div>
          </div>
          <div style={{backgroundColor:'#aaa', padding:'10px',marginRight:13, borderRadius:"50%" , cursor:'pointer'}}>
            <img src={addfriends} className='addfriend' alt=''/>
          </div>
        </div>
        </div>
        <div style={{marginTop:"10px"}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image5} className='Profileimage' alt=''/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"{start"}}>Dinusha</p>
            <p style={{marginLeft:"10px", textAlign:"{start", marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Followed by suman</p>
            </div>
          </div>
          <div style={{backgroundColor:'#aaa', padding:'10px',marginRight:13, borderRadius:"50%" , cursor:'pointer'}}>
            <img src={addfriends} className='addfriend' alt=''/>
          </div>
        </div>
        </div>
        <div style={{marginTop:"10px"}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image6} className='Profileimage' alt=''/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"{start"}}>Udayangi</p>
            <p style={{marginLeft:"10px", textAlign:"{start", marginTop:'-16px', fontSize:'11px', color:"#aaa"}}>Followed by suman</p>
            </div>
          </div>
          <div style={{backgroundColor:'#aaa', padding:'10px',marginRight:13, borderRadius:"50%" , cursor:'pointer'}}>
            <img src={addfriends} className='addfriend' alt=''/>
          </div>
        </div>
        </div>
      </div>
      </div>
  )
}
