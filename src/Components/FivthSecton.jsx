import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const FivthSecton = () => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const FivthSecton = useRef()
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: FivthSecton.current, 
        start: "top 80%", 
        end: "top 70%",
      },
    });
    tl.from(heading1.current, { duration: 1, y: -50, opacity: 0 });
    tl.from(heading2.current, { duration: 1, y: -50, opacity: 0 });

  });
  return  (
    <div ref={FivthSecton} className='w-full  py-[3rem] flex flex-col gap-5 '>
         <div className="Heading leading-[52px] md:leading-[94px]">
        <h2 ref={heading1} className="text-[48px] md:text-[94px] md:text-start  text-center poppins-bold uppercase text-white ">
          design
        </h2>
        <h2 ref={heading2} className="text-[48px] md:text-[94px] md:text-start  text-center poppins-bold uppercase text-[#b6b4bd33] ">
         thoughts
        </h2>
      </div>
      <div className="Thoughtsblogs  w-full md:w-[80%] flex flex-col gap-5 mt-3">
  <div className="Thought relative min-h-[40vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-xl md:rounded-2xl overflow-hidden flex flex-col justify-evenly items-start gap-2">
    <div className="Title  w-full md:w-[80%] poppins-extrasemibold text-[20px] md:text-[26px] capitalize text-white  leading-5 md:leading-7">
       Starting and Growing a career in Web Development
    </div>
    <div className="projectinfo  w-full md:w-[80%]">
      <p className="poppins-thik text-[16px] md:text-[18px] leading-[18px] md:leading-[22px] text-[#998f8f]">
      As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.
      </p>
    </div>
    <div className="date flex justify-between  w-full">
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        Nov 8 , 2024
      </p>
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
       
      </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>

  {/* Experience 2 - Freelance Work */}
  <div className="Thought relative min-h-[40vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-evenly items-start gap-2">
    <div className="Title  w-[90%] md:w-[80%] poppins-extrasemibold text-[20px] md:text-[26px] capitalize text-white leading-5 md:leading-7">
      Creating a Landing Page  That  Performs Great
    </div>
    <div className="projectinfo w-full md:w-[80%]">
      <p className="poppins-thik text-[16px] md:text-[18px] leading-[18px] md:leading-[22px] text-[#998f8f]">
      Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words, they help you increase your revenue. 
      </p>
    </div>
    <div className="date flex justify-between w-full">
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        Jan 21,2024 
      </p>
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        
      </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh]  w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>

  {/* Experience 3 - Open Source Contributions */}
  <div className="Thought relative min-h-[40vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-evenly items-start gap-2">
    <div className="Title  w-[90%]  md:w-[80%] poppins-extrasemibold text-[20px] md:text-[26px] capitalize text-white leading-5 md:leading-7">
      How can Designers  Prepare for the Future?
    </div>
    <div className="projectinfo w-full  md:w-[80%]">
      <p className="poppins-thik  text-[16px] md:text-[18px] leading-[22px] text-[#998f8f]">
      Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words, they help you increase your revenue. 
      </p>
    </div>
    <div className="date w-full flex justify-between" >
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        Mar28, 2024
      </p>
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        
       </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default FivthSecton