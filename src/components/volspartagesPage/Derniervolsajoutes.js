import React from 'react'

export default function Derniervolsajoutes() {
  return (
    <div className='marge'>
      <div className='space w1440'>
        <div className='flex'>
          <p>Derniers vols ajoutés</p> 
          <button>Recherche de vols</button>
        </div>
        <div className='tableau'>
          <div className='noir flex'>
            <p>Farnborrough Sion</p><p>Sens unique</p><p>Proposé*</p>
          </div>
          <div className='gris flex'>
            <p>Farnborrough Sion</p><p>Sortant</p>
          </div>

        </div>
      </div>
    </div>
  )
}
