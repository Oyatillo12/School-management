import { createContext, useEffect, useState } from "react";
import useAxios from "../hook/useAxios";


export const Context = createContext()


export const AuthContext = ({children}) =>{
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null);
    const [register, setRegister] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


    const { data: teachers, postData: addTeacher, deleteData: deleteTeacher, EditData: EditTeacher } = useAxios('/teachers');

    localStorage.setItem('token',JSON.stringify(token));
    useEffect(() =>{
        localStorage.setItem('user',JSON.stringify(user));
    },[EditTeacher])



    
    return (
        <Context.Provider value={{user, setUser,token, setToken, register, setRegister, EditTeacher, deleteTeacher, addTeacher, teachers}}>
            {children}
        </Context.Provider>
    )
}