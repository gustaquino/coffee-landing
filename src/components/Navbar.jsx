import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-14 mx-auto px-4  z-[100] bg-black/50 absolute w-full text-white">
      <h1 className="w-full text-3xl font-bold text-white">Coffee</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="home" smooth={true} offset={-50} duration={1500}>
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="product" smooth={true} offset={-50} duration={1500}>
            Product
          </Link>
        </li>
        <li className="p-4">
          <Link to="testimonials" smooth={true} offset={-50} duration={1500}>
            Testimonials
          </Link>
        </li>
        <li className="p-4">
          <Link to="contact" smooth={true} offset={-50} duration={1500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">Coffee</h1>
        <li className="p-4 border-b border-gray-600">
          <Link to="home" smooth={true} offset={-50} duration={1500}>
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600" onClick={handleNav}>
          <Link to="product" smooth={true} offset={-50} duration={1500}>
            Product
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="testimonials" smooth={true} offset={-50} duration={1500}>
            Testimonials
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="contact" smooth={true} offset={-50} duration={1500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
