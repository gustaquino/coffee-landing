import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import videoBg from '../assets/Video.mp4';

const Main = () => {
  return (
    <div>
      <div className="absolute  left-0 w-full h-screen  bg-black/60"></div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="h-screen object-cover w-full"
      />
      <div>
        <h1 className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white items-center justify-center text-3xl md:text-4xl font-bold">
          Coffee Shop
          <div className="py-1"></div>
        </h1>
        <button className="absolute top-[32rem] md:top-[28rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-1xl bg-[#00704A] hover:bg-lime-700 text-white py-1 px-4 rounded-full font-bold">
          <Link to="product" smooth={true} duration={1000}>
            See More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Main;
