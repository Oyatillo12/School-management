import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLinks({item}) {
  return (
    <NavLink to={item.path} className={'py-3 w-full flex items-center navLink relative text-white pl-[16px] space-x-4 rounded-[4px]'}>
        {item.icon}
        <span className='text-[14px] leading-[17px] text-white font-semibold'>{item.title}</span>
    </NavLink>
  )
}

export default NavbarLinks
