import React from 'react'

export default function SolutionVolsPartages() {
  return (
    <div className="solutionsurdemande">
      <div className="solutionsurdemande_title">
        <div className="solutionsurdemande_titleP1">
          <p>Vols partagés</p>
        </div>
        <div className="solutionsurdemande_titleP2">
          <p>
          Volez sur des itinéraires exclusifs Hyer® en réservant un siège.<br/><br/>
          Voler sur un vol partagé avec des personnes partageant les mêmes idées vous offre la commodité et le confort que seule l'aviation privée peut offrir, pour une fraction du prix. 
          </p>
        </div>
      </div>
      <div className="solutionsurdemande_charte">
        <div className="solutionsurdemande_content">
          <img src="/img/img_solutions/disponibles.jpg" alt="vol privée"/>
          <p className="solutionsurdemande_contentP1">Vols disponibles</p>
          <p className="solutionsurdemande_contentP2">Participez à un vol partagé.</p>
        </div>
        <div className="solutionsurdemande_content">
          <img src="/img/img_solutions/parcours.jpg" alt="vol en groupe"/>
          <p className="solutionsurdemande_contentP1">Propose a route</p>
          <p className="solutionsurdemande_contentP2">Commencez votre vol partagé.</p>
        </div>
      </div>
      <div className="solution_hr"></div>
    </div>
  )
}
