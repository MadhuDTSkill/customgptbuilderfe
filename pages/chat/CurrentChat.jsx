/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import Prompt from './Prompt'
import apiCallWithToken from '@/functions/Axios';
import EmptyMessageInfo from '@/components/chat/EmptyMessageInfo';

const CurrentChatPage = ({gpt_id}) => {

    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [prompt, setPrompt] = useState('')
    const [staticPrompt, setStaticPrompt] = useState('')


    const handlePrompt = async () => {
        let url = `chat/${gpt_id}`
        let body = {
            input : prompt,
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

    const getMessages = async () => {
        let url = `chat/messages/${gpt_id}`
        let body = {}
        let method = 'get'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
            setMessages(data)
        }
        const onError = (error) => {
          console.log(error?.response?.data?.detail || 'Error fetching Messages')
        }
        await apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    }

      useEffect(() => {
        getMessages();
        scrollToHeight()
    }, [gpt_id]);

    useEffect(() => {
        scrollToBottom()
    }, [messages])


  return (
    <div className='h-full flex flex-col'>
        <div id='responses' className='flex-1 overflow-auto'>
            <div className='max-w-[750px] mx-auto h-full'>
                {
                    messages?.length === 0 && !isLoading ?
                    <EmptyMessageInfo/>
                    :
                    <Messages isLoading = {isLoading} messages = {messages} staticPrompt = {staticPrompt}/>
                }
            </div>
        </div>
        <div className='flex-0 w-full'>
            <div className='max-w-[750px] mx-auto'>
                <Prompt
                    prompt={prompt}
                    setPrompt={setPrompt}
                    setStaticPrompt={setStaticPrompt}
                    onSubmit={handlePrompt}
                    isLoading={isLoading}
                    footer
                />
            </div>
        </div>
    </div>
  )
}

export default CurrentChatPage
