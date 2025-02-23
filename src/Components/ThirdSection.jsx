import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const ThirdSection = () => {
  const heading1 =  useRef()
  const heading2 =  useRef()
  const ThirdSection = useRef()
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: ThirdSection.current, 
        start: "top 80%", 
        end: "top 70%",
      },
    });
    tl.from(heading1.current, { duration: 1, y: -50, opacity: 0 });
    tl.from(heading2.current, { duration: 1, y: -50, opacity: 0 });

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
  {/* Experience 1 - Internship */}
  <div className="Experienceblog relative  md:min-h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-full md:w-[80%] poppins-extrasemibold text-[18px] md:text-[26px] capitalize text-white">
      Frontend Developer at  Mercy Dev
    </div>
    <div className="projectinfo w-full md:w-[80%]">
      <p className="poppins-thik text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#998f8f]">
      Mercy Dev is a startup focused on building high-quality, innovative websites. As a frontend developer, I contribute to creating responsive and interactive web applications, ensuring smooth user experiences with modern technologies like React, JavaScript, and GSAP. I collaborate closely with designers and backend developers to bring ideas to life, optimizing performance and accessibility for a seamless web experience.
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        January 2024 - Present
      </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>

  {/* Experience 2 - Freelance Work */}
  <div className="Experienceblog relative  md:min-h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-full md:w-[80%] poppins-extrasemibold text-[18px] md:text-[26px] capitalize text-white">
      Freelancing Project: Website Optimization & Animation
    </div>
    <div className="projectinfo w-full md:w-[80%]">
      <p className="poppins-thik text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#998f8f]">
      I worked on a freelancing project for Shivangi Mahajan, where I enhanced the website by making it fully responsive, optimizing its performance, and adding smooth animations for better user experience. This project helped me refine my skills in front-end development, animation, and optimization techniques.
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        March 2024 
      </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>

  {/* Experience 3 - Open Source Contributions */}
  <div className="Experienceblog relative  md:min-h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-full md:w-[80%] poppins-extrasemibold text-[18px] md:text-[26px] capitalize text-white">
      Re-Image Hackathon – Website Redesign & Animation   
    </div>
    <div className="projectinfo w-full md:w-[80%]">
      <p className="poppins-thik text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#998f8f]">
        I participated in the Re-Image Hackathon, where our team reimagined and rebuilt a website with a fresh modern design, improved user experience, and smooth animations. We successfully advanced to the second stage of the competition.
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[14px] md:text-[16px] text-[#998f8f]">
        05 - sept 2024  
      </p>
    </div>
    <div className="icons absolute right-3 top-3 md:top-6 h-[7vh]  md:h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>
</div>

    </div>
  );
};

export default ThirdSection;
