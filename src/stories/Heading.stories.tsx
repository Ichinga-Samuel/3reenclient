import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Heading } from '@/components/Heading';

export default { title: 'Heading', component: Heading };

export const H1 = () => <Heading as="h1">{text('h1', 'h1')}</Heading>;
export const H2 = () => <Heading as="h2">{text('h2', 'h2')}</Heading>;
export const H3 = () => <Heading as="h3">{text('h3', 'h3')}</Heading>;
export const H4 = () => <Heading as="h4">{text('h4', 'h4')}</Heading>;
export const H5 = () => <Heading as="h5">{text('h5', 'h5')}</Heading>;
export const H6 = () => <Heading as="h6">{text('h6', 'h6')}</Heading>;
