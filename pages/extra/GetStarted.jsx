/* eslint-disable react/no-unescaped-entities */
'use client'
import Button from '@/components/ui/Button';
import React from 'react'
import { ReactTyped } from "react-typed"
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Header from '@/components/getStarted/Header';
import { useContext } from 'react';
import  { UserContext } from '@/contexts/UserProvider';




const GetStarted = () => {

    const { user } = useContext(UserContext);

    const introPageContent = {
        title: `Hi ${user?.nickname}, Welcome to Custom GPT Builder`,
        description: "Create your own Custom GPT for any task, from coding assistance to conversational AI. Name it, and bring your GPT to life with ease!",
        keyPoints: [
            { title: "Build Custom GPTs", description: "Easily create and customize your own GPT tasks." },
            { title: "Interact with Your GPTs", description: "Chat with each custom GPT on a dedicated page." },
            { title: "Manage Your GPTs", description: "Keep a list of all your custom GPTs for future use." }
        ]
      };

      return (
    <div>
        <Header user = {user}/>
        <div className='h-full max-w-[1000px] mx-auto flex flex-col justify-center items-center p-2 md:p-3 lg:p-5'>
            <h1 className='text-6xl my-10 text-main'>
                <ReactTyped
                    strings={[
                        'Custom GPT Builder',
                        'Let\'s Build Custom GPT',
                    ]}
                    typeSpeed={100}
                    loop={true}
                    showCursor={false}
                    backDelay={2000}
                    backSpeed={100}
                />
            </h1>
            <h1 className="text-xl m-3">{introPageContent.title}</h1>
            <p className="pr-3">{introPageContent.description}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {introPageContent.keyPoints.map((point, index) => (
                    <div key={index} className='shadow shadow-main border-white rounded-lg p-3 hover:scale-105 transition-all duration-300'>
                        <h1 className='text-2xl mb-5 text-center text-main font-semibold'>{point.title}</h1>
                        <p className='text-center'>{point.description}</p>
                    </div>
                ))}
            </div>
            <Button href={'/chat'} extraClassName={'p-3 text-xl px-10 flex items-center'}>Let's Create <LiaExternalLinkAltSolid className='mx-2' size={22}/></Button>
        </div>
    </div>
  )
}

export default GetStarted