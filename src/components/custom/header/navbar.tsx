'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'
import React, { JSX, useEffect, useState } from 'react'
import { navbarLinks } from '../../../../data/navbarLinks/navLinks'
import Link from 'next/link'
import { ColorModeButton } from '../../ui/color-mode'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar(): JSX.Element {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navBg = useColorModeValue('white', 'black');
    const navShadow = useColorModeValue('0px 0px 15px 0px #DCDCDC', '0px 0px 5px 0px black');

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log(navbarLinks)
    return (
        <nav
            className={
                isSticky
                    ? 'sticky top-0 w-full z-50'
                    : ''
            }
            style={isSticky ? { background: navBg, boxShadow: navShadow, transition: 'background 0.2s, box-shadow 0.2s' } : {}}
        >
            <Box
                className='customContainer'
                borderRadius={'35px'}
                paddingX={'15px'}
                paddingY={'10px'}
                marginTop={isSticky ? '0px' : '30px'}
                height={'auto'}
                shadow={isSticky ? undefined : navShadow}
                bg={isSticky ? undefined : navBg}
            >
                <div className='flex items-center justify-between'>
                    <Link href={'/'}>
                        <Box paddingX={'16px'} paddingY={'8px'} borderRadius={'25px'}  fontSize={'18px'} _hover={{ bg: 'blue.300' }} fontWeight={'700'} cursor={'pointer'} className='gradient-bg'><span className='text-blue-700'>Med</span><span className='text-white'>Stone</span></Box>
                    </Link>
                    {/* Desktop navlinks */}
                    <div className="hidden xl:block">
                        <ul className='flex items-center gap-7'>
                            {navbarLinks && navbarLinks.map((item, i) => (
                                <li key={i} className='font-semibold'>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Mobile hamburger */}
                    <div className="xl:hidden flex items-center">
                        <button onClick={() => setMobileOpen(v => !v)} className="text-2xl p-2 focus:outline-none">
                            {mobileOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    <div>
                        <ColorModeButton />
                    </div>
                </div>
                {/* Mobile dropdown */}
                {mobileOpen && (
                    <div className="xl:hidden mt-4 rounded-2xl shadow-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 p-4">
                        <ul className='flex flex-col gap-4'>
                            {navbarLinks && navbarLinks.map((item, i) => (
                                <li key={i} className='font-semibold'>
                                    <Link href={item.path} onClick={() => setMobileOpen(false)}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Box>
        </nav>
    )
}

export default Navbar

