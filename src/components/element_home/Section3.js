
import './style.css'
import React, { useState } from 'react';

function YourComponent() {
  const [imageSrc, setImageSrc] = useState('/img/img_home/1611590505-ibiza.jpg');

  const changeImage = (imageUrl) => {
    setImageSrc(imageUrl);
  }

  const resetImage = () => {
    setImageSrc('/img/img_home/1611590505-ibiza.jpg');
  }

  return (
    <div className='sec_3'>
      <div className='div_l_s3'> 
        <p>Destinations<br/>populaires</p>
        <img id="image" src={imageSrc} alt="Image par défaut" />
      </div>
      <div className='div_r_s3'> 
        <div className='div_r_s3_1'>
          <div className='r_s3_bar' onMouseEnter={() => changeImage('/img/img_home/1620755532-barcelona.jpg')} onMouseLeave={resetImage}>
            <p>Barcelone (GRO)</p>
            <p>Espagne</p>
          </div>
          <div className='r_s3_ib' onMouseEnter={() => changeImage('/img/img_home/1611590505-ibiza.jpg')} onMouseLeave={resetImage}>
            <p>Ibiza (IBZ)</p>
            <p>Espagne</p>
          </div>
        </div>
        <div className='div_r_s3_1'>
          <div className='r_s3_can' onMouseEnter={() => changeImage('/img/img_home/1611759665-cannes.jpg')} onMouseLeave={resetImage}>
            <p>Cannes (CEQ)</p>
            <p>France</p>
          </div>
          <div className='r_s3_pa' onMouseEnter={() => changeImage('/img/img_home/1611590478-paris.jpg')} onMouseLeave={resetImage}>
            <p>Paris (LBG)</p>
            <p>France</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default YourComponent;
