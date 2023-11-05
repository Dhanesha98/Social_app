import React from 'react'
import "./Home.css"
import Navbar from '../../Component/Navbar/Navbar'
import Leftbar from '../../Component/ProfileLeftsideContainer/ProfileLeftbar'
import MainPost from '../../Component/MainPostContainer/MainPost'
import Rightbar from '../../Component/RightsideContainer/Rightbar'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='ComponentContainer'>
        <Leftbar/>
        <MainPost/>
        <Rightbar/>

      </div>
    </div>
  )
}
