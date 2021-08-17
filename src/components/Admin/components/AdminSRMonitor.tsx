import React, { useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { Button, Col, Input, notification, Row, Spin } from 'antd';
import { GeneralContainer, LogisticsCard } from '../styles/AdminStyle.styled';
import BeautyStars from 'beauty-stars';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import SRMonitorGraph from '@/components/Admin/components/srmonitor/SRMonitorGraph';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { ADMIN, APP_BASE } from '@/utils/ApiList';
import axios from 'axios';
import { useEffect } from 'react';

const AdminSRMonitor = () => {
    const title = 'SR Monitor';
    const [viewdetail, setviewDetail] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [salesRep, getAllSalesReps] = useState([]);
    const [fetching, setFetching] = useState(false);

    const token = getFromLocalStorage('admintoken');
    const fetchSalesRep = async () => {
        setFetching(true);
        try {
            const response = await axios.get(`${APP_BASE}${ADMIN.getSalesRep}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const {data} = response.data
            console.log(data);
            getAllSalesReps(data)
            setFetching(false);
            setTimeout(() => {
                notification.destroy();
            }, 200);
        } catch (error) {
            console.log('error', error.response);
            notification.error({
                message: 'Category Error',
                description: error?.response?.data?.message,
                duration: 10,
            });
        }
    };
    useEffect(() => {
        fetchSalesRep();
    }, []);
    const viewMore = (x) => {
        setCurrentIndex(x.id);
        setviewDetail(!viewdetail);
        if (currentIndex !== x.id) {
            setviewDetail(false);
        }
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
            {
                fetching ? <div className="fetchingloading">
                <Spin />
                <small>Fetching Logistic Companies...</small>
            </div> : salesRep?.map((res) => {
                return (
                    <>
                        <LogisticsCard key={res._id} height={'auto'}>
                            <Row justify="space-between" align="middle">
                                <Col xs={14} xl={14} lg={14}>
                                    <div style={{ padding: '10px', display: 'flex' }}>
                                        <div className="sr-image" />
                                        <div>
                                            <p style={{ marginBottom: '5px' }}>
                                                <strong>{res.fullName}</strong> | {res.address}
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
            })
            }
        </DefaultLayout>
    );
};

export default AdminSRMonitor;
