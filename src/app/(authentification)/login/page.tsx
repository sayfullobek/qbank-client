'use client'
import React, { useEffect } from 'react'
import LoginForm from '../../../components/custom/Forms/LoginForm'
import { useRouter } from 'next/navigation';
import { checkToken } from '../../../../lib/checkToken';

function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);
  return (
    <>
     <LoginForm />
    </>
  )
}

export default LoginPage