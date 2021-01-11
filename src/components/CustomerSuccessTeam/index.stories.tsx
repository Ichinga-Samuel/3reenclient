/* eslint-disable prettier/prettier */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import { CustomerSuccessTeam } from '@/components/CustomerSuccessTeam/CustomSuccessTeam';

export default { title: 'CustomerSuccessTeam', component: CustomerSuccessTeam, decorators: [withKnobs] };

// export const withText = () => <Button title={text('Title', '')} onClick={action('clicked')} />;

// export const withChildren = () => <Button onClick={action('clicked')}>{text('Title', 'Submit')}</Button>;

// export const withDisabledButton = () => (
//     <Button disabled={boolean('Disabled', false)}>{text('Title', 'Sign Up')}</Button>
// );

export const app = () => {
    return (
        <>
            <CustomerSuccessTeam />
        </>
    );
};
