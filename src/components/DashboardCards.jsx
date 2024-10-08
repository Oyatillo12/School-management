import React from 'react'

function DashboardCards({item}) {
  return (
    <li className='flex items-start gap-5'>
      <div className='p-[6px] rounded-[8px] bg-[#EFF3FA]'>{item.icon}</div>
      <div className='w-[464px] mt-[3px]'>
        <h3 className='mb-[16px] text-[24px] leading-[29px] font-medium text-[#4F4F4F]'>{item.title}</h3>
        <p className='text-[14px] leading-[18px] font-normal text-[#4F4F4F]'>Create rich course content and coaching products for your students.
        When you give them a pricing plan, they'll appear on your site!</p>
      </div>
    </li>
  )
}

export default DashboardCards
