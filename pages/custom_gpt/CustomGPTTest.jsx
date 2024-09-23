import React from 'react'
import Header from './gpt_test/Header'
import TestGPTComponent from './gpt_test/TestGPTComponent'

const CustomGPTTest = ({
  gptDetails
}) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex-0'>
        <Header gptDetails = {gptDetails}/>
      </div>
      <div className='flex-1 overflow-auto'>
        <TestGPTComponent gptDetails = {gptDetails} />
      </div>
    </div>
  )
}

export default CustomGPTTest