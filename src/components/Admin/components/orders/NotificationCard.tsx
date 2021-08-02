import React from 'react';
import { NotificationCardContainer } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';

const NotificationCard = ({ style, status }) => {
    return (
        <NotificationCardContainer style={style || { background: 'var(--secondary-color)' }}>
            <p>{status}</p>
            <div className="timedetail">
                <span>December 31, 2020</span>
                <span>4:00 AM</span>
            </div>
        </NotificationCardContainer>
    );
};

export default NotificationCard;
