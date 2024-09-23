'use client';

import React from 'react';
import {jwtDecode} from 'jwt-decode';
import Redirecting from '@/components/ui/Redirecting';
import UserProvider from '@/contexts/UserProvider';


function isTokenExpired(token) {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.trunc(Date.now() / 1000);
    return currentTime > decodedToken.exp;
  } catch (error) {
    return true; 
  }
}

function AuthWrapper(WrappedComponent) {
  const HOC = (props) => {
    const storedAccessToken = localStorage.getItem('accessToken');

    if (!storedAccessToken || isTokenExpired(storedAccessToken)) {
      return <Redirecting message='Not Signed In, Redirecting to Sign In ..' to='/signin' />;
    }
    return <UserProvider><WrappedComponent {...props} /></UserProvider>;
  };

  return HOC;
}

export default AuthWrapper;
