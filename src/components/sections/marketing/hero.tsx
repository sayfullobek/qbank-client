import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import doctorHero from '../../../../public/images/imgs/doc-hero.webp'
import Image from 'next/image'
function HeroSection() {
  return (
    <section className='!border-b-2 !border-[#edf2f9]'>
      <Box
        className='customContainer'
        paddingTop={'100px'}
        display={'grid'}
        gridTemplateColumns={{ xl: 'auto auto', base: 'auto' }}
        justifyContent={{ xl: 'center', base: 'center' }}
        alignItems={{ xl: 'center', base: 'center' }}
        textAlign={{ xl: 'start', base: 'center' }}
      >
        <Box className='w-full'>
          <Heading
            fontSize={'50px'}
            paddingBottom={'12px'}
            fontWeight={'600'}
            paddingTop={'50px'}
            className='fira-font'
            width={{ base: '100%', xl: '80%' }}
            lineHeight={'65px'}
            textAlign={{ base: 'center', xl: 'start' }}
          >
            Digitize your Medical clinic!
          </Heading>
          <Heading className='pt-3' textAlign={{ xl: 'start', base: 'center' }}>
            <span className='px-4 py-2 gradient-bg font-semibold text-white rounded-2xl text-[17px]'>MedStone</span> <span className='text-[16.5px] font-semibold fira-font'> - Perfect management system</span>
          </Heading>
          <Box pt={6} pb={5} width={{ base: '100%', xl: '55%' }} marginX={{ base: 'auto', xl: '0' }}>
            <p className='fira-font leading-relaxed' style={{ textAlign: 'inherit' }}>
              A single platform for automating appointments, managing patients, and optimizing billing and reporting
            </p>
          </Box>
          <Box>
            <Button marginRight={'15px'} bg={'blue.500'} _hover={{ bg: 'blue.400' }} color={'white'}>Try it now</Button>
            <Button variant={'outline'} _hover={{ bg: 'blue.500', color: 'white' }}>Register</Button>
          </Box>
        </Box>
        <Box className='w-full'>
          <Image className='w-[498.5px] h-[490px] object-cover' src={doctorHero} alt="Doctor " />
        </Box>
      </Box>
    </section>
  )
}

export default HeroSection