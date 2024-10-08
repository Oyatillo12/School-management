import React, { useState } from 'react'
import { AddClassIcon, AddIcon, AddStudentIcon, BxIcon, UpDownIcon } from '../assets/images/icon'
import DashboardCards from '../components/DashboardCards'
import Logout from '../components/Logout'


function Dashboard() {
 


  const dashCard = [
    {
      id: 1,
      title: 'Add other admins ',
      icon: <AddIcon />
    },
    {
      id: 2,
      title: 'Add classes ',
      icon: <AddClassIcon />
    },
    {
      id: 3,
      title: 'Add students',
      icon: <AddStudentIcon />
    }
  ]
  return (
    <>
    <div className=' overflow-y-auto bg-white h-[100vh]'>
      <div className='pt-[29px] px-[126px] flex items-center bg-[#FCFAFA] pb-[15px] justify-between'>
        <div className='w-[536px]'>
          <p className='font-normal text-[16px] text-[#424242] leading-[20px] '>Learn  how to launch faster
            watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
        <Logout/>
      </div>
      <div className='bg-white px-[126px]  pt-[53px] relative'>
        <h2 className='font-semibold mb-[23px] text-[36px] leading-[44px] text-[#4F4F4F]'>Welcome to your dashboard, Udemy school</h2>
        <strong className='block pl-[106px] font-semibold mb-[74px] text-[24px] leading-[29px] text-[#4F4F4F]'>Uyo/school/@teachable.com</strong>
        <ul className='space-y-[34px] pl-[90px]'>
          {dashCard.map(item => <DashboardCards key={item.id} item={item} />)}
        </ul>
        <button className='flex items-center gap-[39px] bottom-[15px] right-[120px] absolute py-[22px] px-6 rounded-[30px] bg-[#152259] hover:opacity-70 duration-300'>
          <div className='flex items-center gap-2'>
            <BxIcon />
            <span className='text-[14px] leading-[17px] font-semibold text-white block'>Support</span>
          </div>
          <UpDownIcon />
        </button>
      </div>
    </div>
    

    </>
  )
}

export default Dashboard

