import React from 'react';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import { CountHolder } from '@/components/Admin/styles/AdminStyle.styled';

const PaidCountCard = ({ title, amount }) => {
    return (
        <CountHolder>
            <h3>{title}</h3>
            <span>
                {CURRENCY} {formatAmount(amount)}
            </span>
        </CountHolder>
    );
};

export default PaidCountCard;
