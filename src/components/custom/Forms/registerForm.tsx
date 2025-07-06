"use client";

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React from 'react';
import PasswordInput from '../../ui/password-input';
import Link from 'next/link';

export default function RegisterForm() {
    return (
        <div className='px-[150px] py-[50px] *:'>
            <Box border={'1px solid blue'} borderRadius={'15px'} padding={'15px'}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Box width={'100%'}>
                        <Box marginTop={'20px'} className='signika-font'>
                            <Heading paddingBottom={'15px'} fontSize={'42px'}>Register</Heading>
                        </Box>
                        <Text paddingBottom={'30px'} _dark={{ color: 'white' }} _light={{ color: 'gray.500' }} fontWeight={'semibold'}>Register here to use site.</Text>

                        {/* inputlar */}
                        <Box display={'flex'} gap={'20px'} flexDirection={'column'}>
                            <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <label htmlFor="email">Email *</label>
                                <Input type='email' id='email' placeholder='Enter email address' required />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <label htmlFor="username">Username *</label>
                                <Input type='text' id='username' placeholder='Enter username' required />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <label htmlFor="password">Password *</label>
                                <PasswordInput id="password" />
                            </Box>
                            <Box>
                                <Button type='submit' variant={'solid'} width={'full'} bg={'blue.400'} _hover={{ bg: 'blue.500' }}>Login</Button>
                            </Box>
                            <Box display={'flex'} justifyContent={'space-between'} paddingTop={'15px'}>
                                <Text>
                                    Do you have already an account ?
                                </Text>
                                <Button variant={'link'}>
                                    <Link href={'/login'}>Login now</Link>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={'100%'}>
                        <img src="/images/imgs/formImage.png" className='object-cover  h-[50%] w-full ' alt="Login image for medicine medical" />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
