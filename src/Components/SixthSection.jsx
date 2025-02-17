import React, { useRef } from 'react'
import ContactForm from './ContactForm'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const SixthSection = () => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const SixthSection = useRef()
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: SixthSection.current, 
        start: "top 80%", 
        end: "top 70%",
      },
    });
    tl.from(heading1.current, { duration: 1, y: -50, opacity: 0 });
    tl.from(heading2.current, { duration: 1, y: -50, opacity: 0 });

  });
  return (
    <div  ref={SixthSection} className=' w-full '>
          <div className="Heading leading-[52px] md:leading-[94px]">
        <h2 ref={heading1} className="text-[48px] text-center  md:text-start  md:text-[94px] poppins-bold uppercase text-white ">
          Let's work
        </h2>
        <h2 ref={heading2} className="text-[48px] text-center  md:text-start  md:text-[94px] poppins-bold uppercase text-[#b6b4bd33] ">
         Together
        </h2>
      </div>
      <div className='ContactForm  w-full md:w-[80%]'>
        <ContactForm/>
      </div>

    </div>
  )
}

export default SixthSection