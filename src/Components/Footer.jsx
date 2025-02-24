import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Footer = () => {
  const heading = useRef();

  useGSAP(() => {
    gsap.fromTo(
      heading.current,
      { width: '0%' },
      { width: '100%', duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <div className='h-[20vh] w-full flex justify-center items-center overflow-hidden'>
      <div
        className='text-center text-white text-[18px] poppins-thik overflow-hidden'
        style={{ whiteSpace: 'nowrap', display: 'inline-block' }}
        ref={heading}
      >
        Your vision, my code – let’s build something amazing!
      </div>
    </div>
  );
};

export default Footer;
