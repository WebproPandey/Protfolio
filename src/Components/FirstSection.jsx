import React, { useRef } from "react";
import line from "../assets/line.svg";
import zig from "../assets/zig-zax.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const FirstSection = () => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const pera =  useRef()
  const num1 =  useRef()
  const num2 =  useRef()
  const num3 =  useRef()
  const showcart1 =  useRef()
  const showcart2 =  useRef()
  
  useGSAP(() => {

    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    tl.from(heading1.current, { duration: 1, y: -50, opacity: 0 }, 0)
    tl.from(heading2.current, { duration: 1, y: -50, opacity: 0 }, 0)
    tl.from(pera.current, { duration: 1, y: -50, opacity: 0 }, 0.1)
    tl.from(num1.current, { duration: 1, y: -50, opacity: 0 }, 0.1)
    tl.from(num2.current, { duration: 1, y: -50, opacity: 0 }, 0.2)
    tl.from(num3.current, { duration: 1, y: -50, opacity: 0 }, 0.2)
    tl.from(showcart1.current, { duration: 1, y: 50, opacity: 0 }, 1)
    tl.from(showcart2.current, { duration: 1, y: 50, opacity: 0 }, 1)
  })
  return (
    <div className=" w-full py-[3rem] flex flex-col gap-2 ">
      <div className="Heading leading-[52px] md:leading-[94px]">
        <h2 ref={heading1} className="text-[48px] md:text-[94px] poppins-bold text-center md:text-start uppercase text-white ">
          Frontend
        </h2>
        <h2 ref={heading2}  className="text-[48px] md:text-[94px] poppins-bold text-center md:text-start uppercase text-[#b6b4bd33] ">
          Developer
        </h2>
      </div>
      <div className="w-full md:w-[70%]">
        <p ref={pera} className="text-[#998f8f] poppins-thik  text-[16px] md:text-[19px] leading-[20px] md:leading-[25px]">
          Passionate Frontend Developer creating seamless, interactive, and
          visually stunning web experiences. Expert in React, GSAP, and
          Tailwind, transforming ideas into dynamic digital solutions.
        </p>
      </div>
      <div className="Numberinfo w-full md:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-2 justify-items-start place-items-center ">
      <div ref={num1} className="w-full">
          <p className="text-[#fff] poppins-extrasemibold  text-[56px] md:text-[70px]">+1</p>
          <p className="text-[#998f8f] poppins-thik leading-[19px] uppercase text-[12px] md:text-[16px]">
            Years of Experience
          </p>
        </div>
        <div     ref={num2} className="w-full">
          <p className="text-[#fff] poppins-extrasemibold  text-[56px] md:text-[70px]">+30</p>
          <p className="text-[#998f8f] poppins-thik leading-[19px] uppercase text-[12px] md:text-[16px]">
            Projects Completed
          </p>
        </div>
        <div   ref={num3} className="w-full">
          <p className="text-[#fff] poppins-extrasemibold text-[56px] md:text-[70px]">+2</p>
          <p className="text-[#998f8f] poppins-thik leading-[19px] uppercase text-[12px] md:text-[16px]">
            Freelance or Agency Experience
          </p>
        </div>
      </div>
      <div className="showcasecart w-full md:w-[80%] pt-[3rem] flex md:flex-row flex-col gap-4  ">
        <div ref={showcart1} className="leftcart  w-full  md:w-[40%]  h-[40vh]  bg-[#F46C38] rounded-2xl overflow-hidden relative  ">
          <img src={line} alt=""  />
          <img src={line} alt=""  />
          <div className="h-full  w-full  absolute  top-0 left-0 flex flex-col justify-between px-4  py-5 gap-3">
            <div>
              <i className="ri-stack-line  text-5xl text-white"></i>
            </div>
            <div className="texts text-white poppins-semibold text-[26px] leading-[26px]">
              DYNAMIC ANIMATION, MOTION DESIGN
            </div>
            <div className="w-full flex justify-end">
              <div className="vists border rounded-md w-[5vh] h-[5vh] flex justify-center gap-4 items-center relative group overflow-hidden hover:bg-white ">
                <i className="ri-arrow-right-long-line text-2xl text-white absolute left-[-100%] transition-all duration-500 ease-in-out group-hover:text-[#f46c38] group-hover:left-0"></i>
                <i className="ri-arrow-right-long-line text-2xl text-white absolute right-[50%] translate-x-1/2 transition-all duration-500 ease-in-out group-hover:text-[#f46c38] group-hover:right-[-100%]"></i>
              </div>
            </div>
          </div>
        </div>
        <div  ref={showcart2}  className="rightcart w-full md:w-[60%] h-[40vh] bg-[#C5FF41] rounded-2xl overflow-hidden relative ">
            <img src={zig} alt=""  />
            <div className="h-full  w-full  absolute  top-0 left-0 flex flex-col justify-between  px-4 py-5 gap-3">
            <div>
              <i className="ri-layout-5-line text-5xl text-black"></i>
            </div>
            <div className="texts text-black poppins-semibold text-[26px] leading-[26px]">           
              GSAP, CANVAS, FRAmM , REACTJS
            </div>
            <div className="w-full flex justify-end">
              <div className="vists border-black border rounded-md w-[5vh] h-[5vh] flex justify-center gap-4 items-center relative group overflow-hidden hover:bg-black ">
                <i className="ri-arrow-right-long-line text-2xl text-black absolute left-[-100%] transition-all duration-500 ease-in-out group-hover:text-white group-hover:left-0"></i>
                <i className="ri-arrow-right-long-line text-2xl text-black absolute right-[50%] translate-x-1/2 transition-all duration-500 ease-in-out group-hover:text-white group-hover:right-[-100%]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
