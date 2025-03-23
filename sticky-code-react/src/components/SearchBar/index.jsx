import React from 'react';
import InputField from '../Input';
import { Icon } from '@iconify/react/dist/iconify.js';
import "./style.css";
const SearchBar = ({value , onChange, onClick}) => {
    return (
        <div>
            <div className="searchContainer flex flex-row justify-center align-center mt-3">
                <InputField 
                style={'search-input'}
                type='text'
                placeholder={"Search For Codes"}
                value={value}
                onChange={onChange}
                />
                <div className="search-icon">
                   <Icon className='icon'  icon="material-symbols:search" width="24" height="24" onClick={onClick} />
                </div>

            </div>
        </div>
    );
};

export default SearchBar;