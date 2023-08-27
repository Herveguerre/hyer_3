import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutHeader from '@/components/aboutPage/AboutHeader'
import AboutSection from '@/components/aboutPage/AboutSection'
import AvisClients from '@/components/aboutPage/AvisClients'
import EquipeFondatrice from '@/components/aboutPage/EquipeFondatrice'
import NotreTechnologie from '@/components/aboutPage/NotreTechnologie'
import PourquoiHyer from '@/components/aboutPage/PourquoiHyer'
import HomeHero from '@/components/element_home/HomeHero'
import React from 'react'

export default function About() {
  return (
    <div>
        <Header/>
        
        <AboutSection/>
        <EquipeFondatrice/>
        <PourquoiHyer/>
        <AvisClients/>
        <NotreTechnologie/>
        <Footer/>
    </div>
  )
}
