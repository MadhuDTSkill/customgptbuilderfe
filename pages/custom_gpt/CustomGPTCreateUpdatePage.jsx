'use client'

import Header from '@/components/custom_gpt/Header'
import React, { useEffect, useState } from 'react'
import CustomGPTAssistance from './CustomGPTAssistance'
import CustomGPTTest from './CustomGPTTest'

const CustomGPTCreateUpdatePage = ({
    isUpdate
}) => {

    const [gptDetails, setGptDetails] = useState({
        "name": "Default",
        "short_description": "Default Description",
        "system_prompt" : "You are a helpful assistant.",
    })

    useEffect(() => {
        if (isUpdate){
            console.log('fetch data')
        }
    }, [isUpdate])


  return (
    <div className='flex flex-col h-dvh'>
        <div className='flex-0'>
            <Header isUpdate={isUpdate} gptDetails = {gptDetails}/>
        </div>
        <div className='flex-1 flex overflow-auto md:flex-nowrap flex-wrap gap-3 p-3 h-full w-full'>
            <div className='w-full h-full overflow-auto'>
                <CustomGPTAssistance setGptDetails = {setGptDetails} gptDetails = {gptDetails}/>
            </div>
            <div className='w-full h-1 md:w-1 md:h-full bg-white'/>
            <div className='w-full h-full overflow-auto'>
                <CustomGPTTest gptDetails  = {gptDetails}/>
            </div>
        </div>
    </div>
  )
}

export default CustomGPTCreateUpdatePage