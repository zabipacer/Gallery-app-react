import React from 'react';

function Image({ key,src, alt,views,duration,likes,description }) {
  return (
    <div>
      <div className='h-64 w-96 mb-28 mt-10 ml-20'>
        <img className='h-64 bg-cover w-96 rounded' key={key} src={src} alt={alt} />
        <div className='border-2 border-gray-300 w-auto border-t-0 rounded shadow-lg mb-11 '>
          <p className='ml-2 text-purple-600 mb-2 pt-2 font-bold'>{description} </p>
          <p className='ml-2'><strong>Views:</strong>{views}</p>
          <p className='ml-2'><strong>Duration:</strong>{duration}</p>
          <p className='ml-2 mb-2'><strong>Likes:</strong>{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Image;
