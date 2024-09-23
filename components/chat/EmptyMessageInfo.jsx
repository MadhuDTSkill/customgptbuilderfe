/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const EmptyMessageInfo = ({message}) => {
  return (
    <div className='h-full flex justify-center items-center'>
        <p>
          {
            message || 
            `It looks like the conversation hasn't started yet. Please type a message to begin chatting!`
          }
        </p>
    </div>
  )
}

export default EmptyMessageInfo