import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { InventoryContainer } from '@/components/Admin/styles/AdminStyle.styled';
import { Col, notification, Row } from 'antd';
import CustomerVendors from './customerservice/CustomerVendors';
import CustomerUsers from './customerservice/CustomerUsers';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';
import { ColumnsType } from 'antd/lib/table';
const AdminCustomerService = () => {
    const title = 'Customer Service';
    const [active, setactive] = useState(false);
    const [catactive, setcatactive] = useState(false);
    const [fetching, setfetching] = useState(false);
    const [userRecord, setuserRecord] = useState([]);
    const [vendorRecord, setvendorRecord] = useState([]);

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

        }
    };

    interface customerColumn {
        id: number | string;
        fullName: string;
        phoneNumber: string;
        email: string;
    }

    const columns: ColumnsType<customerColumn> = [
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },

        {
            title: 'Email Address',
            dataIndex: 'email',
            render: (text) => (
                <>
                    <a href={`mailto:${text}`}>{text}</a>
                </>
            ),
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            render: (text) => (
                <>
                    <a href={`tel:${text}`}>{text}</a>
                </>
            ),
        },
    ];

    useEffect(() => {
        const fetchUserActions = async () => {
            setfetching(true);
            try {
                const response = await axios.get(`${APP_BASE}/users/allUsers`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { All_Users } = response?.data;
                const vendorOnly = All_Users.filter((res) => res.role === 'vendor');
                const userOnly = All_Users.filter((res) => res.role === 'user');
                setvendorRecord(vendorOnly);
                setuserRecord(userOnly);
                setTimeout(() => {
                    setfetching(false);
                }, 200);
            } catch (err) {
                console.log('error', err.response);
                notification.error({
                    message: 'Error',
                    description: err?.response?.data?.message,
                    duration: 15,
                });
                setTimeout(() => {
                    setfetching(false);
                }, 200);
            }
        };
        fetchUserActions();
    }, []);

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
                        </Row>
                    </Col>
                </Row>
                <div style={{ marginTop: '15px' }} />
                {active ? (
                    <>
                        <CustomerVendors fetching={fetching} columns={columns} vendorRecord={vendorRecord} />
                    </>
                ) : (
                    <div>
                        <CustomerUsers fetching={fetching} columns={columns} userRecord={userRecord} />
                    </div>
                )}
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminCustomerService;
