/* eslint-disable prettier/prettier */
import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '@/components/Button';

export default { title: 'Button', component: Button, decorators: [withKnobs] };

export const withText = () => <Button title={text('Title', 'Login')} onClick={action('clicked')} />;

export const withChildren = () => <Button onClick={action('clicked')}>{text('Title', 'Submit')}</Button>;

export const withDisabledButton = () => (
    <Button disabled={boolean('Disabled', false)}>{text('Title', 'Sign Up')}</Button>
);
