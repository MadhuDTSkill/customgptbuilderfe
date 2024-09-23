'use client'
import React from 'react'
import AuthWrapper from '@/wrappers/AuthWrapper'

const Layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthWrapper(Layout)