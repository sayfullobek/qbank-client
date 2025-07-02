'use client'

import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { benefitData } from '../../../../data/benefitData/benefit'
import BenefitCard from '../../custom/cards/benefitCard'
import { CardDataProps } from '../../../../types/type'

function AboutSection() {
  const bg = useColorModeValue('#fafcff','#1e2128')
  return (
    <section data-aos='fade-up' style={{ backgroundColor: bg}} id='about'>
      <Box className="customContainer" >
        <Box >
          <Heading paddingTop={'50px'} textAlign={'center'}>
            Why choose <span className='px-2 py-1 rounded-4xl text-white fira-font gradient-bg'>MedStone?</span>
          </Heading>
        </Box>
        <Box display={'grid'} gridTemplateColumns={{xl:'auto auto auto ', md:'auto auto', base:'auto'}} gap={'5px'} paddingTop={'55px'}>
          {benefitData && benefitData.map((item: CardDataProps, i: number) => {
            return(
              <BenefitCard key={i} imgW={35} imgH={35} imageUrl={item.iconUrl} name={item.name} description={item.description}/>
            )
          })}
        </Box>
      </Box>
    </section>
  )
}

export default AboutSection