import React from 'react'
import EHheader from '../components/ethical_hacking/EHheader'
import EHlinux from '../components/ethical_hacking/EHlinux'
import EHprojects from '../components/ethical_hacking/EHprojects'
import EHcertificate from '../components/ethical_hacking/EHcertificate'
import EHratings from '../components/ethical_hacking/EHratings'
import EHbatchTiming from '../components/ethical_hacking/EHbatchTiming'
import HomeContactUs from '../components/home/HomeContactUs'


const EthicalHackingInternship = () => {
  return (
    <div>
      <EHheader />
      <EHlinux />
      <EHprojects />
      <EHcertificate />
      <EHratings />
      <EHbatchTiming />
      <HomeContactUs />
    </div>
  )
}

export default EthicalHackingInternship 