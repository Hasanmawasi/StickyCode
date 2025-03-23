import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import "./style.css"
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { request } from '../../utils/request';
const Home = () => {
    const [codes , setCodes] = useState([]);
    const [search , setSearch] = useState("")
    const getCodes = async ()=>{
        const response = await request({
            method:"GET", 
            path:"getusercodes",
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        if(response.success){
            setCodes(response.codes);
        }
        console.log(response);
    }
    const deleteCard = async (id)=>{
        const response = await request({
            method:"POST", 
            path:"deletecode",
            data:{
                id,
            },
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        if(response.success){
           getCodes()
        }
        console.log(response);
    }
    const togglefavorite = async(id)=>{
            const response = await request({
                        method:"POST", 
                        path:"setfavorite",
                        data:{
                            id,
                        },
                        headers:{
                            Authorization:localStorage.getItem('token')
                        }
                    })
                    if(response.success){
                     console.log("toggle")
                     getCodes()
                    }
                    console.log(response);
        }
        const searchLang=async ()=>{
            const response = await request({
                method:"POST", 
                path:"search",
                data:{
                    search,
                },
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
            if(response.success){
             console.log(response?.search)
             setCodes(response.search)
            }
            console.log(response);
        }
    useEffect(()=>{
        getCodes()
    },[])
    return (
        <div>
            <div className="body">
            <SearchBar
            value={search}
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            onClick={
                searchLang
            }
             />
                <div className="container">
                   {/* <Card
                   code={"helo the code is here hasdf asdf asf saf"}
                   language={"Java"}
                   tags={[{id:1 , name: "func"},{id:2 , name: "func"}]}
                   /> */}
                   {
                    codes.map((code)=>{
                      return  <Card
                                key={code?.id}
                            code={code?.code_text}
                            language={code?.language}
                            tags={code?.tags}
                            deleteFunc={()=>{
                                deleteCard(code?.id)
                            }}
                            togglefavorite={()=>{
                                togglefavorite(code?.id)
                            }}
                            favorite={code?.is_favorite}
                        />
                    })
                   }
                </div>
                
            </div>
                
            
        </div>
    );
};

export default Home;