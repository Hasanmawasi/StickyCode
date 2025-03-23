import React from 'react';
import { Icon } from '@iconify/react';

import "./style.css";
const Card = ({language , code ,tags=[], deleteFunc , togglefavorite, favorite=false}) => {
    // const tags = [{
    //     tagId:1 , tagName: "func"
    // }]
    
    return (
        <div>
             <div className='card'>
                            <div className='top-sec'> 
                                <div className="language">{language}</div>
                                <div>
                                <Icon className={`saveicon ${favorite?"favorite":""}`} icon="material-symbols:bookmark-heart-outline-rounded" width="24" height="24" onClick={togglefavorite} />
                                <Icon className='deleteicon' icon="material-symbols:delete-outline" width="24" height="24" onClick={deleteFunc} />                                </div>
                               
                            </div>
                            <div className="code">{code}
                            </div>
                            <ul className='tags'>
                                {
                                    tags.map((tag)=>{
                                       return <li key={tag.id+tag.name} id={tag.id}>{tag.name}</li>
                                    })
                                }
                                
                                
                            </ul>
                    </div>
        </div>
    );
};

export default Card;