import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, NotFoundPage, RegisterPage } from '../pages'

function EnterRoute() {
  return (
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} /> 
        <Route path='*' element={<NotFoundPage />} />
     
    </Routes>
  )
}

export default EnterRoute
