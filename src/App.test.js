// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LlmRouter title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LlmRouter/i);
    expect(titleElement).toBeInTheDocument();
});
