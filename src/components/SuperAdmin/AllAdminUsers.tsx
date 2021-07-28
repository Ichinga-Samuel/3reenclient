import React from 'react';
import SuperDefaultLayout from '@/components/SuperAdmin/Layout/SuperDefaultLayout';
import { Button, Col, Input, Row, Table } from 'antd';
import { GeneralContainer } from '@/components/Admin/styles/AdminStyle.styled';

const AllAdminUsers = () => {
    return (
        <SuperDefaultLayout browserTitle="All Admin Users" breadTitle="All Admin Users">
            <Row gutter={28} justify="space-between">
                <Col xs={24} xl={12} lg={12}>
                    <Row gutter={28}>
                        <Col xs={10} xl={8} lg={8}>
                            <Button type="primary" block>
                                Add New Admin
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} xl={10} lg={10}>
                    <div style={{ display: 'flex' }}>
                        <Input placeholder="Search 'Admin Users'" style={{ marginRight: '5px' }} />
                        <Button type="primary">Search</Button>
                    </div>
                </Col>
            </Row>
            <GeneralContainer style={{ marginTop: '15px' }}>
                <Table />
            </GeneralContainer>
        </SuperDefaultLayout>
    );
};

export default AllAdminUsers;
