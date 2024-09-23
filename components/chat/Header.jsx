'use client'
import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserProvider';

const Header = ({
    toggleDrawer
}) => {

  const { user } = useContext(UserContext);

  return (
    <div className='flex justify-between items-center p-2'>
        <div className='flex items-center'>
            <MdMenuOpen onClick={toggleDrawer} size={28} className='md:hidden'/>
            <h1 className='text-main font-semibold text-xl mx-2'>MeowGPT</h1>
        </div>
        <h1 className='text-main font-semibold mx-2'>@{user.nickname}</h1>
    </div>
  )
}

export default Header