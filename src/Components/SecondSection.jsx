import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = ({ projects }) => {
  const heading1 = useRef();
  const heading2 = useRef();
  const sectionRef = useRef();
  const projectRefs = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
      scrollTrigger: {
        trigger: sectionRef.current,
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

    projectRefs.current.forEach((el, index) => {
      tl.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    });
  });

  return (
    <div ref={sectionRef} className="SecondSection w-full py-[3rem] flex flex-col gap-5">
      <div className="Heading leading-[52px] md:leading-[94px]">
        <h2 ref={heading1} className="text-[48px] md:text-[94px] poppins-bold text-center md:text-start uppercase text-white">
          Recent
        </h2>
        <h2 ref={heading2} className="text-[48px] md:text-[94px] poppins-bold text-center md:text-start uppercase text-[#b6b4bd33]">
          Project
        </h2>
      </div>
      <div className="projectlists w-full md:w-[80%]">
        {projects.map((project, index) => (
          <Link
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            to={project.link}
            target="_blank"
            className="project relative h-[20vh] md:h-[30vh] p-4 group hover:bg-[#1C1A19] transition-all duration-500 ease-in-out rounded-xl md:rounded-2xl overflow-hidden flex justify-start items-center gap-4"
          >
            <div className="projectimage h-[18vh] w-[30%] bg-[#dadada] bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="projectname">
              <h1 className="text-[20px] md:text-[26px] poppins-extrasemibold text-white">
                {project.title}
              </h1>
              <h2 className="text-[14px] md:text-[16px] poppins-thik text-[#998f8f]">
                {project.description}
              </h2>
            </div>
            <div className="icons absolute right-3 top-6 h-[10vh] w-[8vh] flex justify-center items-center">
              <i className="ri-arrow-right-up-long-line text-2xl text-[#f46c38] absolute top-[50%] -translate-y-1/2 left-[0%] group-hover:top-0 group-hover:left-[50%] transition-all duration-500 ease-in-out"></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
