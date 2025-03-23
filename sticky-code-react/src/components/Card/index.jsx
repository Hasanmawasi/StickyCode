import React from 'react';
import { Icon } from '@iconify/react';

import "./style.css";
const Card = ({language , code ,tags=[]}) => {
    // const tags = [{
    //     tagId:1 , tagName: "func"
    // }]
    return (
        <div>
             <div className='card'>
                            <div className='top-sec'> 
                                <div className="language">{language}</div>
                                <Icon className='saveicon' icon="material-symbols:bookmark-heart-outline-rounded" width="24" height="24" />
                            </div>
                            <div className="code">{code}
                            </div>
                            <ul className='tags'>
                                {
                                    tags.map((tag)=>{
                                       return <li key={tag.tagId} id={tag.tagId}>{tag.tagName}</li>
                                    })
                                }
                                
                                
                            </ul>
                    </div>
        </div>
    );
};

export default Card;