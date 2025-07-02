'use client'

import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function BenefitSection() {
  const bg = useColorModeValue('#fafcff','#1e2128')
  return (
    <section style={{ backgroundColor: bg}}>
      <Box className="customContainer" height={'100vh'}>
        <Box>
          <Heading paddingTop={'50px'} textAlign={'center'}>
            Why choose <span>MedStone?</span>
          </Heading>
        </Box>
      </Box>
    </section>
  )
}

export default BenefitSection