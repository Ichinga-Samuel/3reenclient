import React, { useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { Button, Col, Input, Row } from 'antd';
import { GeneralContainer, LogisticsCard } from '../styles/AdminStyle.styled';
import BeautyStars from 'beauty-stars';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import SRMonitorGraph from '@/components/Admin/components/srmonitor/SRMonitorGraph';

const AdminSRMonitor = () => {
    const title = 'SR Monitor';
    const [viewdetail, setviewDetail] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
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

    const viewMore = (x) => {
        console.log('ss', x);
        setCurrentIndex(x.id);
        setviewDetail(!viewdetail);
        if (currentIndex !== x.id) {
            setviewDetail(false);
        }
        // setviewDetail(!viewdetail);
    };

    return (
        <DefaultLayout browserTitle={title} breadTitle="Sales Representatives">
            <GeneralContainer>
                <Row gutter={28} justify="end">
                    <Col xs={24} xl={10} lg={10}>
                        <div className="searchform">
                            <Input placeholder="Search 'Sale Representative'" />
                            <Button type="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
            </GeneralContainer>
            <div style={{ marginTop: '15px' }} />
            {logData?.map((res) => {
                return (
                    <>
                        <LogisticsCard key={res.id} height={'auto'}>
                            <Row justify="space-between" align="middle">
                                <Col xs={14} xl={14} lg={14}>
                                    <div style={{ padding: '10px', display: 'flex' }}>
                                        <div className="sr-image" />
                                        <div>
                                            <p style={{ marginBottom: '5px' }}>
                                                <strong>{res.companyName}</strong> | {res.address}
                                            </p>
                                            <span>{res.state}</span>
                                        </div>
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
                                        onClick={() => viewMore(res)}
                                        onKeyDown={() => viewMore(res)}
                                        role="button"
                                        tabIndex={0}
                                        className="morebtn"
                                    >
                                        more{' '}
                                        {currentIndex === res.id && viewdetail ? (
                                            <CaretDownOutlined />
                                        ) : (
                                            <CaretUpOutlined />
                                        )}
                                    </div>
                                </Col>
                            </Row>

                            <div className={`moredetails ${viewdetail && currentIndex === res.id ? 'showmore' : ''}`}>
                                <SRMonitorGraph salename={res.companyName} />
                            </div>
                        </LogisticsCard>
                    </>
                );
            })}
        </DefaultLayout>
    );
};

export default AdminSRMonitor;
