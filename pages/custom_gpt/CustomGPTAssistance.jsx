'use client'
import React, { useState } from 'react'
import Header from './assist/Header'
import ManualComponent from './assist/ManualComponent'
import AssistComopnent from './assist/AssistComopnent'

const CustomGPTAssistance = ({
  setGptDetails,
  gptDetails
}) => {

    const [source, setSource] = useState('Assist') // manual

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-0'>
        <Header source = {source} setSource = {setSource}/>
      </div>
      <div className='flex-1 overflow-auto min-w-96'>
        <div className={`h-full ${source === 'Manual' ? 'hidden' : ''}`}>
            <AssistComopnent  setGptDetails = {setGptDetails} gptDetails = {gptDetails}/>          
        </div>
        <div className={`h-full ${source === 'Assist' ? 'hidden' : ''}`}>
          <ManualComponent  setGptDetails = {setGptDetails} gptDetails = {gptDetails}/>
        </div>
        {/* {
            source === 'Assist' ? <AssistComopnent  setGptDetails = {setGptDetails} gptDetails = {gptDetails}/> : <ManualComponent  setGptDetails = {setGptDetails} gptDetails = {gptDetails}/>
        } */}
      </div>

    </div>
  )
}

export default CustomGPTAssistance