'use client'
import React from 'react'
import SignUpPage from '@/pages/auth/SignUp'
import UnAuthWrapper from '@/wrappers/UnAuthWrapper'

const SignUp = () => {
  return (
    <div>
      <SignUpPage/>
    </div>
  )
}

export default UnAuthWrapper(SignUp)