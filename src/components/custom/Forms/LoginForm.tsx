"use client";

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React from 'react';
import PasswordInput from '../../ui/password-input';
import Link from 'next/link';
import Image from 'next/image';

const LoginForm = () => {
    return (
        <div className='px-[150px] py-[50px] *:'>
            <Box border={'1px solid blue'} borderRadius={'15px'} padding={'15px'}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Box width={'100%'}>
                        <Image 
                            src="/images/imgs/formImage.png" 
                            alt="Login image for medicine medical"
                            width={500}
                            height={300}
                            className='object-cover imageScaler h-[50%] w-full'
                        />
                    </Box>
                    <Box width={'100%'}>
                        <Box marginTop={'20px'} className='signika-font'>
                            <Heading paddingBottom={'15px'} fontSize={'42px'}>Login</Heading>
                        </Box>
                        <Text paddingBottom={'30px'} _dark={{ color: 'white' }} _light={{ color: 'gray.500' }} fontWeight={'semibold'}>Login in here to use site.</Text>

                        {/* inputlar */}
                        <Box display={'flex'} gap={'20px'} flexDirection={'column'}>
                            <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <label htmlFor="username">Username *</label>
                                <Input type='text'  id='username' placeholder='Enter username'/>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <label htmlFor="password">Password *</label>
                                <PasswordInput  id="password" />
                            </Box>
                            <Box>
                                <Button variant={'solid'} width={'full'} bg={'blue.400'} _hover={{bg: 'blue.500'}}>Login</Button>
                            </Box>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} paddingTop={'15px'}>
                                                       <Text>
                               Don&apos;t have an account ? 
                            </Text>
                           <Button variant={'link'}>
                            <Link href={'/register'}>Register now</Link>
                           </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};
export default LoginForm