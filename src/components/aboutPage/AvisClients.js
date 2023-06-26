import React from 'react'

export default function AvisClients() {
  return (
    <div className='about '>
      <hr className='avis_hr'/>
      <div  className='flex '>
        <div>
          <p>
          Ce que disent nos clients
          </p>
        </div>
        <div className='avis'>
          <p>Lors de mes vols privés, mon Flight Manager Valérie était là pour m'aider à répondre à toutes mes questions ou préoccupations. 
            <br/>~ Jesper
          </p>
        </div>
        
        <div className='avis'>
          <p>Je vole avec Hyer en tant que membre ELEVATE depuis un certain temps maintenant, après avoir été un client Netjets insatisfait. 
            <br/> Nicolas
          </p>
        </div>
        
        <div className='avis'>
          <p>Nous avons eu un mariage exceptionnel à Capri.Hyer nous a aidés avec leur charte et a conduit nos 50 invités en toute sécurité à l'aéroport de Naples. 
            <br/>Marque
          </p>
        </div>
        

      </div>
      <hr/>
    </div>
  )
}
