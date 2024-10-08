import { DeleteOutlined, EllipsisOutlined } from '@ant-design/icons'
import React from 'react'

function PersonList({ item, index, onClick, more }) {
    


    return (
        <tr className={`${(index + 1) % 2 == 0 ? "bg-[#EBF6FF80]" : "bg-[#FFFFFF]"} `}>
            <td className='flex items-center py-4 pl-2 space-x-2'>
                <img className='w-[24px] h-[24px] object-cover rounded-full' src={item.img} alt="avatar icon" width={24} height={24} />
                <strong className='font-medium text-[12px] leading-[15px] text-[#4F4F4F]'>{item.fullName}</strong>
            </td>
            <td className='font-medium py-4 text-[12px] leading-[15px] text-[#4F4F4F]'>{item.age}</td>
            <td className='font-medium py-4 text-[12px] leading-[15px] text-[#4F4F4F]'>{item.subject}</td>
            <td className='font-medium py-4 text-[12px] leading-[15px] text-[#4F4F4F]'>{item.class}</td>
            <td className='font-medium py-4 text-[12px] leading-[15px] text-[#4F4F4F]'>{item.email}</td>
            <td className='font-medium py-4 text-[12px] leading-[15px] text-[#4F4F4F]'>{item.gender}</td>
            <td className='flex items-center pr-2 py-4 space-x-4'>
                <EllipsisOutlined onClick={() => more(item)} className='hover:scale-125 duration-300 hover:text-blue-500'/>
                <DeleteOutlined onClick={() => onClick(item.id)} className='hover:scale-125 duration-300 hover:text-red-500'/>
            </td>
        </tr>
    )
}

export default PersonList
