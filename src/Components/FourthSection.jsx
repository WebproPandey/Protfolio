import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const FourthSection = ({tools}) => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const  toolsRefs = useRef([])
  const FourthSection = useRef()
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: FourthSection.current,
        start: "top 80%",
        end: "30% 60%",
        scrub: 1,
      },
    });
  
    tl.fromTo(
      heading1.current, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5 }
    );
  
    tl.fromTo(
      heading2.current, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5 }
    );
   
      toolsRefs.current.forEach((el, index) => {
        tl.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      });
  
  
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
       {
        tools.map((tool,  index) =>(
          <div  
          key={index}
          ref={(el) => (toolsRefs.current[index] = el)}
          className='tools h-[15vh]  p-3  flex  gap-4 hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-md'>
          <div className="toolsimg h-full w-[10vh] bg-white ">
            <img src={tool.image} alt="" className='h-full w-full  ' />
          </div>
          <div className='toolsName'>
            <h1 className='poppins-bold text-[24px] text-white'>{tool.name}</h1>
            <h2 className='text-[#998f8f] text-[16px] poppins-thik  '>{tool.discription}</h2>
          </div>
        </div>
        ))
       }


      </div>
    </div>
  )
}

export default FourthSection