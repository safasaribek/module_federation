import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from '../App.tsx';
import '@testing-library/jest-dom';


jest.mock('products/ProductList', () => {
    return () => <div>ProductList</div>;
});

jest.mock('basket/Basket', () => {
    return () => <div>Basket</div>;
});

describe('App Component', () => {
    it('renders Host Application heading', async () => {
        await act(async () => {
            render(<App />);
        });
        const heading = await screen.findByText(/Host Application/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the shopping cart button', async () => {
        await act(async () => {
            render(<App />);
        });
        const button = screen.getByRole('button', { name: /shopping-cart/i });

        expect(button).toBeInTheDocument();
    });
});
