'use client'

import React, { JSX } from 'react'
import { Heading } from '@chakra-ui/react'
import HeroSection from '../../components/sections/marketing/hero'
import AboutSection from '../../components/sections/marketing/about'
import BenefitSection from '../../components/sections/marketing/benefits'
import HowWorkSection from '../../components/sections/marketing/howWork'
import SeeVideoSection from '../../components/sections/marketing/seeVideo'
import FeedbackSection from '../../components/sections/marketing/feedback'
import TariffsSection from '../../components/sections/marketing/tariffs'
import FAQSection from '../../components/sections/marketing/faq'

function Page(): JSX.Element {
  return (
    <>
      {/* hero section in marketing page */}
      <HeroSection />

      {/* about section in marketing page */}
      <AboutSection />

      {/* benefit section in marketing page */}
      <BenefitSection />

      {/* howWork section in marketing page */}
      <HowWorkSection/>

      {/* seevideo section in marketing page */}
      <SeeVideoSection/>

      {/* feedback section in marketing page */}
      <FeedbackSection/>

      {/* tariffs section in marketing page */}
      <TariffsSection/>

      {/* faq section in marketing page */}
      <FAQSection/>
    </>
  )
}

export default Page