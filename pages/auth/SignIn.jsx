/* eslint-disable react/no-unescaped-entities */
'use client'
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Label from "@/components/ui/Label"
import { useEffect, useState } from "react"
import { ReactTyped } from "react-typed"
import SpinIcon from "@/components/ui/SpinIcon"
import { apiCall } from "@/functions/Axios"
import { storeData } from "@/functions/LocalStorage"

const SignInPage = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        let url = 'user/login/'
        let body = {
            email,
            password
        }
        let method = 'post'
        let loadingState = setIsLoading
        let onSuccess = (data) => {
            console.log(data)
            storeData('accessToken', data.access)
            storeData('refreshToken', data.refresh)
            return window.location.href = '/'
        }   
        let onError = (error) => {
            console.log(error)
        } 
        await apiCall(url, body, method, loadingState, onSuccess, onError)
    }

    useEffect(()=>{
        setError('')
    }, [email, password])

  return (
    <div className='h-screen flex justify-center items-center p-2 md:p-3 lg:p-5'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
            <div className='lg:col-span-2'>
                <h1 className='text-6xl my-2 text-main text-center'>MeowGPT</h1>
                <h1 className='text-4xl my-10 text-main'>
                    <ReactTyped
                        strings={[
                            'Custom GPT Builder',
                            'Let\'s Build Custom GPT',
                            'Build Custom GPTs',
                        ]}
                        typeSpeed={100}
                        loop
                        backDelay={2000}
                        backSpeed={100}
                    />
                </h1>
                <p>Sign in to create your own custom AI models with ease. Customize GPT to suit your needs, from coding assistants to personal guides. Let's get started building your intelligent solutions!</p>
            </div>
            <div className='shadow shadow-main border-white rounded-lg p-3'>
                <h1 className='text-2xl mb-5 text-center text-main font-semibold'>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    {
                        error && <p className='text-red-500 text-center'>{error}</p>
                    }
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email' 
                            extraClassName={'p-1'}
                            disabled={isLoading}
                            required
                        />
                        <Label htmlFor="email">Password</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password' 
                            extraClassName={'p-1'}
                            disabled={isLoading}
                            required
                        />
                        <Button type='submit' extraClassName={'flex justify-center items-center'}><SpinIcon spin = {isLoading}/>Sign In</Button>
                        <p className='text-center'>Don't have an account? <a className='text-main font-semibold' href="/signup">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignInPage