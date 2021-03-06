import React, { useState } from 'react';

const SearchField = ({ keyword, setKeyword }) => {
  const [tempKeyword, setTempKeyword] = useState('');
  return (
    <>
      <h2 className='text-xl font-bold pb-2 text-center'>Find a cat</h2>
      <div className='w-full flex flex-row space-x-2'>
        <input
          type='text'
          className='h-12 w-full bg-gray-200 opacity-50 outline-none border-4 border-white rounded-lg p-3 text-black font-semibold'
          placeholder='Type your cat breed'
          onChange={(e) => setTempKeyword(e.target.value)}
        />
        <button
          className='h-12 w-28 secondary-button outline-none text-black font-semibold'
          style={{ borderRadius: 'none' }}
          onClick={() => setKeyword(tempKeyword)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchField;
