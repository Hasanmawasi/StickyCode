import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import './style.css'
const Tag = ({tagName,deleteFunc}) => {
    return (
        <div>
            <div className="container-tag flex flex-row justify-content align-center">
                <div className="tagname">
                    {tagName}
                </div>
                <div className="icon">
                   <Icon className='deleteicon' icon="material-symbols:delete-outline" width="24" height="24" onClick={deleteFunc} />
                   </div>
                </div>
            </div>
    );
};

export default Tag;