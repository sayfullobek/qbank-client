'use client'
import React, { useEffect } from 'react'
import LoginForm from '../../../components/custom/Forms/LoginForm'
import { useRouter } from 'next/navigation';
import { checkToken } from '../../../../lib/checkToken';
import { ColorModeSwitcher } from '../../../components/ui/color-mode';

function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);
  return (
    <>
      <ColorModeSwitcher />
      <LoginForm />
    </>
  )
}

export default LoginPage