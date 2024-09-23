'use client'
import TextArea from '@/components/ui/TextArea';
import React, { useEffect, useState, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { WiStars } from "react-icons/wi";
import Footer from './Footer';
// import Footer from '../Layout/Footer';

const Prompt = ({ setStaticPrompt, setPrompt, prompt, onSubmit, isStreaming, isLoading, placeholder, footer }) => {
  const [rows, setRows] = useState(1);


  const handleTextChange = (event) => {
    const textareaLineHeight = 24;
    const previousRows = event.target.rows;
    event.target.rows = 1; 

    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    setRows(currentRows);
    setPrompt(event.target.value);
    setStaticPrompt(event.target.value);
  };

  const goForSubmit = () => {
    if (prompt.trim() !== '' && !isLoading) {
      setRows(1);
      onSubmit();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      goForSubmit();
    }
  };


  useEffect(() => {
    const ele = document.getElementById('input-box')
    if (ele) {
      ele.focus()
    }
  }, [])

  return (
    <div className="bg-black">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goForSubmit();
        }}
      >
        <div className="flex justify-between items-center">
          <TextArea
            id='input-box'
            value={prompt}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            rows={rows}
            placeholder={placeholder || "Prompt to GPT..."}
            style={{ resize: 'none', overflow: 'hidden' }}
            extraClassName={'w-full'}
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-transparent text-main border-0"
            disabled={prompt?.trim() === '' || isLoading}
          >
            <FaPaperPlane className='border-0' />
          </button>
        </div>
      </form>
      <div className=''>
        {
          footer &&
          <Footer/>
        }
      </div>
    </div>
  );
};

export default Prompt;