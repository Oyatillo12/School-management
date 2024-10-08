import React, { useContext, useState } from 'react'
import Logout from '../components/Logout'
import { Button, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Avatar from '../assets/images/avatar.png'
import { Context } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import toast, { Toaster } from 'react-hot-toast'
import LoadingImg from '../assets/images/loading.png'


function AddTeacher() {
    const { EditTeacher, addTeacher, user, setUser } = useContext(Context)
    const navigate = useNavigate()
    const classList = [
        {
            value: 'J SS 1',
            label: 'J SS 1',
        },
        {
            value: 'JSS 2',
            label: 'JSS 2',
        },
        {
            value: 'JSS 3',
            label: 'JSS 3',
        },
        {
            value: 'SS 4',
            label: 'SS 4',
        },
        {
            value: 'JSS 5',
            label: 'JSS 5',
        },
    ]
    const subjectList = [
        {
            value: 'Chemistry',
            label: 'Chemistry',
        },
        {
            value: 'French',
            label: 'French',
        },
        {
            value: 'Maths',
            label: 'Maths',
        },
        {
            value: 'English',
            label: 'English',
        },
        {
            value: 'Social studies',
            label: 'Social studies',
        },
        {
            value: 'Home economics',
            label: 'Home economics',
        },
        {
            value: 'Geography',
            label: 'Geography',
        },
        {
            value: 'Pschology',
            label: 'Pschology',
        },
        {
            value: 'Physic',
            label: 'Physic',
        },
        {
            value: 'Accounting',
            label: 'Accounting',
        },
        {
            value: 'C.R.s',
            label: 'C.R.s',
        },
        {
            value: 'Politics',
            label: 'Politics',
        },
    ]
    const [name, setName] = useState(user?.fullName)
    const [age, setAge] = useState(user?.age)
    const [about, setAbout] = useState(user?.about)
    const [email, setEmail] = useState(user?.email)
    const [avatar, setAvatar] = useState(user?.img ? user.img : null)
    const [classic, setClassic] = useState(user?.class)
    const [subject, setSubject] = useState(user?.subject)
    const [gender, setGender] = useState(user?.gender)
    const [isLoading, setIsLoading] = useState(false)


    function handeAddSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            fullName: name,
            img: avatar ? avatar : Avatar,
            age: age,
            email: email,
            about: about ? about : "Not Available",
            class: classic,
            subject,
            gender,
        }

        if (user) {
            toast.success('Teacher Updated successfully!')
            setUser(data)
            setTimeout(() => {
                EditTeacher(user.id, data).then(() => {
                    setIsLoading(false);
                    e.target.reset();
                    setAvatar(Avatar);
                    setClassic(null)
                    setSubject(null)
                    setGender(null)
                    setAbout(null)
                    setAge(null)
                    setEmail(null)
                    setName(null)
                })
                navigate(-1)
            }, 1000)
        }
        else {
            toast.success('Teacher added successfully!')
            setTimeout(() => {
                addTeacher(data).then(() => {
                    setIsLoading(false);
                    e.target.reset();
                    setAvatar(Avatar);
                    setClassic(null)
                    setSubject(null)
                    setGender(null)
                    setAbout(null)
                    setAge(null)
                    setEmail(null)
                    setName(null)
                })
                navigate(-1)
            }, 1000)
        }

    }


    return (
        <div className='bg-[#FFFFFF] h-[100vh] overflow-y-auto pl-[38px] pr-[104px]'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex justify-between pt-[31px] pb-[22px]'>
                <ArrowLeftOutlined onClick={() => navigate(-1)} className='scale-[2] cursor-pointer' />
                <Logout extraStyle={'!bg-transparent !text-[#424242] !w-[50px] !shadow-none'} />
            </div>
            <form onSubmit={handeAddSubmit} autoComplete='off'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#4F4F4F] font-medium text-[20px] leading-[25px]'>{user ? "Edit teacher" : "Add teacher"}</h2>
                    <Button className='!bg-[#509CDB] py-3 hover:opacity-70' htmlType='submit' size='large' type='primary'>{user ? "Save" : "Add"}</Button>
                </div>

                <div className='mt-[55px] flex flex-wrap justify-between pr-[178px] items-center gap-y-7'>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Full Name</span>
                        <Input onChange={(e) => setName(e.target.value)} value={name} type='text' name='name' size='large' className=' w-full' allowClear placeholder='Full Name' required />
                    </label>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Class</span>
                        <Select allowClear size='large'
                            onChange={(value) => setClassic(value)}
                            showSearch
                            value={classic}
                            placeholder="Class"
                            optionFilterProp="label"
                            options={classList}
                        />
                    </label>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Email address</span>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} required type='email' name='email' size='large' className=' w-full' allowClear placeholder='Email address' />
                    </label>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Gender</span>
                        <Select value={gender} allowClear size='large'
                            onChange={(value) => setGender(value)}
                            showSearch
                            placeholder="Gender"
                            optionFilterProp="label"
                            options={[
                                {
                                    value: 'Male',
                                    label: 'Male',
                                },
                                {
                                    value: 'Female',
                                    label: 'Female',
                                }
                            ]}
                        />
                    </label>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Subject</span>
                        <Select required value={subject} allowClear size='large'
                            onChange={(value) => setSubject(value)}
                            showSearch
                            placeholder="Subject"
                            optionFilterProp="label"
                            options={subjectList}
                        />
                    </label>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Age</span>
                        <Input onChange={(e) => setAge(e.target.value)} value={age} required type='number' name='age' size='large' className=' w-full' allowClear placeholder='Age' />
                    </label>
                    <label className='flex flex-col justify-start space-y-1 w-[46%]'>
                        <span className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>About</span>
                        <TextArea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full'
                            name='about'
                            placeholder="About"
                            autoSize={{ minRows: 7, maxRows: 9 }}
                        />
                    </label>
                    <div className=' w-[46%] pb-[80px] cursor-pointer'>
                        <label htmlFor="img" className=' w-[46%] pb-[80px] cursor-pointer'>
                            <input id={'img'} name='img' onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
                            {avatar == null && <p className='text-[18px] hover:opacity-80 leading-[22px] font-medium text-[#4F4F4F]' >Upload Avatar</p>}
                        </label>
                        {avatar &&
                            <div className='flex flex-col space-y-3'>
                                <CloseOutlined onClick={() => setAvatar(null)}/>
                                <img className='w-[80px] h-[80px] rounded-full object-cover' src={avatar} alt="avatar icon" width={80} height={80} />
                            </div>}
                    </div>
                </div>
            </form>
            {isLoading && <div className='fixed z-50 inset-0 backdrop-blur flex items-center justify-center'><img src={LoadingImg} alt="loading img" width={120} height={120} /></div>}
        </div>
    )
}

export default AddTeacher
