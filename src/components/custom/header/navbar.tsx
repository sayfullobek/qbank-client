'use client'

import { Box } from '@chakra-ui/react'
import React, { JSX } from 'react'
import { navbarLinks } from '../../../../data/navbarLinks/navLinks'
import Link from 'next/link'
import { ColorModeButton } from '../../ui/color-mode'

function Navbar(): JSX.Element {
    console.log(navbarLinks)
    return (
        <nav className='fixed w-full z-1000'>
            <Box className='customContainer'  shadow={'0px 0px 15px 0px #DCDCDC'} borderRadius={'35px'} paddingX={'15px'} paddingY={'10px'} marginTop={'30px'} height={'auto'} _dark={{ bg: 'black', shadow: '0px 0px 5px 0px black' }} _light={{ bg: 'white' }}>
                <div className='flex items-center justify-between'>
                    <Link href={'/'}>
                        <Box paddingX={'16px'} paddingY={'8px'} borderRadius={'25px'}  fontSize={'18px'} _hover={{ bg: 'blue.300' }} fontWeight={'700'} cursor={'pointer'} className='gradient-bg'><span className='text-blue-700'>Med</span><span className='text-white'>Stone</span></Box>
                    </Link>
                    <div >
                        <ul className='flex items-center gap-7'>
                            {navbarLinks && navbarLinks.map((item, i) => {
                                return (
                                    <li key={i} className='font-semibold'>
                                        <Link href={item.path}>{item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <ColorModeButton />
                    </div>
                </div>
            </Box>
        </nav>
    )
}

export default Navbar

