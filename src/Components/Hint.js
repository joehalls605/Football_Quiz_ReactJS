import React from 'react';
import 'tailwindcss/tailwind.css';

const Hint = ({ nationality, position, club }) => {
  return (
    <div className='font-semibold text-2xl p-10'>
      <p className='mb-4'>
        <span className='text-blue-500 font-semibold'>Team: </span>{club}
      </p>
      <p className='mb-4'>
        <span className='text-blue-500 font-semibold'>Position: </span>{position}
      </p>
      <p className='mb-4'>
        <span className='text-blue-500 font-semibold'>Nationality: </span>{nationality}
      </p>
    </div>
  );
};

export default Hint;
