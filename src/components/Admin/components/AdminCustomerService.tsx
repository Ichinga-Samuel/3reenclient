import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { InventoryContainer } from '@/components/Admin/styles/AdminStyle.styled';
import { Col, Row } from 'antd';
import CustomerVendors from './customerservice/CustomerVendors';
import CustomerUsers from './customerservice/CustomerUsers';
import AdminMessages from './customerservice/AdminMessages';
const AdminCustomerService = () => {
    const title = 'Customer Service';
    const [active, setactive] = useState(false);
    const [catactive, setcatactive] = useState(false);
    const [msgactive, setmsgactive] = useState(false);
    useEffect(() => {
        setactive(true);
    }, []);
    const changeCategory = (tab) => {
        if (tab === 'all') {
            setactive(true);
            setcatactive(false);
        } else if (tab === 'cat') {
            setcatactive(true);
            setactive(false);
        } else if (tab === 'msg') {
            setactive(false);
            setcatactive(false);
            setmsgactive(true);
        }
    };

    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <InventoryContainer>
                <Row gutter={28} justify="space-between">
                    <Col xs={24} xl={12} lg={12}>
                        <Row gutter={28}>
                            <Col>
                                <div
                                    onClick={() => changeCategory('all')}
                                    onKeyDown={() => changeCategory('all')}
                                    role="button"
                                    tabIndex={0}
                                    className={`catops ${active ? 'active' : ''}`}
                                >
                                    Vendor Details
                                </div>
                            </Col>
                            <Col>
                                <div
                                    onClick={() => changeCategory('cat')}
                                    onKeyDown={() => changeCategory('cat')}
                                    role="button"
                                    tabIndex={0}
                                    className={`catops ${catactive ? 'active' : ''}`}
                                >
                                    Users Details
                                </div>
                            </Col>
                            <Col>
                                <div
                                    onClick={() => changeCategory('msg')}
                                    onKeyDown={() => changeCategory('msg')}
                                    role="button"
                                    tabIndex={0}
                                    className={`catops ${msgactive ? 'active' : ''}`}
                                >
                                    Messages
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ marginTop: '15px' }} />
                {active ? (
                    <>
                        <CustomerVendors />
                    </>
                ) : catactive ? (
                    <>
                        <CustomerUsers />
                    </>
                ) : msgactive ? (
                    <>
                        <AdminMessages />
                    </>
                ) : (
                    ''
                )}
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminCustomerService;
