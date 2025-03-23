import React, { useEffect, useState } from 'react';
import { request, BaseUrl } from '../../utils/requests';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRout = () => {
    const [isload, setLoad] = useState(true);
    const [isAuth, setAuth] = useState(false);

    const validateToken = async ()=>{
        if(localStorage.getItem("token")){
         const response = await   request({method:"POST",url:BaseUrl+"validateID",data:{
                token:localStorage.getItem("token"),
            }})
            if(response.success){
                setAuth(true);
                setLoad(false);
            }else{
                setLoad(false);
                setAuth(false);
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

export default ProtectedRout;