import React from 'react';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import './style.css';
const UploadCode = () => {
    return (
        <div className='upload-container'>
            <div> 
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
            // onChange={}
            />

            <InputField 
            type='Text'
            placeholder="Programing Language"
            style="mt-4"
            container='width-80'
            label={"Programing Language"}
            // onChange={}
            />
            <div className="tags flex flex-row justify-center align-center ">
            <InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            />
            <InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            />
            <InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            /><InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            /><InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            /><InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            /><InputField 
            label={"Tag Name"}
            type='checkbox'
            placeholder="Programing Language"
            style="mt-4"
            container='checkbox'
            // onChange={}
            />
             </div>
            </div> 
           
            <Button
             label="Add Code"
            // onClick={submit}
            />
            </div>
        </div></div>
    );
};

export default UploadCode;