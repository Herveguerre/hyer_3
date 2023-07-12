import React from "react";

export default function SolutionSurDemande() {
  return (
    <div className="solutionsurdemande">
      <div className="solutionsurdemande_title">
        <div className="solutionsurdemande_titleP1">
          <p>Sur demande</p>
        </div>
        <div className="solutionsurdemande_titleP2">
          <p>
            Volez selon vos conditions. Quand vous voulez, où vous voulez.<br/><br/>
            Flying On-Demand vous donne le contrôle total de votre vol et un
            niveau de service imbattable à des tarifs compétitifs. Pas de frais
            cachés, pas d'investissement initial ni de paiement par carte jet.
          </p>
        </div>
      </div>
      <div className="solutionsurdemande_charte">
        <div className="solutionsurdemande_content">
          <img src="/img/img_solutions/prive.jpg" alt="vol privée"/>
          <p className="solutionsurdemande_contentP1">Charte privée</p>
          <p className="solutionsurdemande_contentP2">Votre avion est prêt quand vous l'êtes.</p>
        </div>
        <div className="solutionsurdemande_content">
          <img src="/img/img_solutions/groupe.jpg" alt="vol en groupe"/>
          <p className="solutionsurdemande_contentP1">Charte du Groupe</p>
          <p className="solutionsurdemande_contentP2">À venir</p>
        </div>
      </div>
      <div className="solution_hr"></div>
    </div>
  );
}
