/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, {useEffect, useState} from 'react'
import Messages from '../../chat/Messages'
import Prompt from '../../chat/Prompt'
import apiCallWithToken from '@/functions/Axios'
import EmptyMessageInfo from '@/components/chat/EmptyMessageInfo';

const AssistComopnent = ({gptDetails, setGptDetails}) => {

  const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [lastResponse, setLastResponse] = useState(null)
    const [isLoading2, setIsLoading2] = useState(false)
    const [prompt, setPrompt] = useState('')
    const [staticPrompt, setStaticPrompt] = useState('')


    const handlePrompt = async () => {
        let url = `gpt/assist/`
        let body = {
            input : prompt,
            system_prompt : gptDetails?.system_prompt,
        }
        let method = 'post'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
          setMessages(prev => ([...prev, data]))
          setLastResponse(data)
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

    const getGPTJsonData = async (user_message, assistant_response) => {
        let url = `gpt/assist/json_data/`
        let body = {
          ...gptDetails,
          user_message,
          assistant_response
      }       
        let method = 'post'
        let loadingState = setIsLoading2
        const onSuccess = (data) => {
          setGptDetails(prev => ({...data.response}))
        }
        const onError = (error) => {
          console.log(error?.response?.data?.detail || 'Error on Getting JSON Data')
        }
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

    useEffect(() => {
      if (lastResponse) {
        getGPTJsonData(lastResponse?.input?.input, lastResponse?.response)
      }
    }, [lastResponse])

  return (
    <div className='h-full flex flex-col'>
        <div className='flex-1 overflow-auto'>
            {
                messages?.length === 0 && !isLoading ?
                <EmptyMessageInfo message={'Start building your AI assistant GPT ..'}/>
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
              placeholder={'Message to MeowGPT'}
            />
        </div>
    </div>
  )
}
export default AssistComopnent