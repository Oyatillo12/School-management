import React from 'react'
import LogoImg from '../assets/images/logo.svg';
import { BillingIcon, DashboardIcon, ExamsIcon, FeaturesIcon, SettingsIcon, StudentIcon } from '../assets/images/icon';
import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';
function Navbar() {

  const navList = [
    {
      id: 1,
      title: 'Dashboard',
      path: '/',
      icon: <DashboardIcon />
    }, 
    {
      id:2,
      title:'Teachers',
      path:'/teachers',
      icon:<DashboardIcon/>
    },     {
      id:3,
      title:'Students',
      path:'/students',
      icon:<StudentIcon/>
    },
    {
      id:4,
      title:'Billing',
      path:'/billing',
      icon:<BillingIcon/>
    },
    {
      id:5,
      title:'Settings and profile',
      path:'/settings',
      icon:<SettingsIcon/>
    },
    {
      id:6,
      title:'Exams',
      path:'/exams',
      icon:<ExamsIcon/>
    },
    {
      id:7,
      title:'Features',
      path:'/features',
      icon:<FeaturesIcon/>
    }
  ]


  return (
    <div className='bg-[#152259] w-[20%] overflow-y-hidden h-[100vh]'>
      <div className='pt-[26px] pb-[40px] px-[55px] border-b-[1px] border-b-[#BDBDBD] mb-[16px]'>
        <Link to={'/'}><img className='mx-auto' src={LogoImg} alt="logo img" width={65} height={65} /></Link>
        <h2 className='text-white font-semibold text-[14px] text-center leading-[17px] mt-[22px]'>Udemy Inter. school</h2>
      </div>
      <div className='pl-[28px] pr-[21px] '>
        {navList.map(item => <NavbarLinks key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Navbar
