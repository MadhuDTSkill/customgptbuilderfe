/* eslint-disable react/no-unescaped-entities */
'use client'
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Label from "@/components/ui/Label"
import { ReactTyped } from "react-typed"

const SignUpPage = () => {
  return (
    <div className='h-screen flex justify-center items-center p-2 md:p-3 lg:p-5'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
            <div className='lg:col-span-2'>
            <h1 className='text-6xl my-20 text-main text-center'>MeowGPT</h1>
                <h1 className='text-4xl my-10 text-main '>
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
                <p>Create an account to unlock the power of custom AI model building. Personalize GPT to fit your unique requirements, whether it's for code assistance, content creation, or personal productivity. Start your journey towards building smarter solutions today!</p>
            </div>
            <div className='shadow shadow-main border-white rounded-lg p-3'>
                <h1 className='text-2xl mb-5 text-center text-main font-semibold'>Sign In</h1>
                <form>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Nick Name</Label>
                        <Input type="text" name="nick_name" id="nick_name" placeholder='Enter your Nick Name' extraClassName={'p-1'}/>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder='Enter your email' extraClassName={'p-1'}/>
                        <Label htmlFor="email">Password</Label>
                        <Input type="password" name="password" id="password" placeholder='Enter your password' extraClassName={'p-1'}/>
                        <Label htmlFor="email">Retype Password</Label>
                        <Input type="password" name="confirm_password" id="confirm_password" placeholder='Enter your password again' extraClassName={'p-1'}/>
                        <Button>Sign Up</Button>
                        <p className='text-center'>Already have an account? <a className='text-main font-semibold' href="/signin">Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage