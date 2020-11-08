import '../src/assets/styles/scss/main.scss';
import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(jsxDecorator);
addDecorator(withKnobs);
