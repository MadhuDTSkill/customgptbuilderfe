'use client';
import React, { useState, useEffect } from 'react';
import { MdMenuOpen } from "react-icons/md";
import Button from '../ui/Button';
import { LuPlus } from "react-icons/lu";
import AllCustomGPTs from './AllCustomGPTs';
import { CiSettings } from "react-icons/ci";

const SideBar = ({
    isDrawerOpen,
    toggleDrawer
}) => {
  

  const gotoBujji = () => {
    dispatch(clearCurrentTopic());
    return nav(`/`);
  };

  return (
      <div
        className={`fixed bg-black top-0 left-0 h-full w-80 lg:w-64 text-sm shadow shadow-main transform transition-transform duration-300 z-10 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static`}
      >
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex-0 flex justify-between items-center p-2 w-full">
                <div className='flex justify-between items-center w-full'>
                    <Button href={'/custom_gpt'} extraClassName={'w-full flex justify-around font-semibold text-[16px] items-center'}>Create New <LuPlus size={20}/></Button>
                </div>
                <MdMenuOpen onClick={toggleDrawer} className='md:hidden rotate-180' size={28}/>
            </div>
            {/* Body */}
            <div className="flex-1 overflow-auto">
                <AllCustomGPTs/>
            </div>
            {/* Footer */}
            <div className="flex-0 flex justify-between px-4 items-center p-2">
                <h1 className='font-bold text-lg'>MeowGPT <code className='text-xs font-thin'>v1.0.0</code></h1>              
                <CiSettings className='cursor-pointer' size={20}/>
            </div>
            
        </div>
      </div>
  );
};

export default SideBar;

const catGPTNames = [
    "WhiskerGPT",
    "PurrfectGPT",
    "MeowsterGPT",
    "FelineGPT",
    "ClawGPT",
    "KittyCoderGPT",
    "PawPrintGPT",
    "CleverCatGPT",
    "MeowMindGPT",
    "PurrsonaGPT",
    "KitGPT",
    "CatCraftGPT",
    "TabbyGPT",
    "LynxLogicGPT",
    "SphinxGPT",
    "TigerTalkGPT",
    "PantherGPT",
    "PawGPT",
    "MeowvelousGPT",
    "FelixGPT"
  ];