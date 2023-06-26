import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

import Section1 from '@/components/element_home/Section1'
import Section2 from '@/components/element_home/Section2'
import Section3 from '@/components/element_home/Section3'
import Section4 from '@/components/element_home/Section4'
import Section5 from '@/components/element_home/Section5'
import Section6 from '@/components/element_home/Section6'
import Section7 from '@/components/element_home/Section7'


export default function Home() {
  return (
    <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>
    </div>
  )
}
