import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import HomeHero from '@/components/element_home/HomeHero'
import ServicesFlexibles from '@/components/element_home/ServicesFlexibles'
import DestinationsPopulaires from '@/components/element_home/DestinationsPopulaires'
import GestionnaireDeVol from '@/components/element_home/GestionnaireDeVol'
import ExperienceHyer from '@/components/element_home/ExperienceHyer'
import Carousel from '@/components/element_home/Carousel'
import ReserverUnVol from '@/components/element_home/ReserverUnVol'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
        <Header/>
        <HomeHero/>
        <ServicesFlexibles/>
        <DestinationsPopulaires/>
        <GestionnaireDeVol/>
        <ExperienceHyer/>
        <Carousel/>
        <ReserverUnVol/>
        <Footer/>
    </div>
  )
}
