import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from '../../pages/login';
import Chatbar from '../chatbar'
import Chatusers from '../chatusers';
import MainChat from '../main-chat';
import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import App from '../../App';

// jest.mock('socket.io-client');

// describe('Testing connection', () => {
//     let socket;
  
//     beforeEach(() => {
//       socket = new MockedSocket();
//       socketIOClient.mockReturnValue(socket);
//     });
  
//     afterEach(() => {
//       jest.restoreAllMocks();
//     });

//     it('should dispatch connect event', () => {

//         const wrapper = (
//           <MemoryRouter>
//             <App />
//           </MemoryRouter>
//         );
    
//         expect(socketIOClient.connect).toHaveBeenCalled();
//       });
// })

test('renders chat bar', () => {
    render(<Chatbar/>);
    const chatBar = screen.getByTestId("chatbar");
    expect(chatBar).toBeInTheDocument();
})

test ('chat message appears in body', () => {
    render(<Chatbar/>);
    const inputMsg = screen.getByPlaceholderText(/Message away.../i);
    fireEvent.change(inputMsg, {target: {value: "happy test message"}})
    expect(inputMsg).toBeInTheDocument();
})

// test ('login user', () => {
//     render(
//     <MemoryRouter>
//         <Login/>
//     </MemoryRouter>);
//     const loginName = screen.getByTestId("login-name");
//     const loginEmail = screen.getByTestId("login-email");
//     const loginPassword = screen.getByTestId("login-password");
//     const submitBtn = screen.getByTestId("sub-btn");
//     fireEvent.change(loginName, {target: {value: "test"}});
//     fireEvent.change(loginEmail, {target: {value: "test123@gmail.com"}});
//     fireEvent.change(loginPassword, {target: {value: "test123"}});
//     fireEvent.click(submitBtn);
//     render (
//         <MemoryRouter>
//             <MainChat/>
//         </MemoryRouter>
//     )
//     const mainChat = screen.getByTestId("main-chat");
//     expect(mainChat).toBeInTheDocument();


    
// })

// test('logout user and redirects to login page', async () => {
//     render(
//         <MemoryRouter>
//             <Chatusers/>
//         </MemoryRouter>
//         );
//     const user = screen.getByTestId("user");
//     expect(user).toBeInTheDocument();
//     const leaveBtn = screen.getByTestId("leave-btn");
//     fireEvent.click(leaveBtn);
//     render(
//     <MemoryRouter>
//         <Login/>
//     </MemoryRouter>)
//     const login = screen.getByTestId("login");
//     expect(login).toBeInTheDocument();

// })