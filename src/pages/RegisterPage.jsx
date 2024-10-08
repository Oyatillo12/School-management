import { Button, Input } from 'antd'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import LoadingImg from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast'

function RegisterPage() {
    const navigate = useNavigate()
    const { setRegister } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)

    function handleRegisterSubmit(e) {
        e.preventDefault()
        setIsLoading(true)

        const data = {
            email: e.target.useremail.value.trim(),
            username: e.target.username.value.trim(),
            password: e.target.password.value.trim(),
        }

        setTimeout(() => {
            setRegister(data)
            navigate(-1)
            setIsLoading(false)
            toast.success(`Successfully registered ${data.username}`)
        }, 1000)


    }
    return (
        <div className=' mt-[98px]'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2 className='text-[#4F4F4F] text-center  text-[36px] leading-[44px] font-semibold mb-[53px]'>Welcome, create your school account </h2>
            <div className='bg-white shadow-lg mx-auto pb-[39px] pt-[72px] px-[132px] w-[512px]'>
                <h3 className='text-[#667085] text-center font-medium text-[16px] leading-[25px] mb-[34px]'>It is our great pleasure to have you on board!</h3>
                <form onSubmit={handleRegisterSubmit} autoComplete='off' className='mb-[14px] '>
                    <Input required name='useremail' type='email' className='w-full mb-[14px] text-[14px] leading-[17px] py-[13px]' placeholder='Enter your Email' />
                    <Input required name='username' type='text' className='w-full mb-[14px] text-[14px] leading-[17px] py-[13px]' placeholder='Create your Login' />
                    <Input required name='password' type='password' className='w-full mb-[14px] text-[14px] leading-[17px] py-[13px]' placeholder='Create your Password' />
                    <Button htmlType='submit' type='primary' className='w-full py-3 font-bold text-[14px] leading-[18px]' >Sign up</Button>
                </form>
                <button type='button' className='text-[#2D88D4] text-[14px] leading-[24px] font-bold mx-auto block' onClick={() => navigate(-1)}>Sign in</button>
            </div>
            {isLoading && <div className='fixed inset-0 backdrop-blur flex items-center justify-center'><img src={LoadingImg} alt="loading img" width={120} height={120} /></div>}
        </div>
    )
}

export default RegisterPage
