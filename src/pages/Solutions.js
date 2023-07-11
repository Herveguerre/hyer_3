import Footer from '@/components/Footer'
import SolutionAdhesions from '@/components/solutionPage/SolutionAdhesions'
import SolutionHeader from '@/components/solutionPage/SolutionHeader'
import SolutionSurDemande from '@/components/solutionPage/SolutionSurDemande'
import SolutionVolsPartages from '@/components/solutionPage/SolutionVolsPartages'
import React from 'react'

export default function Solutions() {
  return (
    <div>
      <SolutionHeader/>
      <SolutionSurDemande/>
      <SolutionVolsPartages/>
      <SolutionAdhesions/>
      <Footer/>
    </div>
  )
}
