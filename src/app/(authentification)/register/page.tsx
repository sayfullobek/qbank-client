"use client";
import React, { useEffect } from 'react'
import RegisterForm from '../../../components/custom/Forms/registerForm'
import { useRouter } from 'next/navigation';
import { checkToken } from '../../../../lib/checkToken';

function RegisterPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);
  return (
    
    <>
      <RegisterForm/>
    </>
  )
}

export default RegisterPage