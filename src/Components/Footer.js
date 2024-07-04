import React from "react";

const Footer = () => {
  return (
    // Footer section
    <footer className='bg-gray-900 text-white p-4 text-center flex items-center justify-center'>
      <p className='text-xs'>&copy; {new Date().getFullYear()} Football Player Quiz. All rights reserved</p>
      <p className='text-xs'></p>
    </footer>
  );
};

export default Footer;
