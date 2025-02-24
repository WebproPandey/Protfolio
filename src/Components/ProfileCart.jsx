import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router";
import UserImg from "../assets/UserImg.png";


const ProfileCart = () => {
  const cart =  useRef()
  useGSAP(() =>{
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    tl.from(cart.current, { duration: 1, y: -50, opacity: 0 }, 0)
  })

  return (
    <div ref={cart} className="h-[95%] w-[90%]  md:w-[70%] bg-white  rounded-2xl flex  flex-col  justify-start items-center py-[2rem]  gap-4 relative overflow-hidden">
      <div className="circle absolute h-[30vh] w-[30vh] rounded-full border-4 border-dashed border-[#D24306] top-[-20%] left-[-0%] z-[99]"></div>
      <div className="userphoto rounded-2xl h-[60%] w-[70%] bg-gradient-to-br from-[#9F2201] to-[#D24306] relative z-[88]">
        <img src={UserImg} className="h-full  w-full object-cover" alt="" srcset="" />
      </div>
      <div className="name leading-8 flex flex-col items-center gap-1">
        <h1 className="text-[36px] font-bold  poppins-bold tracking-tighter z-[88]">
          Amit Pandey
        </h1>
      </div>
      <div className="userpera  w-full   px-[1rem] h-[30%] flex flex-col justify-center items-center gap-4  relative">
        <div className="circle absolute h-[30vh] w-[30vh] rounded-full border-4 border-dashed border-[#D24306] border-r-0  border-b-0  top-[-100%] right-[-30%]  rotate-30"></div>

        <p className=" poppins-semibold  text-[#6a6b6e] text-[18px]  leading-5 text-center z-[88]">
          " A Frontend Developer creating interactive, responsive, and visually
          engaging web experiences with smooth animations and performance
          optimization."
        </p>
      </div>
      <div className="socia-media h-[7vh] w-full flex justify-center items-center gap-6 z-[88] ">
        <div className="hover:bg-blue-100 p-1 rounded-md transition-all duration-300 ease-in-out">
          <Link to="https://www.instagram.com/invites/contact/?igsh=1ukkk6q78lbbw&utm_content=qumz020">
            <i className="ri-instagram-line text-[#D24306] text-2xl"></i>
          </Link>
        </div>
        <div className="hover:bg-blue-100 p-1 rounded-md transition-all duration-300 ease-in-out">
          <Link to="https://github.com/WebproPandey">
            <i className="ri-github-line text-[#D24306] text-2xl"></i>
          </Link>
        </div>
        <div className="hover:bg-blue-100 p-1 rounded-md transition-all duration-300 ease-in-out">
          <Link to="https://www.linkedin.com/in/amit-pandey-5a687327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="ri-linkedin-box-line text-[#D24306] text-2xl"></i>
          </Link>
        </div>
        <div className="hover:bg-blue-100 p-1 rounded-md transition-all duration-300 ease-in-out">
          <Link to="https://drive.google.com/file/d/1ViHAjg0OMMe4VcWuddwIHbgs-o79eVkm/view">
            <i className="ri-file-list-line text-[#D24306] text-2xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCart;
