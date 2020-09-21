import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../index';

describe('<App />', () => {
    it('Renders <HomePage /> component correctly', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText(/Welcome to 3reen e-commerce app - 3reenshop/i)).toBeInTheDocument();
    });

    it('renders HomePage component correctly', () => {
        render(<HomePage />);
        expect(screen.getByText('Welcome to 3reen e-commerce app - 3reenshop')).toBeInTheDocument();
    });
});
