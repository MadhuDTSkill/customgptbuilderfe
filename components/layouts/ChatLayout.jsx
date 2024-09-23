'use client';
import React, {useState} from 'react'
import SideBar from '../chat/Sidebar'
import Header from '../chat/Header';

const ChatLayout = ({children}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    
    return (
        <div className='flex h-dvh font-main relative w-full'>
            <div className='shadow shadow-main'>
                <SideBar isDrawerOpen={isDrawerOpen} toggleDrawer = {toggleDrawer}/>
            </div>
            <div className='p-1 w-full h-full flex flex-col relative'>
                <div className='flex-0'>
                    <Header isDrawerOpen={isDrawerOpen} toggleDrawer = {toggleDrawer}/>
                </div>
                <div className='flex-1 overflow-auto sh-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ChatLayout