import React from 'react'
import  FirstSection  from '../Components/FirstSection'
import  SecondSection  from '../Components/SecondSection'
import  ThirdSection  from '../Components/ThirdSection'
import  FourthSection  from '../Components/FourthSection'
import  FivthSecton  from '../Components/FivthSecton'
import  SixthSection  from '../Components/SixthSection'
import ProfileCart from '../Components/ProfileCart'
import { Outlet, Route, Routes } from 'react-router'


const Home = () => {
  return (
    <div className=' w-full flex flex-col md:flex-row  justify-center items-start relative'>
    <div className="Profile h-[100vh] w-full md:w-[40%]   md:sticky top-0 flex justify-center md:justify-end items-center  md:items-end md:pr-[4rem] ">
      <ProfileCart />
    </div>
    <div className="PorfolioInfo  w-full md:w-[60%] px-4 md:px-0">

        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FivthSecton/>
        <SixthSection/>


    </div>
    </div>
)
}

export default Home