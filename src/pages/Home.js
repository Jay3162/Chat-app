import React from 'react';
import DeskLogin from './login-desk';

const Home = ({socket}) => {
    console.log(socket.on)
    return (
        <div className="container">
            {/* <header>Header</header> */}
            <DeskLogin socket={socket}/>
        </div>
    )
}

export default Home