/* eslint-disable react/no-unescaped-entities */
'use client'
import Button from '@/components/ui/Button';
import { ReactTyped } from 'react-typed';

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-main mb-4">404</h1>
      <p className="text-2xl text-main">
        <ReactTyped
          strings={["Oops! The page you're looking for doesn't exist."]}
          typeSpeed={30}
          showCursor={false}
        />
      </p>
      <Button onClick={() => window.history.back()} extraClassName={'p-3 mt-5 text-xl px-10'}>
          Go Back
      </Button>
    </div>
  );
}
