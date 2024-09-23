'use client'
import React from 'react'
import SignInPage from '@/pages/auth/SignIn'
import UnAuthWrapper from '@/wrappers/UnAuthWrapper'

const SignIn = () => {
  return (
    <div>
      <SignInPage/>
    </div>
  )
}

export default UnAuthWrapper(SignIn)