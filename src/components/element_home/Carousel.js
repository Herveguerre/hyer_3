import React, { useState } from "react";

// Importation de la fonction useState du module React, qui permet de gérer l'état local d'un composant

export default function Carousel() {
  // Déclaration du composant Carousel en tant que fonction
  // useState est utilisé pour déclarer une variable d'état local, currentImage, et une fonction pour la mettre à jour, setCurrentImage
  // On initialise currentImage à 0
  const [currentImage, setCurrentImage] = useState(0);

  // Tableau d'images contenant les chemins des images à afficher
  const images = [
    "/img/img_home/car1.jpg",
    "/img/img_home/car2.jpg",
    "/img/img_home/car3.jpg",
    "/img/img_home/car4.png",
    "/img/img_home/car5.jpg",
    "/img/img_home/car6.jpg",
  ];

  // Fonction nextImage appelée lorsqu'on clique sur le bouton pour passer à l'image suivante
  const nextImage = () => {
    // Si currentImage est égal à l'index de la dernière image du tableau, on revient à la première image (index 0)
    // Sinon, on incrémente currentImage de 1 pour passer à l'image suivante
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  // Rendu du composant Carousel
  return (
    <div>
      <div className="sec_6_img">
        {/* Bouton qui déclenche la fonction nextImage lorsqu'il est cliqué */}
        {/* Affichage de l'image courante en utilisant la valeur de currentImage comme index pour accéder à l'élément correspondant dans le tableau images */}
        <button className="carousel-button right" onClick={nextImage}>
          <img src={images[currentImage]} alt="" />
        </button>
      </div>
    </div>
  );
}
