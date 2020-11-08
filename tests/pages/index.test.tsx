import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@/pages/index';

describe('HomePage', () => {
    it('should render HomePage component correctly', async () => {
        render(<HomePage />);
        expect(screen.getByRole('heading', { name: /Delivering Constant Happiness/i })).toBeInTheDocument();
    });
});
