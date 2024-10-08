import React from 'react'
import NotFoundImg from '../assets/images/notfound.png'

function NotFoundPage() {
  return (
    <div className='mt-[60px]'>
      <p className='text-center text-[35px]'>Page not founded let's that try again.</p>
      <img className='mx-auto' src={NotFoundImg} alt="not found img" width={300} />
    </div>
  )
}

export default NotFoundPage
