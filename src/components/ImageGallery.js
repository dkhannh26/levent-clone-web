import React from 'react';
import data from '../data/data';
const ImageGallery = ({ imagePaths }) => {
   
    return (
        <div>
          <h2>Image Gallery</h2>
          <div className="image-container">
            {imagePaths.map((imagePath, index) => (
              <img key={index} src={imagePath} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      );
};

export default ImageGallery;