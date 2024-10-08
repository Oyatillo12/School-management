import { Button } from 'antd'
import React, { useState } from 'react'
import Modal from './Modal'
import LoadingImg from '../assets/images/loading.png'
import { useNavigate } from 'react-router-dom'
import { BellIcon } from '../assets/images/icon'


function Logout({extraStyle}) {
    const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

    function hadnleLogout() {
        setIsLoading(true)
        setOpenModal(false)
        setTimeout(() => {
            setIsLoading(false)
            localStorage.clear()
            navigate('/')
            window.location.reload()
        }, 1000)

    }
    return (
        <>
            <div className='gap-[48px] flex items-center'>
                <button className='cursor-pointer'><BellIcon /></button>
                <Button type='primary' size='large' onClick={() => setOpenModal(true)} className={`text-[#FCFAFA] hover:opacity-60 duration-300 bg-[#509CDB] font-semibold text-[14px] leading-[18px] ${extraStyle}`} htmlType='button'>Log out</Button>
            </div>
            <Modal extraStyle={""} openModal={openModal} setOpenModal={setOpenModal}>
                <p className='mb-3 text-lg text-center'>Are you sure you want to log out ?</p>
                <div className='flex items-center justify-between'>
                    <Button className='w-[48%]' size='large' onClick={() => setOpenModal(false)}>Cancel</Button>
                    <Button className='w-[48%]' size='large' type='primary' onClick={hadnleLogout}>Log out</Button>
                </div>
            </Modal>
            {isLoading && <div className='fixed z-50 inset-0 backdrop-blur flex items-center justify-center'><img src={LoadingImg} alt="loading img" width={120} height={120} /></div>}
        </>
    )
}

export default Logout
