import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../index';

describe('<App />', () => {
    it('renders HomePage component correctly', () => {
        render(<HomePage />);
        expect(
            screen.getByRole('heading', { name: /Welcome to 3reen e-commerce app - 3reenshop/i }),
        ).toBeInTheDocument();
    });
});
