import React, { JSX } from 'react'
import { Heading } from '@chakra-ui/react'
import HeroSection from '../../components/sections/marketing/hero'
import BenefitSection from '../../components/sections/marketing/benefits'

function Page(): JSX.Element {
  return (
    <>
      {/* hero section in marketing page */}
      <HeroSection />

      {/* benefits section in marketing page */}
      <BenefitSection/>
    </>
  )
}

export default Page