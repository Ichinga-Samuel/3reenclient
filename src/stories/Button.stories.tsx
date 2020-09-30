import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '@/components/Button';

export default { title: 'Button', component: Button, decorators: [withKnobs] };

export const withText = () => <Button title={text('Button title', 'Login')} onClick={action('button-click')} />;

export const withChildren = () => <Button>Hello World</Button>;

export const withEmoji = () => <Button title={text('Button title', '😀 😎 👍 💯')} onClick={action('button-click')} />;
