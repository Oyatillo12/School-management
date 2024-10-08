import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddTeacher, Billing, Dashboard, Exams, Features, NotFoundPage, Settings, SingleUser, Students, Teachers } from '../pages'
import Navbar from '../components/Navbar'

function DashboardRoute() {
    return (
        <div className='flex'>
            <Navbar/>
            <div className='w-[80%]'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/teachers' element={<Teachers />} />
                    <Route path='/teachers/add' element={<AddTeacher />} />
                    <Route path='/teachers/:id' element={<SingleUser />} />
                    <Route path='/teachers/edit/:id' element={<AddTeacher />} />
                    <Route path='/students' element={<Students />} />
                    <Route path='/billing' element={<Billing />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/exams' element={<Exams />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>

    )
}

export default DashboardRoute
