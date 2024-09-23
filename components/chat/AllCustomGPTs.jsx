'use client'

import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { PiSpinnerGapBold } from "react-icons/pi";
import GPTDropdow from '../ui/GPTDropdow';
import apiCallWithToken from '@/functions/Axios';

const AllCustomGPTs = ({
}) => {
    const [customGPTs, setCustomGPTs] = useState([]);      
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const scrollToTop = () => {
        let ele = document.getElementById('customGPTs');
        if (ele) {
            ele.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getGPTs = async () => {
      let url = 'chat/gpts/lite-list'
      let body = {}
      let method = 'get'
      let loadingState = setIsLoading
      const onSuccess = (data) => {
        setCustomGPTs(data)
      }
      const onError = (error) => {
        console.log(error?.response?.data?.detail || 'Error fetching GPTs')
      }
      apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    }


    const getFilteredGPTs = () => {
        if (!searchText) return customGPTs;

        const filteredGPTs = customGPTs.filter(gpt =>
                gpt.title.toLowerCase().includes(searchText.toLowerCase())
            );
            return filteredGPTs;
        };


    const filteredGPTs = getFilteredGPTs();

    useEffect(() => {
        getGPTs();
    }, []);

    return (
        <div className='flex flex-col h-full'>
            {customGPTs.length !== 0 && (
                <div className='flex-0 relative px-2'>
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder={`Search Your Custom GPT ..`}
                        className='text-xs pl-5 prompt-placeholder my-2 bg-transparent p-2 w-full border-orange-600 outline-none hover:outline-none'
                    />
                    <IoSearch className='absolute top-2 right-100 mt-2 mr-2 text-gray-600 opacity-50' size={15} />
                </div>
            )}
            <div className='flex-1 overflow-auto h-full px-1'>
                <span id='customGPTs' className='opacity-0 h-0'></span>
                <div className='grid grid-rows-1 duration-300 transition'>
                    {filteredGPTs.map((gpt, index) => (
                        <div key={index} className='w-full'>
                            <div
                                key={index}
                                className={`flex justify-between p-2 px-1 cp hover:bg-gray-900 bg-opacity-35 rounded-lg duration-200 transition w-full`}
                            >
                                <div className='w-full truncate'>
                                    <GPTDropdow gpt = {gpt}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {customGPTs.length === 0 && !isLoading && (
                    <div className='flex justify-center items-center h-full'>
                        <h1 className='text-gray-700 font-main'>No customGPTs</h1>
                    </div>
                )}
                {isLoading && (
                    <div className='flex justify-center items-center h-full'>
                        <PiSpinnerGapBold size={20} className='animate-spin icon-color' />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllCustomGPTs;

  