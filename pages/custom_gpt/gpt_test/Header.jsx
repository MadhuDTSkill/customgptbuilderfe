import React from 'react'

const Header = ({
  gptDetails
}) => {
  return (
    <div>
        <h1 className='font-semibold text-lg text-center m-1'>Test</h1>
        <div className='flex flex-col items-center gap-1'>
            <h1 className='text-2xl'>{gptDetails.name}</h1>
            <h1 className='text-lg italic'>{gptDetails.short_description}</h1>
        </div>
    </div>
  )
}

export default Header