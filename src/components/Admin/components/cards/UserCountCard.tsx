import React from 'react';
import { DashboardCardHolder } from '../../styles/AdminStyle.styled';
import { Row, Col } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const UserCountCard = ({ count, title }) => {
    const titleU = title.includes('Cancelled');
    return (
        <DashboardCardHolder>
            <Row gutter={24} align="middle">
                <Col xs={24} xl={24} lg={24}>
                    <div className="content">
                        <p>{title}</p>
                        <strong>
                            {titleU ? CURRENCY : ''}
                            {titleU ? formatAmount(count) : count || '0'}
                        </strong>
                    </div>
                </Col>
            </Row>
        </DashboardCardHolder>
    );
};

export default UserCountCard;
