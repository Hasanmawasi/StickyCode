import React, { useEffect, useState } from 'react';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import './style.css';
import { request } from '../../utils/request';
import Tag from '../../components/Tag';
const UploadCode = () => {  
    const [tagName, setTagName] = useState("");
    const [tags , setTags] = useState([])
    const [codedata , setCodeData] = useState({
        code_text:"",
        language:"",
        tagids:[]
    })
    const upload = async ()=>{
        const response = await request({
            method: "POST",
            path:"addcodetag",
            data:{
                ...codedata
            },
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        console.log(response)
    }
    const getTags = async ()=>{
        const response = await request({
            method: "GET",
            path:"getusertags",
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        if(response.success){
            setTags(response.tags)
        }
        console.log(response);
    }
    const addTag = async()=>{
        const response = await request({
            method:"POST",
            path:"addtag",
            data:{
              name:  tagName
            },
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        console.log(response)
        if(response.success){
            getTags()
            setTagName("")
        }
    }
    const deleteTag =async (id)=>{
        const response = await request({
                    method:"POST", 
                    path:"deletetag",
                    data:{
                        id,
                    },
                    headers:{
                        Authorization:localStorage.getItem('token')
                    }
                })
                if(response.success){
                    getTags()
                }
                console.log(response);
    }
    useEffect(()=>{
        getTags();
    },[])
  
    return (
        <div className='upload-container flex-col'>
           
            <div className="upload flex flex-col justify-center align-center">
                <div className="title">
                    <h1 className='mt-4 upload-title'>Upload Code</h1>
                </div>
           <div className="width-80 mt-4 flex flex-col justify-center align-center"> 
                        <InputField 
                        label={"Code"}
                            type='text'
                            placeholder="Add your Code"
                            style="mt-4"
                            container='width-80'
                            value={codedata.code_text}
                            onChange={(e)=>{setCodeData({
                                ...codedata,
                                code_text: e.target.value
                            })}}
                            />

                            <InputField 
                            type='Text'
                            placeholder="Programing Language"
                            style="mt-4"
                            container='width-80'
                            label={"Programing Language"}
                            value={codedata.language}
                            onChange={(e)=>{setCodeData({
                                ...codedata,
                                language: e.target.value
                            })}}
                            />
                            <div className="tags flex flex-row justify-center align-center ">
                            {
                                tags.map((tag)=>{
                                    return <InputField 
                                    key={tag.id}
                                    label={tag.name}
                                    type='checkbox'
                                    placeholder="Programing Language"
                                    style="mt-4"
                                    container='checkbox'
                                    value={tag.id}
                                    onChange={(e)=>{setCodeData({
                                        ...codedata,
                                        tagids:[...codedata.tagids ,e.target.value] 
                                    })
                                    // console.log(codedata.tagids)
                                }}
                                    />
                                })
                            }
                                    
                            </div>
                            </div> 
                        
                            <Button
                            label="Add Code"
                            onClick={upload}
                            />
            </div>
            <div className="upload marign-bottom flex flex-col justify-center align-center">
                <div className="title">
                    <h1 className='mt-4 upload-title'>Upload Code</h1>
                </div>
             <div className="width-80 mt-4 flex flex-col justify-center align-center"> 
                        <InputField 
                        label={"Tag Name"}
                            type='text'
                            placeholder="Add your Tag"
                            style="mt-4"
                            container='width-80'
                            value={tagName}
                            onChange={(e)=>{setTagName(
                             e.target.value
                            )}}
                            />
                            <Button
                            label="Add Code"
                            onClick={addTag}
                            />
                            </div> 
                            <div className="tags">
                            {
                                tags.map((tag,index)=>{
                                  return  <> 
                                  <Tag 
                                  key={index+tag.id}
                                  tagName={tag.name}
                                  deleteFunc={()=>deleteTag(tag.id)}
                                  />
                                  </>
                                })
                            }
                        </div>
                        </div>
                        
                  </div>
        
    );
};

export default UploadCode;