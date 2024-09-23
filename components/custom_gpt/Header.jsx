import React from 'react'
import Button from '../ui/Button'

const Header = (
    {
        isUpdate,
        gptDetails
    }
) => {
  return (
    <div>
        <div className='flex justify-between items-center shadow shadow-main lg:px-10 md:px-5 p-2'>
            <div>
                <h1 className='font-semibold text-sm'>{gptDetails.name}</h1>
                <span className='text-xs'>{gptDetails.updated_at  && `Last updated at ${gptDetails.updated_at}`}</span>
            </div>
            {
                isUpdate ? <Button >Update</Button> : <Button extraClassName={'text-sm'}>Create</Button>
            }
        </div>
    </div>
  )
}

export default Header