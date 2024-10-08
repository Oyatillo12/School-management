import React from 'react'

function Modal({children, openModal, setOpenModal, extraStyle}) {
  return (
    <div onClick={(e) => e.target.id == 'wrapper' ? setOpenModal(false) : ""} id='wrapper' className={`fixed z-50 inset-0 backdrop-blur-sm flex items-center justify-center duration-300 ${openModal ? 'scale-1' : 'scale-0'}`}>
      <div className={`w-[400px]  bg-white p-4 shadow-2xl rounded-lg ${extraStyle}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
