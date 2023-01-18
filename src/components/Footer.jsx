import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-center p-4 bg-black text-white">
        <div className="items-center flex"></div>
        <div className="flex flex-col   gap-4 justify-center">
          <div>
            <h1>
              <a
                href="https://www.linkedin.com/in/gustavo-de-aquino-fioranti-40b098246/"
                target="_blank"
              >
                LINKEDIN
              </a>
            </h1>
          </div>
          <a href="https://github.com/gustaquino" target="_blank">
            <h1>GITHUB</h1>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
