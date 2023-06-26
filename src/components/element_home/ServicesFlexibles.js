import React from 'react'

export default function ServicesFlexibles() {
  return (
    <div className='servicesflexibles'>

      <div className='toutes_les_solutions'>
        <p className='toutes_les_solutionsP1'>Services flexibles</p>
        <p  className='toutes_les_solutionsP2'>Des solutions intelligentes pour toutes vos exigences d'affrètement</p>
        <button className='btn_sec_2' >Toutes les solutions</button>
      </div>

      <div className='sur_demande'>
        <p className='sur_demandeP1'>Sur demande</p>
        <p className='sur_demandeP2'>Réservez votre avion. Personnalisez tous les apects de votre voyage.</p>
      </div>

      <div className='vols_partages'>
        <p className='vols_partagesP1'>Vols partagés</p>
        <p className='vols_partagesP2'>Volez en privé pour une fraction du prix.</p>
      </div>

    </div>
  )
}
