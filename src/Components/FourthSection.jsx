import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import Nodejs from '../assets/Node.jsimage.jpg'
import Reactjs from '../assets/react.svg'
import Postman from '../assets/Postmanimage.jpg'
import Tailwindcss from '../assets/TailwindcssImage.jpg'
import Gsap from '../assets/Gsap.jpg'
import Firebase from '../assets/firebaseimage.jpg'
import Redux from '../assets/Redux.jpg'


const FourthSection = () => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const FourthSection = useRef()
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: FourthSection.current, 
        start: "top 80%", 
        end: "top 70%",
      },
    });
    tl.from(heading1.current, { duration: 1, y: -50, opacity: 0 });
    tl.from(heading2.current, { duration: 1, y: -50, opacity: 0 });

  });

  return (
    <div ref={FourthSection} className='py-[3rem] flex flex-col gap-5  w-full'>
         <div  className="Heading leading-[52px] md:leading-[94px]">
        <h2 ref={heading1} className=" text-[48px] text-center md:text-start  md:text-[94px] poppins-bold uppercase text-white ">
          premium
        </h2>
        <h2 ref={heading2} className=" text-[48px] text-center md:text-start  md:text-[94px] poppins-bold uppercase text-[#b6b4bd33] ">
         Tools
        </h2>
      </div>
      <div className="Toolslist w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[15vh] bg-white ">
            <img src={Nodejs}  alt="" className='h-full w-full object-contain' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[20px] md:text-[24px] text-white'>NodeJs</h1>
            <h2 className='text-[#998f8f] text-[14px] md:text-[16px] poppins-thik  '>JavaScript runtime for building server-side</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white">
            <img src={Reactjs} alt="" className='h-full w-full object-contain' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> React js</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Frontend library</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white">
            <img src={Tailwindcss} alt="" className='h-full w-full object-contain' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> TailwindCSS</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Styling and responsive design</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white">
            <img src={Postman} alt="" className='h-full w-full object-contain' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Postman</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Testing APIs</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white">
            <img src={Gsap} alt="" className='h-full w-full object-cover' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Gsap</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Animations library </h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white">
            <img src={Redux} alt="" className='h-full w-full object-contain' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'>Redux</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>State managemen</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FourthSection