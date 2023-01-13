import React from 'react';
import Login from './login';


const Home = ({socket}) => {
    return (
        <div className="container">
            <Login socket={socket}/>
        </div>
    )
}

export default Home