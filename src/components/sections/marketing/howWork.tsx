'use client'

import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

function HowWorkSection() {
  const bg = useColorModeValue('#f6f8fb', '#24272e')
  return (
      <section data-aos='fade-up' className='border-0 bordert-2 mb-10' style={{backgroundColor: bg}}>
      <Box className="customContainer">
        <Box paddingBottom={'70px'}>
          <Heading paddingTop={'80px'} textAlign={'center'}>
            How the system works
          </Heading>
          <p className='text-center text-gray-400'>&quot;How Does Dental Soft Work?&quot;</p>
        </Box>
        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 relative max-w-4xl mx-auto pb-10">
          {/* Dotted line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t border-dotted border-gray-400 z-0" style={{transform: 'translateY(-50%)'}} />
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 border-l border-dotted border-gray-400 z-0" style={{transform: 'translateX(-50%)'}} />

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-transparent z-10">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-black shadow-md mb-4">
              <Image src="/icons/documentIcon.svg" alt="Register your clinic" width={48} height={48} />
            </span>
            <h3 className="font-bold text-lg md:text-xl mb-2">Register your clinic</h3>
            <p className="text-gray-400 max-w-xs">Add your clinic to the system and create profiles for doctors.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-transparent z-10 my-8 md:my-0">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-black shadow-md mb-4">
              <Image src="/icons/clientIcon.svg" alt="Add patients and assign services" width={48} height={48} />
            </span>
            <h3 className="font-bold text-lg md:text-xl mb-2">Add patients and assign services</h3>
            <p className="text-gray-400 max-w-xs">Manage appointments and accept payments</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-transparent z-10">
            <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-black shadow-md mb-4">
              <Image src="/icons/chartIcon.svg" alt="Increase revenue and manage your clinic easily" width={48} height={48} />
            </span>
            <h3 className="font-bold text-lg md:text-xl mb-2">Increase revenue and manage your clinic easily</h3>
            <p className="text-gray-400 max-w-xs">Automate workflows and eliminate errors!</p>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default HowWorkSection