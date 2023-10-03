import React from 'react'
import "./MainPost.css";
import ContentPost from "../ContentPostContinue/ContentPost.js"
import Post from "../PostContainer/Post.js"
export default function MainPost() {
  return (
    <div className='mainPostContainer'>
      <ContentPost/>
      <Post/>

    </div>
  )
}
