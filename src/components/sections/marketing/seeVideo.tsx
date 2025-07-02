'use client'

import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function SeeVideoSection() {
  return (
    <section data-aos='fade-up' className='border-0 border-t-2'>
      <Box className="customContainer" paddingY={'35px'}>
        <Box paddingBottom={'70px'}>
          <Heading paddingTop={'60px'} textAlign={'center'}>
            See MedStone in action!
          </Heading>
          <p className='text-center text-gray-400'>Dental Soft is already actively working! See our CRM system in action and explore its features and convenience.</p>
        </Box>
        <Box>
          <iframe width="100%" height="383" src="https://www.youtube.com/embed/HJGjNTJgf48" title="How insulin works"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Box>
      </Box>
    </section>
  )
}

export default SeeVideoSection