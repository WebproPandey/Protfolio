import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Correct import

const Navbar = () => {
  const iconsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    iconsRef.current.forEach((el, index) => {
      if (el) {
        tl.from(el, { duration: 0.8, y: -50, opacity: 0 }, index * 0.1);
      }
    });

    iconsRef.current.forEach((el) => {
      const text = el.querySelector("h1");
      gsap.set(text, { y: -10, opacity: 0 });

      el.addEventListener("mouseenter", () => {
        gsap.to(text, { y: 0, opacity: 1, duration: 0.3, ease: "power1.out" });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(text, { y: -10, opacity: 0, duration: 0.3, ease: "power1.out" });
      });
    });

    return () => {
      iconsRef.current.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="h-[15vh] w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-7 w-[100%] md:w-[30%]">
        {[
          { icon: "ri-home-4-line", text: "Home", link: "/" },
          { icon: "ri-folder-line", text: "Projects", link: "/project" },
          { icon: "ri-briefcase-3-line", text: "Experiences", link: "/exprience" },
          { icon: "ri-tools-line", text: "Tools", link: "/tool" },
          { icon: "ri-lightbulb-flash-line", text: "Thoughts", link: "/thought" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (iconsRef.current[index] = el)}
            className="relative group cursor-pointer  px-2 py-1"
          >
            <Link to={item.link}>
              <i className={`${item.icon} text-white text-2xl font-light`}></i>
            </Link>
            <h1 className="text-white opacity-0 absolute left-1/2 -translate-x-1/2">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
