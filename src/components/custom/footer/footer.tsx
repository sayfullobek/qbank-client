'use client'

import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { navbarLinks } from '../../../../data/navbarLinks/navLinks'

function Footer() {
    const bgFooter = useColorModeValue('white', 'black')
    return (
        <section style={{ backgroundColor: bgFooter }}>
            <Box className='customContainer' paddingY={'45px'} display={'grid'} gridTemplateColumns={{xl: 'auto auto auto', lg: 'auto auto', base: 'auto'}}>
                <Box >
                    <Link href={'/'} >
                        <Box paddingX="16px"
                            paddingY="8px"
                            borderRadius="25px"
                            fontSize="18px"
                            fontWeight="700"
                            cursor="pointer"
                            _hover={{ bg: 'blue.300' }}
                            className="gradient-bg"
                            display="inline-block"
                            maxW="fit-content"><span className='text-blue-700'>Med</span><span className='text-white'>Stone</span></Box>
                    </Link>
                    <p className='pt-14'>© 2024 LLC &quot;MedStone&quot;</p>
                </Box>
                <div >
                    <ul className='flex lg:flex-row flex-col lg:items-start items-center text-start py-5 gap-7'>
                        {navbarLinks && navbarLinks.map((item, i) => {
                            return (
                                <li key={i} className='font-semibold'>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Box display={'grid'} gridTemplateColumns={'auto auto'} gap={'10px'} paddingY={'15px'} paddingX={'10px'} borderRadius={'15px'} _dark={{ bg: '#2f333a' }} _light={{ bg: '#f5f5f7' }}>
                    <Box>
                        <Heading fontSize={'17px'} paddingBottom={'7px'} >Fergana, Uzbekistan</Heading>
                        <p>Address</p>
                    </Box>
                    <Box>
                        <Heading fontSize={'17px'} paddingBottom={'7px'} >+998 91 123 45 67</Heading>
                        <p>Phone</p>
                    </Box>
                    <Box>
                        <a className='text-[17px] font-bold' href='https://mailto:info@medstone.uz' target='blank'>info@medstone.uz</a>
                        <p>Email</p>
                    </Box>
                    <Box>
                        <Heading fontSize={'17px'} paddingBottom={'7px'} >@Dentalsoft_admin</Heading>
                        <p>Telegram</p>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

export default Footer