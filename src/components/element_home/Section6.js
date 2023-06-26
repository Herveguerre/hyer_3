import React, { useState } from 'react';

export default function Section6() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/img/img_home/car1.jpg',
    '/img/img_home/car2.jpg',
    '/img/img_home/car3.jpg',
    '/img/img_home/car4.png',
    '/img/img_home/car5.jpg',
    '/img/img_home/car6.jpg'
  ];

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div>
      <div className='sec_6_img'>
      <button className="carousel-button right" onClick={nextImage}></button>
      <img src={images[currentImage]} alt="" />
      
      </div>
      <div>
        
        
      </div>
    </div>
  );
}
