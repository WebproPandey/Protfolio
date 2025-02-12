import React from "react";

const SecondSection = () => {
  return (
    <div className=" w-full  py-[3rem] flex flex-col gap-5 ">
      <div className="Heading leading-[94px]">
        <h2 className="text-[94px] poppins-bold uppercase text-white ">
          Recent
        </h2>
        <h2 className="text-[94px] poppins-bold uppercase text-[#b6b4bd33] ">
          Project
        </h2>
      </div>
      <div className="projectlists w-[80%]  ">
        <div className="project relative h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex justify-start items-center gap-4">
          <div className="projectimage h-full w-[25%] bg-[#dadada]"></div>

          <div className="projectname">
            <h1 className="text-[26px] poppins-extrasemibold text-white">
              Revo
            </h1>
            <h2 className="text-[16px] poppins-thik text-[#998f8f]">
              Saas Free Template
            </h2>
          </div>

          <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center  ">
            <i className="ri-arrow-right-up-long-line  text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%]  group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
          </div>
        </div>
        <div className="project relative h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex justify-start items-center gap-4">
          <div className="projectimage h-full w-[25%] bg-[#dadada]"></div>

          <div className="projectname">
            <h1 className="text-[26px] poppins-extrasemibold text-white">
              Revo
            </h1>
            <h2 className="text-[16px] poppins-thik text-[#998f8f]">
              Saas Free Template
            </h2>
          </div>

          <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center  ">
            <i className="ri-arrow-right-up-long-line  text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%]  group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
          </div>
        </div>
        <div className="project relative h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex justify-start items-center gap-4">
          <div className="projectimage h-full w-[25%] bg-[#dadada]"></div>

          <div className="projectname">
            <h1 className="text-[26px] poppins-extrasemibold text-white">
              Revo
            </h1>
            <h2 className="text-[16px] poppins-thik text-[#998f8f]">
              Saas Free Template
            </h2>
          </div>

          <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center  ">
            <i className="ri-arrow-right-up-long-line  text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%]  group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
