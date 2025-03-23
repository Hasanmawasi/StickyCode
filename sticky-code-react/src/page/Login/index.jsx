import React from 'react';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import { Link} from 'react-router-dom';
import "./style.css";

const Login = () => {
    // const navigate = useNavigate();
    return (
        <> 
        
        <div className='login-body flex align-center justify-center'> 
        <div className='flex flex-col justify-center align-center login-card '>
            <h1>welcome Back!</h1>
            <InputField
            container='mt-1 width-80'
            label={"Name"}
            type='text'
            placeholder='exapmle@gmail.com'
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
            label={"password"}
            type='password'
            placeholder='Password'
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
            <p>Create an acount? <Link className='link' to={"/signup"} >Sign UP</Link></p>
          
            </div>
            <Button
             label="Submit"
            // onClick={submit}
            />
        </div>
        </div>
        </>
    );
};

export default Login;