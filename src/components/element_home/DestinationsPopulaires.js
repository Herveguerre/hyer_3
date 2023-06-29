import React, { useState } from "react";

function YourComponent() {
  // Déclaration du composant YourComponent en tant que fonction
  // useState est utilisé pour déclarer une variable d'état locale, imageSrc, et une fonction pour la mettre à jour, setImageSrc
  // On initialise imageSrc avec le chemin d'une image par défaut
  const [imageSrc, setImageSrc] = useState(
    "/img/img_home/1611590505-ibiza.jpg"
  );

  // Fonction changeImage appelée lorsqu'on survole un élément avec la souris
  // Elle met à jour imageSrc avec l'URL de l'image correspondante
  const changeImage = (imageUrl) => {
    setImageSrc(imageUrl);
  };

  // Fonction resetImage appelée lorsque la souris quitte un élément survolé
  // Elle réinitialise imageSrc avec le chemin de l'image par défaut
  const resetImage = () => {
    setImageSrc("/img/img_home/1611590505-ibiza.jpg");
  };

  // Rendu du composant YourComponent
  return (
    <div className="sec_3">
      <div className="div_l_s3">
        <p className="div_l_s3P">
          Destinations
          <br />
          populaires
        </p>
        <img
          className="imgsec3"
          id="image"
          src={imageSrc}
          alt="Image par défaut"
        />
      </div>
      <div className="div_r_s3">
        <div className="div_r_s3_1">
          <div
            className="r_s3_bar"
            onMouseEnter={() =>
              changeImage("/img/img_home/1620755532-barcelona.jpg")
            }
            onMouseLeave={resetImage}>
            <p className="div_r_s3P1">Barcelone (GRO)</p>
            <p className="div_r_s3P21">Espagne</p>
          </div>
          <div
            className="r_s3_ib"
            onMouseEnter={() =>
              changeImage("/img/img_home/1611590505-ibiza.jpg")
            }
            onMouseLeave={resetImage}>
            <p className="div_r_s3P1">Ibiza (IBZ)</p>
            <p className="div_r_s3P2">Espagne</p>
          </div>
        </div>

        <div className="div_r_s3_1">
          <div
            className="r_s3_can"
            onMouseEnter={() =>
              changeImage("/img/img_home/1611759665-cannes.jpg")
            }
            onMouseLeave={resetImage}>
            <p className="div_r_s3P1">Cannes (CEQ)</p>
            <p className="div_r_s3P2">France</p>
          </div>
          <div
            className="r_s3_pa"
            onMouseEnter={() =>
              changeImage("/img/img_home/1611590478-paris.jpg")
            }
            onMouseLeave={resetImage}
          >
            <p className="div_r_s3P1">Paris (LBG)</p>
            <p className="div_r_s3P2">France</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
