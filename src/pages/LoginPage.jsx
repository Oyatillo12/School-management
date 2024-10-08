import { Button, Input } from 'antd'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/AuthContext';
import LoadingImg from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {
    const { setToken, register } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)


    function handleLoginSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
        const data = {
            username: e.target.username.value.trim(),
            password: e.target.password.value.trim()
        }

        if (register) {
            if (data.username == register.username && data.password == register.password) {
                toast.success(`Welcome to dashboard ${data.username}`)
                setTimeout(() => {
                    setToken(data)
                    setIsLoading(false)
                }, 1000)
            } else {
                
                setTimeout(() =>{
                    setIsLoading(false)
                    toast.error(`${data.username} is not registered `)
                },700)
            }
        }
        else {
            if (data.username == 'admin' && data.password === '123') {
                toast.success(`Welcome to dashboard ${data.username}`)
                setTimeout(() => {
                    setToken(data)
                    setIsLoading(false)
                }, 1000)

            } else {
                               
                setTimeout(() =>{
                    setIsLoading(false)
                    toast.error(`${data.username} is not registered `)
                },700)
            }
        }


    }

    return (
        <div className=' mt-[184px]'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2 className='text-[#4F4F4F] text-center  text-[36px] leading-[44px] font-semibold mb-[53px]'>Welcome, Log into you account</h2>
            <div className='bg-white shadow-lg mx-auto pb-[39px] pt-[72px] px-[132px] w-[512px]'>
                <h3 className='text-[#667085] text-center font-medium text-[16px] leading-[25px] mb-[34px]'>It is our great pleasure to have you on board!</h3>
                <form autoComplete='off' onSubmit={handleLoginSubmit} className='mb-[14px] '>
                    <Input required name='username' type='text' className='w-full mb-[14px] text-[14px] leading-[17px] py-[13px]' placeholder='Enter your Login' />
                    <Input required name='password' type='password' className='w-full mb-[14px] text-[14px] leading-[17px] py-[13px]' placeholder='Enter Password' />
                    <Button htmlType='submit' type='primary' className='w-full py-3 font-bold text-[14px] leading-[18px]' >Login</Button>
                </form>
                <Link className='text-[#2D88D4] text-[14px] leading-[24px] font-bold text-center block' to={'/sign-up'}>Sign up</Link>
            </div>
            {isLoading && <div className='fixed inset-0 backdrop-blur flex items-center justify-center'><img src={LoadingImg} alt="loading img" width={120} height={120} /></div>}
        </div>
    )
}

export default LoginPage
