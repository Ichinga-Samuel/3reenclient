import React from 'react';
import { DashboardCardHolder } from '../../styles/AdminStyle.styled';
import { Row, Col } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const AuditCountCard = ({ icon, count, title }) => {
    return (
        <DashboardCardHolder>
            <Row gutter={24} align="middle" justify="space-between">
                <Col>
                    <p style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{title}</p>
                </Col>
                <Col>{icon}</Col>
            </Row>
            <Row gutter={24} align="middle">
                <Col xs={24} xl={24} lg={24}>
                    <div className="content">
                        <strong>
                            {CURRENCY}
                            {formatAmount(count)}
                        </strong>
                    </div>
                </Col>
            </Row>
        </DashboardCardHolder>
    );
};

export default AuditCountCard;
