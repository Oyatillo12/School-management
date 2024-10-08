import { Empty } from 'antd'
import React from 'react'

function NotWorkingPages({ title }) {
    return (
        <div className='px-[38px] mt-[60px]'>
            <h2 className='mb-[50px] text-xl'>{title}</h2>
            <div className=' '>
                <Empty/>
                <p className='text-lg text-center mt-5'>These pages are currently not working.</p>

            </div>
        </div>
    )
}

export default NotWorkingPages
