import React from 'react';
import Reviews from '@/components/Vendor/Reviews/Reviews';
import Dashboard from '@/components/Vendor/Dashboard/Dashboard';
import { withKnobs } from '@storybook/addon-knobs';
import Orders from '@/pages/vendor/orders/index';
import Inventory from '@/pages/vendor/inventory';
import CustomerServices from '@/pages/vendor/customerservices';

export default {
    title: 'Vendor',
    component: { decorators: [withKnobs] },
};

export const dashboard = () => {
    return <Dashboard />;
};

export const reviews = () => {
    return <Reviews />;
};
export const orders = () => {
    return <Orders />;
};

export const inventory = () => {
    return <Inventory />;
};

export const customerservices = () => {
    return <CustomerServices />;
};
