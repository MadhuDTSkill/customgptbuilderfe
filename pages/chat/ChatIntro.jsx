'use client'
import React from 'react'
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserProvider';


const ChatIntroPage = () => {
  
  const { user } = useContext(UserContext)

  return (
    <div className='h-full flex flex-col justify-center items-center p-2'>
      <h1 className='text-2xl'> Hi {user?.nickname}! Welcome to Your Custom GPT Space!</h1>
      <p className='my-3'><i>Create your own GPT or start chatting with an existing one. Dive into endless possibilities</i></p>
    </div>
  )
}

export default ChatIntroPage