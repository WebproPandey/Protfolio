import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const iconlink1 =  useRef()
  const iconlink2 =  useRef()
  const iconlink3 =  useRef()
  const iconlink4 =  useRef()
  const iconlink5 =  useRef()
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    tl.from(iconlink1.current, { duration: 1, y: -50, opacity: 0 }, 0)
    tl.from(iconlink2.current, { duration: 1, y: -50, opacity: 0 }, 0.2)
    tl.from(iconlink3.current, { duration: 1, y: -50, opacity: 0 }, 0.3)
    tl.from(iconlink4.current, { duration: 1, y: -50, opacity: 0 }, 0.4)
    tl.from(iconlink5.current, { duration: 1, y: -50, opacity: 0 }, 0.5)

  })  
  return (
    <div className='h-[15vh]  w-full flex justify-center items-center  '>
      <div className="flex justify-center items-center gap-7  w-[100%] md:w-[30%]">
        <div ref={iconlink1} className="">
          <Link to="/">
            <i className="ri-home-4-line text-white text-2xl font-light" ></i>
          </Link>
        </div>
        <div ref={iconlink2} className="">
          <Link to="/">
            <i className="ri-folder-line text-white text-2xl font-light" ></i>
          </Link>
        </div>
        <div ref={iconlink3} className="">
          <Link to="/">
            <i className="ri-briefcase-3-line text-white text-2xl font-light" ></i>
          </Link>
        </div>
        <div ref={iconlink4} className="">
          <Link to="/">
            <i className="ri-tools-line text-white text-2xl font-light" ></i>
          </Link>
         </div>
         <div ref={iconlink5} className="">
          <Link to="/">
            <i className="ri-lightbulb-flash-line text-white text-2xl font-light" ></i>
          </Link>
         </div>
         </div>

    </div>
  )
}

export default Navbar