import React, { useEffect, useState } from 'react';
import { request } from '../utils/request.js';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const [isload, setLoad] = useState(true);
    const [isAuth, setAuth] = useState(false);

    const validateToken = async ()=>{
        if(localStorage.getItem("token")){
         const response = await   request(
            {
                method:"GET",
                path:"validatetoken",
                headers:{
                    Authorization:localStorage.getItem("token"),
            }
        })
            if(response?.success){
                setAuth(true);
                setLoad(false);
            }else{
                setLoad(false);
                setAuth(false);
                localStorage.clear()
            }
        }else{
            setLoad(false);
            setAuth(false);
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            setLoad(false);
            setAuth(false);
            localStorage.clear();
        }else{
            validateToken(token);
        }
    },[]);

    return ( 
        isload ?
         (<h1>Loading</h1>) 
         :isAuth ?
         (<Outlet />):
        (<Navigate to = "/login" />)
    )
};

export default ProtectedRoute;