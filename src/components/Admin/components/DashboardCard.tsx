import React from 'react';
import { DashboardCardHolder } from '../styles/AdminStyle.styled';
import { Row, Col } from 'antd';

const DashboardCard = ({ icon, count, title }) => {
    return (
        <DashboardCardHolder>
            <Row gutter={24} align="middle">
                <Col xs={12} xl={12} lg={12}>
                    <div className="iconHolder">
                        <span>{icon}</span>
                    </div>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <div className="content">
                        <p>{title}</p>
                        <strong>{count || '0'}</strong>
                    </div>
                </Col>
            </Row>
        </DashboardCardHolder>
    );
};

export default DashboardCard;
