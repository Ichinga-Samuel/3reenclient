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

    useEffect(() => {
        setactive(true);
    }, []);
    const [buttonText, setButtonText] = useState('Tap To Select');
    const [getCompany, setCompany] = useState([]);

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
                <LogisticsCard>
                    <Row justify="space-between">
                        <Col xs={14} xl={6} lg={4}>
                            <div style={{ padding: '10px' }}>
                                <p>
                                    <strong>Full Name of Logistics Company</strong> | Office Address
                                </p>
                                <span>State | Location</span>
                            </div>
                        </Col>
                        <Col xs={6} xl={6} lg={4}>
                            <div style={{ padding: '10px' }}>
                                <span>Rating/Review</span>
                                <BeautyStars
                                    value={5}
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
                                className="selectedCompany selected"
                            >
                                Selected <br /> Logistic Company
                            </div>
                        </Col>
                    </Row>
                </LogisticsCard>
                <LogisticsCard>
                    <Row justify="space-between">
                        <Col xs={14} xl={6} lg={4}>
                            <div style={{ padding: '10px' }}>
                                <p>
                                    <strong>Full Name of Logistics Company</strong> | Office Address
                                </p>
                                <span>State | Location</span>
                            </div>
                        </Col>
                        <Col xs={6} xl={6} lg={4}>
                            <div style={{ padding: '10px' }}>
                                <p>Rating/Review</p>
                                <BeautyStars
                                    value={5}
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
                                onClick={() => changeText('Tap to Select Company')}
                                onKeyDown={changeText}
                                role="button"
                                tabIndex={0}
                                className="selectedCompany"
                            >
                                Tap to Select Company
                            </div>
                        </Col>
                    </Row>
                </LogisticsCard>
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminLogisticCompany;
