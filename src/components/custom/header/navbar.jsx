'use client'

import { Box } from '@chakra-ui/react'
import React from 'react'
import { navbarLinks } from '../../../../data/navbarLinks/navLinks'
import Link from 'next/link'
import { ColorModeButton } from '../../ui/color-mode'

function Navbar() {
    console.log(navbarLinks)
    return (
        <Box className='customContainer' shadow={'0px 0px 15px 0px #DCDCDC'} borderRadius={'25px'} paddingX={'15px'} paddingY={'10px'} marginTop={'30px'} height={'auto'} _dark={{ bg: 'black', shadow: '0px 0px 5px 0px black'}} _light={{ bg: 'white' }}>
            <div className='flex items-center justify-between'>
                <Box className='px-4 py-2 rounded-2xl bg-blue-300 text-[18px] font-bold'><span className='text-blue-500'>Med</span><span className='text-white'>Stone</span></Box>
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
    )
}

export default Navbar

