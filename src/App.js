import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainChat from './components/main-chat';
import Home from './pages/Home'
import socketIO, { Socket } from 'socket.io-client';
import Register from './pages/signup';
import Login from './pages/login';
import Profile from './pages/profile';

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home socket={socket}/>}></Route>
          <Route path="/register" element={<Register socket={socket}/>}/>
          <Route path="/chat" element={<MainChat socket={socket}/>}/>
          <Route path="/profile" element={<Profile socket={socket}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
