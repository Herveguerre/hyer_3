import React from "react";

export default function SolutionAdhesions() {
  return (
    <div className="solutionsurdemande">
      <div className="solutionsurdemande_title">
        <div className="solutionsurdemande_titleP1">
          <p>Adhésions</p>
        </div>
        <div className="solutionsurdemande_titleP2">
          <p>
            Notre programme d'adhésion est innovant, audacieux et offre encore
            plus de personnalisation et de flexibilité.
            <br />
            <br />
            Vous commencerez à en profiter immédiatement.
          </p>
        </div>
      </div>
      <div className="solutionsurdemande_charte">
        <div className="solutionsurdemande_content">
          <img src="/img/img_solutions/elever.jpg" alt="vol privée" />
          <p className="solutionsurdemande_contentP1">Élever</p>
          <p className="solutionsurdemande_contentP2">
            Services, contrôle et récompenses améliorés
          </p>
        </div>
        <div className="solutionsurdemande_content">
          <img src="/img/img_solutions/altitude.jpg" alt="vol en groupe" />
          <p className="solutionsurdemande_contentP1">Altitude Hyer®</p>
          <p className="solutionsurdemande_contentP2">À venir</p>
        </div>
      </div>
      <div className="solution_hr_end"></div>
    </div>
  );
}
