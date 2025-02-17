import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


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
          <div className="toolsimg h-full w-[10vh] bg-white"></div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[20px] md:text-[24px] text-white'> Framer</h1>
            <h2 className='text-[#998f8f] text-[14px] md:text-[16px] poppins-thik  '>Website Builder</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white"></div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Framer</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Website Builder</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white"></div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Framer</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Website Builder</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white"></div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Framer</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Website Builder</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white"></div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Framer</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Website Builder</h2>
          </div>
        </div>
        <div className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white"></div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'> Framer</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>Website Builder</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FourthSection