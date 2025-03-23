import React from 'react';
import NavBar from '../../components/NavBar';
import "./style.css"
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
const Home = () => {
    return (
        <div>
            <div className="body">
            <SearchBar />
                <div className="container">
                   <Card
                   code={"helo the code is here hasdf asdf asf saf"}
                   language={"Java"}
                   tags={[{tagId:1 , tagName: "func"},{tagId:2 , tagName: "func"}]}
                   />
                </div>
                
            </div>
                
            
        </div>
    );
};

export default Home;