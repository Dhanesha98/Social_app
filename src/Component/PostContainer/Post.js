import React, { useState } from "react"
import "./post.css";
import ProfileImage from "../Images/Profile.png";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import ShareIcon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png"
export default function Post() {
  const[Like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(10);
  const [Comments , setComments] = useState([]);
  const [commentwriting , setcommentwriting] =  useState('');
  const [show, setshow] = useState(false);
  const handleLike=()=>{
    if(Like === LikeIcon){
      setLike(anotherlikeicon);
      setCount(count+1);
    }else{
      setLike(LikeIcon)
      setCount(count-1);
    }
  }

  const addComment = ()=>{
    const comment = {
      "id" : "rfkeiokokfef",
      "username" : "Suman" , 
      "title" : {commentwriting}
    }
    setComments(Comments.concat(comment));
  }

  const handleComment = ()=>{
    addComment();
  }

  console.log(Comments)

  const handleshow = ()=>{
    if(show === false){
      setshow(true)
    }else{
      setshow(false)
    }
  }

  return (
    
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={ProfileImage} alt="" className="PostImage" />
            
            <div>
            <p style={{ marginLeft: "5px", textAlign:"start" }}>Suman</p>
            <p style={{fontSize:"11px", textAlign:"start", marginLeft:5, marginTop:-13, color:"#aaa"}}>Following by Suman</p>
            </div>
            <img src={Moreoption} className="moreicons" alt=""/>
          </div>
          <p style={{textAlign: "start", width: "96%",marginLeft: 10,marginTop: 10,}} >
            Loremm fdkdfok fkekfkogk fofkod feofo ffo fkgof fkogf Loremm fdkdfok
            fkekfkogk fofkod feofo ...
          </p>
          <img src={ProfileImage} className="PostImages" alt="" />
              <div style={{display:"flex"}}>
                <div style={{display:'flex', marginLeft:"10px"}}>
                  <div style={{display:"flex", alignItems:'center',cursor:'pointer'}}>
                    <img src={Like} alt="" className="iconsforPost" onClick={handleLike} />
                    <p style={{marginLeft:"6px"}}>{count} Likes</p>
                  </div>
                  <div style={{display:"flex", alignItems:'center' , marginLeft:20 ,cursor:'pointer'}}>
                  <img src={CommentIcon} alt="" className="iconsforPost" onClick={handleshow}/>
                    <p  style={{marginLeft:"6px"}}>100K Comments</p>
                  </div>
                </div>
                <div style={{display:"flex", alignItems:'center' , marginLeft:200 ,cursor:'pointer'}}>
                  <img src={ShareIcon} alt="" className="iconsforPost"/>
                  <p  style={{marginLeft:"6px"}}>Share</p>
                  </div>
              </div>
              {show === true ?
              <div style={{padding:'10px'}}>
              <div style={{display:"flex", alignItems:"center"}}>
              <img src={ProfileImage} alt="" className="PostImage" />
             {/* <p style={{marginLeft:"6px"}}>Suman</p> */}
             <input type="text" className='commentinput' placeholder='Write your thought' onChange={(e) => setcommentwriting(e.target.value)} />
              <button className='addCommentbtn' onClick={handleComment}>Post</button>
              </div>
              {Comments.map((item)=>(
                 <div style={{ alignItems:"center"}}>
                  <div style={{display:"flex" ,  alignItems:"center"}}>
                  <img src={ProfileImage} alt="" className="PostImage" />
                 <p style={{ marginLeft:"6px", fontSize:18, marginTop:6}}>{item.username}</p> 
                  </div>  
                 
                 <p style={{marginLeft: "55px", textAlign : "start" , marginTop:-16}}>{item.title}</p>
                 <p style={{marginLeft: "55px", textAlign : "start" , marginTop:-10, color: "#aaa", fontSize:11}}>Reply</p>
                 </div>
              ))}
              </div>:''
           }
           
             
        </div>
      </div>
    </div>
  )
}
