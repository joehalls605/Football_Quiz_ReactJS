// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 flex justify-center items-center">
      <div>
      <h1 className="text-5xl  font-bold py-2 text-center black">Kick IQ</h1>
      </div>
      <div className="flex items-end">
        <div className="ml-auto flex space-x-4">
          {/* <p className="text-xl py-2 text-white-400">About</p> */}
          {/* <p className="text-xl py-2 text-white-400">Contact</p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
