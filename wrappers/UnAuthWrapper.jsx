'use client';
import React from 'react';
import {jwtDecode} from 'jwt-decode';
import Redirecting from '@/components/ui/Redirecting';

function isTokenExpired(token) {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.trunc(Date.now() / 1000);
    return currentTime > decodedToken.exp;
  } catch (error) {
    return true;
  }
}

function UnAuthWrapper(WrappedComponent) {
  const HOC = (props) => {
    const storedAccessToken = localStorage.getItem('accessToken');

    if (storedAccessToken && !isTokenExpired(storedAccessToken)) {
      return <Redirecting message='Already Signed In, Redirecting to Home ..' to='/' />;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
}

export default UnAuthWrapper;
