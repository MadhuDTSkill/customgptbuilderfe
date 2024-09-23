'use client'
import React from 'react'
import ChatLayout from '@/components/layouts/ChatLayout'
import AuthWrapper from '@/wrappers/AuthWrapper'

const Layout = ({children}) => {
  return (
      <ChatLayout>
          {children}
      </ChatLayout>
  )
}

export default AuthWrapper(Layout)