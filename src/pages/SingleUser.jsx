import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';
import Logout from '../components/Logout';
import { useNavigate } from 'react-router-dom';
import Avatar from '../assets/images/avatar.png'
import { EMailIcon, PhoneIcon, SingleIcon } from '../assets/images/icon';


function SingleUser() {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const userIconsList = [
        {
            id: 1,
            icon: <SingleIcon />
        },
        {
            id: 2,
            icon: <PhoneIcon />
        },
        {
            id: 3,
            icon: <EMailIcon />
        }
    ]


    return (
        <div className='bg-white overflow-y-auto h-[100vh] pr-[91px] pl-[66px]'>
            <div className='flex justify-between pt-[31px] pb-[28px]'>
                <ArrowLeftOutlined onClick={() => navigate(-1)} className='scale-[2] cursor-pointer' />
                <Logout extraStyle={'!bg-transparent !text-[#424242] !w-[50px] !shadow-none'} />

            </div>
            <div className='pl-[163px] pr-[158px] py-[63px] flex items-start justify-between relative'>
                <EditOutlined onClick={() => navigate(`/teachers/edit/${user.id}`)} className='scale-[2] hover:scale-[2.3] hover:text-blue-500 p-1 rounded-full hover:bg-[#00000011] duration-300 absolute top-[80px] right-[100px]' />

                <div className='text-center flex flex-col justify-center items-center'>
                    <img className='w-[280px] mx-auto mb-[50px] h-[280px] rounded-full object-cover' src={user?.img ? user.img : Avatar} alt="avatar img" width={280} height={280} />
                    <strong className='font-bold text-[#1A1A1A] text-[16px] leading-[19px] '>{user?.fullName}</strong>
                    <p className='mb-10 text-[#4F4F4F] text-[12px] leading-[15px] font-medium'>{user?.email}</p>
                    <ul className='flex items-center space-x-6'>
                        {userIconsList.map(item => <li className='p-4 bg-[#EFF3FA] rounded-[8px]' key={item.id}>{item.icon}</li>)}
                    </ul>
                </div>
                <div className='w-[400px] pt-10'>
                    <strong className='font-semibold text-[#1A1A1A] text-[16px] leading-5 mb-[10px]'>About</strong>
                    <p className='text-[#A7A7A7] text-[16px] leading-[21px] font-medium'>{user?.about}</p>
                    <div className='flex items-center gap-x-[120px]  mt-7'>
                        <div className='flex items-center flex-col justify-center'>
                            <strong className='font-semibold text-[#1A1A1A] text-[12px] leading-[14px] block mb-[7px]'>Subject</strong>
                            <span className='font-medium text-[#A7A7A7] text-[14px] leading-[17px] block mb-6'>{user?.subject}</span>
                            <strong className='font-semibold text-[#1A1A1A] text-[12px] leading-[14px] block mb-[7px]'>Age</strong>
                            <span className='font-medium text-[#A7A7A7] text-[14px] leading-[17px]'>{user?.age}</span>
                        </div>
                        <div className='flex items-center flex-col justify-center'>
                            <strong className='font-semibold text-[#1A1A1A] text-[12px] leading-[14px] block mb-[7px]'>Class</strong>
                            <span className='font-medium text-[#A7A7A7] text-[14px] leading-[17px] block mb-6'>{user?.class}</span>
                            <strong className='font-semibold text-[#1A1A1A] text-[12px] leading-[14px] block mb-[7px]'>Gender</strong>
                            <span className='font-medium text-[#A7A7A7] text-[14px] leading-[17px]'>{user?.gender}</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SingleUser
