import React from "react";

export default function NotreTechnologie() {
  return (
    <div className="notretecho about flex wrap">
      <p className="notretechoTitle">Notre chronologie</p>

      <div className="notretechoDiv">
        <p className="fontwb">2019</p>
        <p className="notretechoP">
          L'entreprise a étendu ses services à l'Allemagne, l'Autriche et la
          Suisse. Les clients en dehors du groupe fermé initial ont été invités
          à réserver avec ENVOY. La société a introduit les Smart Quotes
          innovantes, simplifiant le processus de choix d'un avion. Peu de temps
          après, la clientèle s'est étendue au Royaume-Uni et à l'Espagne.
        </p>
      </div>

      <div className="notretechoDiv">
        <p className="fontwb">2021</p>
        <p className="notretechoP">
          ENVOY rebaptisé Hyer® Aviation. Une nouvelle marque, un nouveau site
          Web et une stratégie axée sur la technologie ont été lancés, suivis
          d'un portefeuille de services audacieux. Une plate-forme propriétaire
          innovante et un programme d'adhésion ambitieux ont été lancés pour
          mieux répondre à la demande rapide de services Hyer® et de vols
          exclusifs.
        </p>
      </div>

      <div className="notretechoDiv">
        <p className="fontwb">2020</p>
        <p className="notretechoP">
          Les vols partagés, les premiers du genre, ont été introduits. Des vols
          de rapatriement ont été organisés en Asie, en Afrique et en Europe
          avec des petits et des gros avions. Des solutions spéciales pour les
          groupes et un programme de compensation carbone pour l'aviation privée
          au Benelux ont été lancés.{" "}
        </p>
      </div>

      <div className="notretechoDiv">
        <p className="fontwb">2022</p>
        <p className="notretechoP ">
          Hyer a développé un portefeuille de clients et a lancé une application
          mobile exclusive pour ses clients fidèles. Une augmentation
          significative de la demande, principalement pendant l'été, a entraîné
          des équipes de vente et une assistance en vol supplémentaires.{" "}
        </p>
      </div>

      <hr />
      <div className="notretechoimg">
        <p>Nous croyons que dans un monde qui fait de vous un numéro, nous sommes en mesure d'utiliser la technologie pour vous offrir un service personnalisé inégalé.</p>
        <img src=".\img\img_about\1630882773-young-woman-on-a-plane.avif" alt=""/>
      </div>
    </div>
  );
}
