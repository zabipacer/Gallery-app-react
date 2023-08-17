import React, { useState } from 'react';

function Search({ searchtext }) {
  const [text, setText] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    searchtext(text);
  }

  return (
    <div className='flex justify-center items-center mt-3 relative'>
      <form onSubmit={handleSearch}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='w-56 mb-4 border-2 border-black h-12 border-t-0 border-l-0 border-r-0 outline-none '
          placeholder='Search Images here...'
        />
        <button
          type='submit'
          className='ml-2 border-2 border-black bg-black text-white p-0.375 text-sm w-16'
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
