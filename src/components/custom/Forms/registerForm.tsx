"use client";

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import PasswordInput from '../../ui/password-input';
import Link from 'next/link';
import { useRegister } from '../../../../hooks/api/useAuth';
import Image from 'next/image';
import { toast } from 'react-toastify';
import BackButton from '../button/backButton';

export default function RegisterForm() {
    const [registerData, setRegisterData] = useState({
        email: "",
        username: "",
        password: ""
    })
    const registerMutate = useRegister();

    const emailWord = registerData.email
    const targetWord = '@gmail.com'
    const checkIsTrue = emailWord.includes(targetWord)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!checkIsTrue) {
            toast.warn("Siz emailni noto'g'ri kiritdingiz yoki mavjud bo'lmagan email kiritdingiz !")
        } else {
            registerMutate.mutate(registerData);
        }
    };
    return (
        <div className='px-[150px] py-[50px] *:'>
            <Box border={'1px solid blue'} overflow={'hidden'} _dark={{ bg: '#24272e' }} borderRadius={'15px'} padding={'15px'} maxHeight={'calc(100vh - 100px)'}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Box width={'100%'}>
                        <Box>
                            <BackButton />
                        </Box>
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
                            <Heading paddingBottom={'15px'} fontSize={'42px'}>Register</Heading>
                        </Box>
                        <Text paddingBottom={'20px'} _dark={{ color: 'white' }} _light={{ color: 'gray.500' }} fontWeight={'semibold'}>Register here to use site.</Text>
                        <form onSubmit={handleSubmit}>
                            <Box display={'flex'} gap={'20px'} flexDirection={'column'}>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                    <label htmlFor="email">Email *</label>
                                    <Input type='email' id='email' placeholder='Enter email address' value={registerData.email} onChange={handleChange} required />
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                    <label htmlFor="username">Username *</label>
                                    <Input type='text' id='username' placeholder='Enter username' value={registerData.username} onChange={handleChange} required />
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                                    <label htmlFor="password">Password *</label>
                                    <PasswordInput id="password" value={registerData.password} onChange={handleChange} />
                                </Box>
                                <Box>
                                    <Button
                                        type='submit'
                                        variant={'solid'}
                                        width={'full'}
                                        bg={'blue.400'}
                                        _hover={{ bg: 'blue.500' }}
                                        isLoading={registerMutate.isPending}
                                        loadingText="Loading..."
                                        disabled={registerMutate.isPending}
                                    >
                                        Register
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                        <Box display={'flex'} justifyContent={'space-between'} paddingTop={'15px'}>
                            <Text>
                                Do you have already an account ?
                            </Text>
                            <Button variant={'link'} >
                                <Link href={'/login'}>
                                    Login now
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
