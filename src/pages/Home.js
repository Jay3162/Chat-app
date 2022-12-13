import React from 'react';
import DeskLogin from './login-desk';

const Home = ({socket}) => {
    return (
        <div className="container">
            {/* <header>Header</header> */}
            <DeskLogin socket={socket}/>
        </div>
    )
}

export default Home