import React from "react";

const Footer = () => {
  return (
    // Footer section
    <footer className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-4 text-center flex items-center justify-center'>
      <p className='text-small'>&copy; {new Date().getFullYear()} Football Player Quiz. All rights reserved</p>
      <p className='text-small'></p>
    </footer>
  );
};

export default Footer;
