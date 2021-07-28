import React from 'react';
import SuperDefaultLayout from '@/components/SuperAdmin/Layout/SuperDefaultLayout';
import { Col, Row } from 'antd';

const AllAdminUsers = () => {
    return (
        <SuperDefaultLayout browserTitle="All Admin Users" breadTitle="All Admin Users">
            <Row gutter={28}>
                <Col>3</Col>
            </Row>
        </SuperDefaultLayout>
    );
};

export default AllAdminUsers;
