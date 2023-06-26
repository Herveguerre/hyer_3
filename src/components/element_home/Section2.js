import React from 'react'
import './style.css'
export default function Section2() {
  return (
    <div className='section2'>

      <div className='toutes_les_solutions'>
        <p>Services flexibles</p>
        <p>Des solutions intelligentes pour toutes vos exigences d'affrètement</p>
        <button className='btn_sec_2' >Toutes les solutions</button>
      </div>

      <div className='sur_demande'>
        <p>Sur demande</p>
        <p>Réservez votre avion. Personnalisez tous les apects de votre voyage.</p>
      </div>

      <div className='vols_partages'>
        <p>Vols partagés</p>
        <p>Volez en privé pour une fraction du prix.</p>
      </div>

    </div>
  )
}
