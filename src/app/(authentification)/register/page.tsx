"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { checkToken } from '../../../../lib/checkToken';
import { ColorModeSwitcher } from '../../../components/ui/color-mode';
import MultiStepRegisterForm from '../../../components/custom/Forms/registerForm';

function RegisterPage() {
  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);
  return (

    <>
      <ColorModeSwitcher   />
      <MultiStepRegisterForm />
    </>
  )
}

export default RegisterPage