import React, { useEffect, useState } from 'react';
import Image from './Image';
import './index.css';
import Search from './Search';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before making the API call

    fetch(`https://api.unsplash.com/photos/random?count=10&client_id=hoAl2kLSkDzu0V1-gjPqaOA7P7w5_OpwW0wO50WISXk&query=${term}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false); // Set isLoading to false after fetching the data
      })
      .catch((err) => {
        setIsLoading(false); // Set isLoading to false in case of an error
        console.log(err);
      });
  }, [term]);

  return (
    <div className="">
      <Search searchtext={(text) => setTerm(text)} />

      {/* Display loading message while fetching images */}
      {isLoading ? (
        <div className=" w-screen flex justify-center items-center h-screen">
          <p className="text-4xl text-gray-500">Loading...</p>
        </div>
      ) : (
        // Rendering fetched images if not loading
        <div className="grid grid-cols-2 gap-4">
          {images.length > 0 ? (
            images.map((image) => (
              <Image
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
                views={image.views}
                duration={image.duration}
                likes={image.likes}
                description={image.alt_description}
              />
            ))
          ) : (
            // Display "No Image Found" message if there are no images
            <div className="flex w-screen justify-center items-center h-screen">
              <p className="text-4xl text-gray-500">No Image Found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
