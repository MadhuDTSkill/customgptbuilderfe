'use client'
import axios from 'axios';
import { getData } from './LocalStorage';

const instanceWithToken = axios.create({
  baseURL: 'http://localhost:8003/api/', 
  timeout: 60000, 
  headers: {
    'Authorization': `Bearer ${getData("accessToken")}`, 
  }
});

const instance = axios.create({
  baseURL: 'http://localhost:8003/api/', 
  timeout: 60000, 
});

const refreshToken = async () => {
  try {
   const response = await axios.post(
     `http://localhost:8003/api/user/token/refresh/`,
     {
       refresh: getData("refreshToken"),
     }
   );
   const newAccessToken = response.data.access;
   return newAccessToken;
 } catch (error) {
   throw error;
 }
};

instanceWithToken.interceptors.response.use(
 (response) => response,
 async (error) => {
   if (error.response) {
     const { status } = error.response;
     if (status === 401) {
       try {
         const newAccessToken = await refreshToken(); 
         if (newAccessToken) {
           localStorage.setItem("accessToken", newAccessToken);
           error.config.headers.Authorization = `Bearer ${newAccessToken}`;
           return axios(error.config);
         }
         else{
           localStorage.clear();
           window.location.href = '/signin';
          }
        } catch (refreshError) {
         localStorage.clear();
         window.location.href = '/signin';
       }
     }
   }
   return Promise.reject(error);
 }
);

const apiCallWithToken = async (endpoint, body, method, loadingState, onSuccess, onError) => {
  loadingState(true)
  await instanceWithToken[method](endpoint, body)
  .then(response => {
      let data = response.data
      loadingState(false)
      return onSuccess(data)
  })
  .catch(error => {
      loadingState(false)
      return onError(error)   
  }) 
}

export const apiCall = async (endpoint, body, method, loadingState, onSuccess, onError) => {
  loadingState(true)
  await instance[method](endpoint, body)
  .then(response => {
      let data = response.data
      loadingState(false)
      return onSuccess(data)
  })
  .catch(error => {
    loadingState(false)
    return onError(error)   

  }) 
}

export default apiCallWithToken