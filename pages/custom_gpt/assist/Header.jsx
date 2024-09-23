import ActiveButtons from '@/components/ui/ActiveButtons'
import React from 'react'

const Header = ({
    source,
    setSource
}) => {
  return (
    <div className='w-full p-2'>
        <div className='max-w-80 mx-auto'>
            <ActiveButtons
                options={['Assist', 'Manual']}
                active={source}
                setActive={setSource}
            />
        </div>

    </div>
  )
}

export default Header