'use client'
import SpinIcon from '@/components/ui/SpinIcon'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { marked } from 'marked';
import { ImSpinner9 } from "react-icons/im";

const Messages = ({staticPrompt = 'Connecting', messages = [], isLoading = false, gptDetails}) => {

  const getMarkdown = (markdown) => {
    return { __html: marked(markdown) };
  };

  return (
    <div className='p-3 relative font-thin '>
      {
        messages?.map((message, index) =>
          <div key={message.id || index}>
            {
              message?.user_message || message.input &&
              <div className='grid grid-cols-9 md:grid-cols-12 '>
                <div className='col-span-8 md:col-span-11'>
                  <h1 className='font-extrabold text-lg text-main'>You</h1>
                  <p className='py-3'>{message?.user_message || message.input?.input}</p>
                </div>
              </div>
            }
            <div className='py-2'>
              <h1 className='font-extrabold text-lg text-main mb-2'>{gptDetails ? gptDetails?.name || 'Default' : 'MeowGPT'}</h1>
              <div className='text-white'>
                <div className='text-white' dangerouslySetInnerHTML={getMarkdown(message.ai_message || message.response)} />
              </div>
            </div>
          </div>
        )
      }
      
      {
        isLoading &&
        <div>
          <div className='grid grid-cols-9 md:grid-cols-12 '>
            <div className='col-span-8 md:col-span-11'>
              <h1 className='font-extrabold text-lg text-main font-main'>You</h1>
              <p className='py-3'>{staticPrompt}</p>
            </div>
          </div>
          <div className='grid grid-cols-9 md:grid-cols-12'>
            <div className='col-span-8 md:col-span-11'>
              <h1 className='font-extrabold text-lg text-main font-main mb-2'>MeowGPT</h1>
                <ImSpinner9 className='text-xl animate-spin text-main'/>
            </div>
          </div>
        </div>
      }
      <span id='response-bottom'></span>
    </div>
  )
}

export default Messages

