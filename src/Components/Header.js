// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className='bg-gray-900 text-white p-4 flex justify-center items-center'>
      <div>
      <h1 class="text-3xl font-bold py-2 text-center text-white">Kick IQ</h1>
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
