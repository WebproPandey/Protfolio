import React from "react";

const ThirdSection = () => {
  return (
    <div className=" w-full  py-[3rem] flex flex-col gap-5">
      <div className="Heading leading-[94px]">
        <h2 className="text-[94px] poppins-bold uppercase text-white ">
          1 year of
        </h2>
        <h2 className="text-[94px] poppins-bold uppercase text-[#b6b4bd33] ">
          Experience
        </h2>
      </div>
      <div className="Experienceblogs w-[80%] flex flex-col gap-5">
  {/* Experience 1 - Internship */}
  <div className="Experienceblog relative h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-[80%] poppins-extrasemibold text-[26px] capitalize text-white">
      Frontend Developer Intern
    </div>
    <div className="projectinfo w-[80%]">
      <p className="poppins-thik text-[16px] leading-[22px] text-[#998f8f]">
        Worked with a team of 5 developers to build a **dynamic website with a custom CMS.** 
        Utilized **React & Styled Components** for the frontend, achieving a **95% success rate** in the internship.
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[16px] text-[#998f8f]">
        August 2024 - Present
      </p>
    </div>
    <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>

  {/* Experience 2 - Freelance Work */}
  <div className="Experienceblog relative h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-[80%] poppins-extrasemibold text-[26px] capitalize text-white">
      Freelance Frontend Developer
    </div>
    <div className="projectinfo w-[80%]">
      <p className="poppins-thik text-[16px] leading-[22px] text-[#998f8f]">
        Built **5+ interactive websites** for startups and brands, improving UI/UX 
        using **GSAP animations, React, and Tailwind CSS.** 
        Delivered **fully responsive and high-performance websites**.
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[16px] text-[#998f8f]">
        March 2024 - Present
      </p>
    </div>
    <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>

  {/* Experience 3 - Open Source Contributions */}
  <div className="Experienceblog relative h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex flex-col justify-start items-start gap-2">
    <div className="Title w-[80%] poppins-extrasemibold text-[26px] capitalize text-white">
      Open Source Contributor
    </div>
    <div className="projectinfo w-[80%]">
      <p className="poppins-thik text-[16px] leading-[22px] text-[#998f8f]">
        Contributed to **GitHub projects**, fixing UI bugs, optimizing React 
        components, and improving accessibility. Worked on **GSAP & Tailwind-based animations**.
      </p>
    </div>
    <div className="date">
      <p className="poppins-semibold text-[16px] text-[#998f8f]">
        January 2024 - Present
      </p>
    </div>
    <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center">
      <i className="ri-arrow-right-up-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
    </div>
  </div>
</div>

    </div>
  );
};

export default ThirdSection;
