import React from 'react';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import { Link} from 'react-router-dom';
import "../Login/style.css";
const Signup = () => {
    return (
        <div className='login-body flex align-center justify-center'> 
        <div className='flex flex-col justify-center align-center login-card '>
            <h1>Sign Up</h1>
            <InputField
            container='mt-1 width-80'
            label={"Name"}
            type='text'
            placeholder='Enter Your Name'
            // value={form.email}
            // onChange={
            //     (e)=> setForm({
            //         ...form,
            //         email:e.target.value,
            //     })
            // }
            style="mt-4"
            />
            <InputField
             container='mt-2 width-80'
            label={"Email"}
            type='email'
            placeholder='Example@gmail.com'
            // value={form.password}
            // onChange={
            //     (e)=> setForm({
            //         ...form,
            //         password:e.target.valuers,
            //     })
            // }
            style="mt-4"
            />
             <InputField
             container='mt-2 width-80'
            label={"Password"}
            type='password'
            placeholder='*******'
            // value={form.password}
            // onChange={
            //     (e)=> setForm({
            //         ...form,
            //         password:e.target.valuers,
            //     })
            // }
            style="mt-4"
            />
            <div className='form-link mt-3'> 
            <p>Create an acount? <Link to="/login" className='link' >Login </Link></p>
          
            </div>
            <Button
             label="Sign Up"
            // onClick={submit}
            />
        </div>
        </div>
    );
};

export default Signup;