import React from 'react'
import ProfileCart from './ProfileCart'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FivthSecton from './FivthSecton'
import SixthSection from './SixthSection'

const Home = () => {
  return (
    <div className=' w-full flex  justify-center items-start relative'>
      <div className="Profile h-[100vh] w-[40%]  sticky top-0 flex justify-end items-end pr-[4rem]">
        <ProfileCart />
      </div>
      <div className="PorfolioInfo  w-[60%] ">
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