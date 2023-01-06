import { render, screen, fireEvent } from '@testing-library/react'
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