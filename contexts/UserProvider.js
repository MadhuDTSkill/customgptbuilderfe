import React, {useState, createContext, useEffect } from "react";
import apiCallWithToken from "@/functions/Axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: 'John Doe',
        age: 25,
    });

    const [isLoading, setIsLoading] = useState(false)
    
    const fetchUser = async () => {
        let url = 'user/user-details/'
        let body = {}
        let method = 'get'
        let loadingState = setIsLoading
        const onSuccess = (data) => {
            setUser(data)
        }
        const onError = (error) => {
            console.log(error)
        }
        await apiCallWithToken(url, body, method, loadingState, onSuccess, onError)
    };

    useEffect(() => {
        fetchUser();
    }, []);



    return (
      <UserContext.Provider value={{ user }}>
        {children}
      </UserContext.Provider>
    );
  };

  export default UserProvider