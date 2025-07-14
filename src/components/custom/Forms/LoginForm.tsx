"use client";

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import PasswordInput from '../../ui/password-input';
import Link from 'next/link';
import Image from 'next/image';
import { useLogin } from '../../../../hooks/api/useAuth';
import BackButton from '../button/backButton';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const loginMutation = useLogin();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate(loginData);
    };

    return (
        <div className='flex justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 py-8'>
            <Box border={'1px solid blue'} overflow={'hidden'} _dark={{ bg: '#24272e' }} borderRadius={'15px'} padding={{ base: '10px', md: '15px' }} maxHeight={'calc(100vh - 100px)'} width={{ base: '100%', sm: '90%', md: '70%', lg: '60%', xl: '50%' }}>
                <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
                    {/* Image and BackButton only on md and up */}
                    <Box width={'100%'} display={{ base: 'none', md: 'block' }}>
                        <Box>
                            <BackButton />
                        </Box>
                        <Image
                            src="/images/imgs/formImage.png"
                            alt="Login image for medicine medical"
                            width={500}
                            height={300}
                            className='object-cover imageScaler h-[180px] w-full md:h-[50%]'
                        />
                    </Box>
                    <Box width={'100%'}>
                        <Box marginTop={'20px'} className='signika-font'>
                            <Heading paddingBottom={'15px'} fontSize={{ base: '2xl', md: '3xl', lg: '42px' }}>Login</Heading>
                        </Box>
                        <Text paddingBottom={'30px'} _dark={{ color: 'white' }} _light={{ color: 'gray.500' }} fontWeight={'semibold'}>Login in here to use site.</Text>
                        {/* inputlar */}
                        <form onSubmit={handleSubmit}>
                            <Box display={'flex'} gap={'20px'} flexDirection={'column'}>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                    <label htmlFor="username">Username *</label>
                                    <Input type='text' value={loginData.username} onChange={handleChange} id='username' placeholder='Enter username' required />
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'} >
                                    <label htmlFor="password">Password *</label>
                                    <PasswordInput id="password" value={loginData.password} onChange={handleChange} />
                                </Box>
                                <Box>
                                    <Button
                                        variant={'solid'}
                                        type='submit'
                                        width={'full'}
                                        bg={'blue.400'}
                                        _hover={{ bg: 'blue.500' }}
                                        isLoading={loginMutation.isPending}
                                        loadingText="Loading..."
                                        disabled={loginMutation.isPending}
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                        <Box display={'flex'} flexDirection={{ base: 'column', sm: 'row' }} justifyContent={'space-between'} paddingTop={'15px'} gap={2}>
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