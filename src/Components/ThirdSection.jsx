import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const ThirdSection = ({exprience}) => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const exprienceRefs = useRef([]);
  const ThirdSection = useRef()
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: ThirdSection.current,
        start: "top 80%",
        end: "20% 60%",
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
    exprienceRefs.current.forEach((el, index) => {
      tl.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    });
  });
  
  return (
    <div ref={ThirdSection} className=" w-full  py-[3rem] flex flex-col gap-5">
      <div className="Heading leading-[52px] md:leading-[94px]  ">
        <h2  ref={heading1} className="text-[45px] md:text-[94px] poppins-bold uppercase text-center md:text-start text-white tracking-tighter ">
          1 year of
        </h2>
        <h2 ref={heading2} className="text-[45px] md:text-[94px] poppins-bold uppercase  text-center  md:text-start text-[#b6b4bd33] ">
          Experience
        </h2>
      </div>
      <div className="Experienceblogs w-full md:w-[80%] flex flex-col gap-5 ">
  {
   exprience.map((exprience , index) =>(
    <div  key={index}
      ref={(el) => (exprienceRefs.current[index] = el)}
      className="Experienceblog relative  md:min-h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-full md:w-[80%] poppins-extrasemibold text-[18px] md:text-[26px] capitalize text-white">
      {exprience.heading}
    </div>
    <div className="projectinfo w-full md:w-[80%]">
      <p className="poppins-thik text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#998f8f]">
        {exprience.description}
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        {exprience.date}
      </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>
   ))
  }   

</div>

    </div>
  );
};

export default ThirdSection;
