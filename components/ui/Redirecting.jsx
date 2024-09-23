'use client'
import React from 'react'

const Redirecting = ({
    message = 'Redirecting',
    to = '/chat'
}) => {

    window.location.href = to

  return (
    <div className='h-screen flex justify-center items-center'>
        <h1 className='a animate-pulse'>{message}</h1>
    </div>
  )
}

export default Redirecting