import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[170px] ">
      <div className="max-w-[1240px] mx-auto text-center font-bold mt-5 ">
        <div className="text-xl md:text-3xl">Learn</div>
        <h2 className="text-white text-5xl md:text-[60px]">Grow</h2>
        <div className="text-[20px] md:text-[50px] text-white">
          Learn
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Digital Makerting",
              "Web Development",
              "Ethical Hacking",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className='bg-black p-4 rounded text-white '>Get started</button>
      </div>
    </div>
  );
}

export default Hero