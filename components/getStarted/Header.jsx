'use client'
import React from 'react'

const Header = ({user}) => {

  return (
    <div className='px-1 md:px-2 lg:px-4'>
        <div className='flex justify-between items-center p-3'>
            <h1 className='text-2xl font-semibold'>MeowGPT</h1>
              <div>
                  <p className='text-lg mx-2'>{user.nickname}</p>
              </div>
        </div>
    </div>
  )
}

export default Header