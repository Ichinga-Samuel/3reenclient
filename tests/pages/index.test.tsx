import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/index';

describe('HomePage', () => {
    it('renders HomePage component correctly', () => {
        render(<HomePage />);
        expect(
            screen.getByRole('heading', { name: /Welcome to 3reen e-commerce app - 3reenshop/i }),
        ).toBeInTheDocument();
    });
});
