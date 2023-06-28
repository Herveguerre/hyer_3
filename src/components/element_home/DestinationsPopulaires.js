

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
      <div classNameName='div_l_s3'> 
        <p classNameName='div_l_s3P'>Destinations<br/>populaires</p>
        <img className='imgsec3' id="image" src={imageSrc} alt="Image par défaut" />
      </div>
      <div className='div_r_s3'> 

        <div className='div_r_s3_1'>
          <div className='r_s3_bar' onMouseEnter={() => changeImage('/img/img_home/1620755532-barcelona.jpg')} onMouseLeave={resetImage}>
            <p className='div_r_s3P1'>Barcelone (GRO)</p>
            <p className='div_r_s3P21'>Espagne</p>
          </div>
          <div className='r_s3_ib' onMouseEnter={() => changeImage('/img/img_home/1611590505-ibiza.jpg')} onMouseLeave={resetImage}>
            <p className='div_r_s3P1'>Ibiza (IBZ)</p>
            <p className='div_r_s3P2'>Espagne</p>
          </div>
        </div>

        <div className='div_r_s3_1'>
          <div className='r_s3_can' onMouseEnter={() => changeImage('/img/img_home/1611759665-cannes.jpg')} onMouseLeave={resetImage}>
            <p className='div_r_s3P1'>Cannes (CEQ)</p>
            <p className='div_r_s3P2'>France</p>
          </div>
          <div className='r_s3_pa' onMouseEnter={() => changeImage('/img/img_home/1611590478-paris.jpg')} onMouseLeave={resetImage}>
            <p className='div_r_s3P1'>Paris (LBG)</p>
            <p className='div_r_s3P2'>France</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default YourComponent;
