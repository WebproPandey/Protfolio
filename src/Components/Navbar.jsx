import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-[15vh]  w-full flex justify-center items-center  '>
      <div className="flex justify-center items-center gap-7  w-[100%] md:w-[30%]">
        <div className="">
          <Link to="/">
            <i className="ri-home-4-line text-white text-2xl font-light" ></i>
          </Link>
        </div>
        <div className="">
          <Link to="/">
            <i className="ri-folder-line text-white text-2xl font-light" ></i>
          </Link>
        </div>
        <div className="">
          <Link to="/">
            <i className="ri-briefcase-3-line text-white text-2xl font-light" ></i>
          </Link>
        </div>
        <div className="">
          <Link to="/">
            <i className="ri-tools-line text-white text-2xl font-light" ></i>
          </Link>
         </div>
         <div className="">
          <Link to="/">
            <i className="ri-lightbulb-flash-line text-white text-2xl font-light" ></i>
          </Link>
         </div>
         </div>

    </div>
  )
}

export default Navbar