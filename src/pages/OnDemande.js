import Footer from '@/components/Footer'
import ReserverUnVol from '@/components/element_home/ReserverUnVol'
import CarouselOn from '@/components/onDemandePage/CarouselOn'
import Covid19On from '@/components/onDemandePage/Covid19On'
import DestinationsPopulairesOn from '@/components/onDemandePage/DestinationsPopulairesOn'
import ExperianceHyerOn from '@/components/onDemandePage/ExperianceHyerOn'
import HeaderOn from '@/components/onDemandePage/HeaderOn'
import NosClientsApprecientOn from '@/components/onDemandePage/NosClientsApprecientOn'
import NotreProgrammeOn from '@/components/onDemandePage/NotreProgrammeOn'
import SoyezRecompenseOn from '@/components/onDemandePage/SoyezRecompenseOn'
import SurDemandeOn from '@/components/onDemandePage/SurDemandeOn'
import React from 'react'

export default function OnDemande() {
  return (
    <div>
        <HeaderOn/>
        <NotreProgrammeOn/>
        <SoyezRecompenseOn/>
        <ExperianceHyerOn/>
        <CarouselOn/>
        <SurDemandeOn/>
        <NosClientsApprecientOn/>
        <DestinationsPopulairesOn/>
        <Covid19On/>
        <ReserverUnVol/>
        <Footer/>
    </div>
  )
}
