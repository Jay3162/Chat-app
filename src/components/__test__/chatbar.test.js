import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from '../../pages/login';
import Chatbar from '../chatbar'


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


    
