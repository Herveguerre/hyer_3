import React from 'react'
import './style.css'
export default function AboutSection() {
  return (
    <div className='about'>
      <div className='about_container'>
          <hr/>
          <div className='about_content'>
            <p>À propos de Hyer®</p>
            <p>Technologie, connaissance approfondie de l'industrie et approche conceptuelle. Quelques raisons pour lesquelles Hyer® perturbe l'activité d'affrètement de jets privés. Nous offrons des expériences intelligentes, transparentes, personnalisables et surtout inoubliables. </p>
          <buton className="about_btn"><svg viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.36 9.39L21.36 14.19L10.68 22.26L-7.51399e-07 14.19L-5.41584e-07 9.39L4.95 13.14C6.53 14.32 7.85 15.35 8.91 16.23L8.91 0.419999L12.48 0.42L12.48 16.2C13.96 15.02 15.27 14 16.41 13.14L21.36 9.39Z" fill="#000D10"></path></svg></buton>
          </div>
          <div className='about_img1'>
            <img src=".\img\img_about\1630574824-shutterstock1636610044 (1).jpg"/>
          </div>
      </div>
    </div>
  )
}
