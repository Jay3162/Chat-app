import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from '../../pages/login';
import Chatbar from '../chatbar'
import Chatusers from '../chatusers';

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

test('logout user and redirects to login page', async () => {
    render(
        <MemoryRouter>
            <Chatusers/>
        </MemoryRouter>
        );
    const user = screen.getByTestId("user");
    expect(user).toBeInTheDocument();
    const leaveBtn = screen.getByTestId("leave-btn");
    fireEvent.click(leaveBtn);
    render(
    <MemoryRouter>
        <Login/>
    </MemoryRouter>)
    const login = screen.getByTestId("login");
    expect(login).toBeInTheDocument();

})