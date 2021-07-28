import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { APP_BASE } from '@/utils/ApiList';
import axios from 'axios';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { InventoryContainer, LogisticsCard } from '@/components/Admin/styles/AdminStyle.styled';
import { Button, Col, Input, Row } from 'antd';
import BeautyStars from 'beauty-stars';

const AdminLogisticCompany = () => {
    const title = 'Logistics Company';
    const [active, setactive] = useState(false);
    const [catactive, setcatactive] = useState(false);

    const changeCategory = (tab) => {
        if (tab === 'all') {
            setactive(true);
            setcatactive(false);
        } else if (tab === 'cat') {
            setcatactive(true);
            setactive(false);
        }
    };

    const logData = [
        {
            id: 12,
            companyName: 'GIG Logistics',
            address: 'Plot 300, Gbagada Avenue, Gbagada',
            rating: 5,
            state: 'Lagos',
            selected: true,
        },
        {
            id: 14,
            companyName: 'FAX Express',
            address: 'No 100, Ojo Ayo Avenue, Surulere',
            rating: 4,
            state: 'Lagos',
            selected: false,
        },
        {
            id: 42,
            companyName: 'DREP Express',
            address: 'Plot 100, Ison Eleran Avenue, Ojoo',
            state: 'Oyo',
            rating: 3,
            selected: false,
        },
    ];

    useEffect(() => {
        setactive(true);
    }, []);
    const [buttonText, setButtonText] = useState('Tap To Select');
    const [getCompany, setCompany] = useState([]);

    console.log(getCompany);
    console.log(buttonText);

    const token = getFromLocalStorage('admintoken');

    const changeText = (text) => setButtonText(text);
    useEffect(() => {
        const getLogCompany = async () => {
            try {
                const response = await axios.get(`${APP_BASE}/users/company`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCompany(response.data.users);
                console.log(response);
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        };
        getLogCompany();
    }, [token]);

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
                                    All
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
                                    Categories
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} xl={10} lg={10}>
                        <div className="searchform">
                            <Input placeholder="Search 'Logistics Company'" />
                            <Button type="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
                <div style={{ marginTop: '15px' }} />
                {logData?.map((res) => {
                    return (
                        <LogisticsCard key={res.id}>
                            <Row justify="space-between">
                                <Col xs={14} xl={6} lg={4}>
                                    <div style={{ padding: '10px' }}>
                                        <p style={{ marginBottom: '5px' }}>
                                            <strong>{res.companyName}</strong> | {res.address}
                                        </p>
                                        <span>{res.state}</span>
                                    </div>
                                </Col>
                                <Col xs={6} xl={6} lg={4}>
                                    <div style={{ padding: '10px' }}>
                                        <p style={{ marginBottom: '15px' }}>Rating/Review</p>
                                        <BeautyStars
                                            value={res.rating}
                                            activeColor="#ffaf38"
                                            size="14px"
                                            inactiveColor="#E2DDDD"
                                            maxStars={5}
                                            gap={5}
                                        />
                                    </div>
                                </Col>
                                <Col xs={3} xl={3} lg={3}>
                                    <div
                                        onClick={() => changeText('Selected Logistic Company')}
                                        onKeyDown={changeText}
                                        role="button"
                                        tabIndex={0}
                                        className={`selectedCompany ${res.selected ? 'selected' : ''}`}
                                    >
                                        {res.selected ? `Selected Logistic Company` : 'Tap To Select'}
                                    </div>
                                </Col>
                            </Row>
                        </LogisticsCard>
                    );
                })}
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminLogisticCompany;
