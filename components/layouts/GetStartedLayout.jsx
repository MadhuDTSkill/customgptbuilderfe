import React from 'react'
import Header from '@/components/getStarted/Header'

const GetStartedLayout = ({children}) => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-0'>
        <Header/>
      </div>
        <div className='flex-1 flex justify-center items-center'>
          {children}
        </div>
    </div>
  )
}

export default GetStartedLayout