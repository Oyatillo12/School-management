import React, { useContext, useState } from 'react'
import Logout from '../components/Logout'
import { Button, Pagination } from 'antd'
import { BxIcon, SearchIcon, UpDownIcon } from '../assets/images/icon'
import PersonList from '../components/PersonList';
import EmptyImg from '../assets/images/empty.png'
import { Context } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import LoadingImg from '../assets/images/loading.png'
import toast, { Toaster } from 'react-hot-toast';

function Teachers() {
    const navigate = useNavigate()
    const { deleteTeacher, teachers, setUser } = useContext(Context)
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [teacherID, setTeacherID] = useState(null)
    const [search, setSearch] = useState('')
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredTeachers = teachers.filter((item) =>
        item.fullName?.includes(search) || item.email?.includes(search)
    );

    function handleShowDelete(id) {

        setOpenModal(true)
        setTeacherID(id)
    }
    function handleDelete() {
        setIsLoading(true)
        setOpenModal(false)
        setTimeout(() => {
            deleteTeacher(teacherID)
            setOpenModal(false)
            setIsLoading(false)
            toast.success('You deleted the teacher')
        }, 1000)

    }
    function handleMore(data) {
        setIsLoading(true)
        setTimeout(() => {
            setUser(data)
            setIsLoading(false)
            navigate(`id${data.id}`)
        }, 1000)
    }
    function handleAdd() {
        navigate('add')
        setUser(null)
    }
    function handleSearch(e) {

        setLoadingSearch(true)
        setTimeout(() => {
            setLoadingSearch(false)
            setSearch(e.target.value)
        }, 700)
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedTeachers = filteredTeachers.slice(startIndex, endIndex);

    function paginated(value){
        setLoadingSearch(true)
        setTimeout(() => {
            setCurrentPage(value)
            setLoadingSearch(false)
        }, 500)

    }


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='h-[100vh] overflow-y-auto pr-[104px] pl-[38px] bg-white pb-[30px] relative'>
                <div className='flex justify-end pt-[31px] pb-[22px]'>
                    <Logout extraStyle={'!bg-transparent !text-[#424242] !w-[50px] !shadow-none'} />
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#4F4F4F] font-medium text-[20px] leading-[25px]'>Teachers</h2>
                    <Button onClick={handleAdd} className='!bg-[#509CDB] py-3 hover:opacity-70' htmlType='button' size='large' type='primary'>Add Teachers</Button>
                </div>
                <div className='w-full mb-3 bg-[#FCFAFA] py-[17px] px-4 flex items-center space-x-4 mt-[28px] rounded-[8px]'>
                    <SearchIcon />
                    <input onChange={handleSearch} className='bg-transparent outline-none text-[14px] leading-[17px] w-[96%] font-medium' type="search" placeholder='Search for a student by name or email' />
                </div>
                {filteredTeachers.length ?
                    <table className='w-full'>
                        <thead>
                            <tr className='text-start'>
                                <th className='text-[#424242] pl-2 text-start leading-6 py-4 font-bold text-[14px]'>Name</th>
                                <th className='text-[#424242] text-start leading-6 py-4 font-bold text-[14px]'>age</th>
                                <th className='text-[#424242] text-start leading-6 py-4 font-bold text-[14px]'>Subject</th>
                                <th className='text-[#424242] text-start leading-6 py-4 font-bold text-[14px]'>Class</th>
                                <th className='text-[#424242] text-start leading-6 py-4 font-bold text-[14px]'>Email  address</th>
                                <th className='text-[#424242] text-start leading-6 py-4 font-bold text-[14px]'>Gender</th>
                                <th className='text-[#424242] text-start leading-6 py-4  font-bold text-[14px]'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadingSearch ? <img className=' absolute inset-0 m-auto' src={LoadingImg} alt="loading img" width={100} height={100} /> :
                                paginatedTeachers.map((item, index) => <PersonList more={handleMore} onClick={handleShowDelete} index={index} key={item.id} item={item} />)}
                        </tbody>
                    </table> :
                    <div className='w-full pt-[14px] pb-[85px] text-center bg-[#FCFAFA] relative'>
                        <img className='mx-auto mb-[9px]' src={EmptyImg} alt="emoty img" width={340} height={255} />
                        <p className='mb-[4px] text-[#4F4F4F] font-semibold text-[28px] leading-[34px]'>No Teachers at this time</p>
                        <p className=' text-[#4F4F4F] font-medium text-[14px] leading-[17px]'>Teachers will appear here after they enroll in your school.  </p>
                        <button className='flex items-center gap-[39px] bottom-[35px] right-[20px] absolute py-[22px] px-6 rounded-[30px] bg-[#152259] hover:opacity-70 duration-300'>
                            <div className='flex items-center gap-2'>
                                <BxIcon />
                                <span className='text-[14px] leading-[17px] font-semibold text-white block'>Support</span>
                            </div>
                            <UpDownIcon />
                        </button>
                    </div>}
                <Pagination className='mt-[20px]  block text-right' onChange={paginated} current={currentPage} pageSize={itemsPerPage} total={teachers.length} />
            </div>
            <Modal extraStyle={""} openModal={openModal} setOpenModal={setOpenModal}>
                <p className='mb-3 text-lg text-center'>Are you sure you want to Delete ?</p>
                <div className='flex items-center justify-between'>
                    <Button className='w-[48%]' size='large' onClick={() => setOpenModal(false)}>Cancel</Button>
                    <Button className='w-[48%]' size='large' type='primary' onClick={handleDelete}>Delete</Button>
                </div>
            </Modal>
            {isLoading && <div className='fixed z-50 inset-0 backdrop-blur flex items-center justify-center'><img src={LoadingImg} alt="loading img" width={120} height={120} /></div>}
        </>
    )
}

export default Teachers
