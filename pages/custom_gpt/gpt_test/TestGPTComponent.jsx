'use client'
import React, {useEffect, useState} from 'react'
import Messages from '../../chat/Messages'
import Prompt from '../../chat/Prompt'
import EmptyMessageInfo from '@/components/chat/EmptyMessageInfo';
import apiCallWithToken from '@/functions/Axios';

const TestGPTComponent = ({gptDetails}) => {

  const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [prompt, setPrompt] = useState('')
    const [staticPrompt, setStaticPrompt] = useState('')


    const handlePrompt = async () => {
        let url = `gpt/assist/test/`
        let body = {
            input : prompt,
            system_prompt : gptDetails?.system_prompt,
        }
        let method = 'post'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
          setMessages(prev => ([...prev, data]))
          setStaticPrompt('')
        }
        const onError = (error) => {
          console.log(error?.response?.data?.detail || 'Error on Sending Prompt')
        }
        setPrompt('')
        setTimeout(()=>{
            scrollToBottom()
            scrollToHeight()
        },200)
        await apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    }

    const scrollToBottom = () => {
        let ele = document.getElementById('response-bottom');
        if (ele) {
          ele.scrollIntoView({ behavior: 'smooth' });
        }
      }
    
      const scrollToHeight = () => {
        let ele = document.getElementById('responses');
        if (ele) {
          ele.scrollTop = ele.scrollHeight;
        }
      }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

  return (
    <div className='h-full flex flex-col'>
        <div className='flex-1 overflow-auto'>
            {
                messages?.length === 0 && !isLoading ?
                <EmptyMessageInfo message={'Test your gpt here ...'}/>
                :
                <Messages gptDetails = {gptDetails} isLoading = {isLoading} messages = {messages} staticPrompt = {staticPrompt}/>
            }
        </div>
        <div className='flex-0'>
            <Prompt
              prompt={prompt}
              setPrompt={setPrompt}
              setStaticPrompt={setStaticPrompt}
              onSubmit={handlePrompt}
              isLoading={isLoading}
              placeholder={`Message to ${gptDetails?.name || 'Default'}`}
            />
        </div>
    </div>
  )
}

export default TestGPTComponent