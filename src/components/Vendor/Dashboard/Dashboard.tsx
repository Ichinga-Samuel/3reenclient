import React, { useState, useEffect } from 'react';
import { DashboardStyled } from '@/components/Vendor/Dashboard/Dashboard.styled';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { PieChart } from '@/components/Vendor/Dashboard/Components/DashBoardPieChart';
import { VerticalBoardCharts } from '@/components/Vendor/Dashboard/Components/DashBoardCharts';
import HorizontalBarChart from '@/components/Vendor/Dashboard/Components/HorizontalBarChart';
import Metrics from '@/components/Vendor/Dashboard/Components/DashBoardMetrics';
import TopSellingProducts from '@/components/Vendor/Dashboard/Components/TopSellingProducts';
import { Row, Col, Select, notification } from 'antd';
import { ShoppingCartOutlined, TagOutlined, DollarCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { APP_BASE, VENDOR_PRODUCT } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
const { Option } = Select;
import axios from 'axios';

const Dashboard = () => {
    const [getRecord, setRecord] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [topProduct, setTopProduct] = useState([]);
    const token = getFromLocalStorage('token');

    const filterDataProduct = async (value: any) => {
        console.log('e', value);
        // const data = e.target.value;
        await axios
            .get(`${APP_BASE}${VENDOR_PRODUCT.filterDashboard(value)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const { data } = response;
                if (data.status === 'success') {
                    console.log('record', getRecord);
                    // setContent('Authentication Successful. Redirecting...');
                    setTopProduct({ ...data });
                }
            })
            .catch((err) => {
                console.log('record', getRecord);

                setIsProcessing(false);
                console.log(isProcessing);
                notification.error({
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 0,
                });
            });
    };

    useEffect(() => {
        const getDashboardData = async () => {
            await axios
                .get(`${APP_BASE}${VENDOR_PRODUCT.dashboardStat}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log('dash response', response);
                    const { data } = response;
                    if (data.status === 'success') {
                        console.log('record', getRecord);
                        // setContent('Authentication Successful. Redirecting...');
                        setRecord({ ...data });
                    }
                })
                .catch((err) => {
                    console.log('record', getRecord);

                    setIsProcessing(false);
                    console.log(isProcessing);
                    notification.error({
                        message: 'Error',
                        description: err.response.data.message,
                        duration: 0,
                    });
                });
        };
        getDashboardData();
        // return () => {
        //     getDashboardData();
        // };
    }, []);

    return (
        <VendorLayout pageTitle="Dashboard" crumbName="Dashboard" dashboardTitle="Dashboard">
            <DashboardStyled data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <div className="topMetricsContainer">
                    <Row justify="space-between" gutter={[16, 16]} style={{ marginRight: 0 }}>
                        <Col xs={12} xl={6} lg={6} style={{ paddingLeft: 0 }}>
                            <Metrics
                                icon={<ShoppingCartOutlined />}
                                metricCount={getRecord !== null ? getRecord.weeklyOrder : '0'}
                                metricName="Weekly new orders"
                            />
                        </Col>
                        <Col xs={12} xl={6} lg={6}>
                            <Metrics
                                icon={<TagOutlined />}
                                metricCount={getRecord !== null ? getRecord.productVisit : '0'}
                                metricName="Product Visit"
                            />
                        </Col>
                        <Col xs={12} xl={6} lg={6}>
                            <Metrics
                                icon={<EyeOutlined />}
                                metricCount={getRecord !== null ? getRecord.productSold : '0'}
                                metricName="Product Sold"
                            />
                        </Col>
                        <Col xs={12} xl={6} lg={6}>
                            <Metrics
                                icon={<DollarCircleOutlined />}
                                metricCount={getRecord !== null ? getRecord.crossEarning : '0'}
                                metricName="Gross Earnings"
                            />
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginRight: 0 }}>
                        <Col xl={8} style={{ paddingLeft: 0 }}>
                            <Col xs="24" className="chartIndicatorBox">
                                <div className="metricsFilter">
                                    <h3>Product sold</h3>
                                    <div>
                                        <Select defaultValue="Month" style={{ width: 100 }}>
                                            <Option value="Month">Month</Option>
                                            <Option value="All Time">All Time</Option>
                                            <Option value="Day">Day</Option>
                                            <Option value="Week">Week</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <VerticalBoardCharts />
                                </div>
                            </Col>
                            <Col xs="24" className="chartIndicatorBox">
                                <div className="metricsFilter">
                                    <h3>Ratings</h3>
                                    <div>
                                        <Select defaultValue="Month" style={{ width: 100 }}>
                                            <Option value="Month">Month</Option>
                                            <Option value="All Time">All Time</Option>
                                            <Option value="Day">Day</Option>
                                            <Option value="Week">Week</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <HorizontalBarChart />
                                </div>
                            </Col>
                        </Col>
                        <Col xl={8}>
                            <Col xs="24" className="chartIndicatorBox">
                                <div className="metricsFilter">
                                    <h3>Product sold</h3>
                                    <div>
                                        <Select defaultValue="Month" style={{ width: 100 }}>
                                            <Option value="Month">Month</Option>
                                            <Option value="All Time">All Time</Option>
                                            <Option value="Day">Day</Option>
                                            <Option value="Week">Week</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <VerticalBoardCharts />
                                </div>
                            </Col>
                            <Col xs="24" className="chartIndicatorBox">
                                <div className="metricsFilter">
                                    <h3>Top selling products</h3>
                                </div>
                                <PieChart />
                            </Col>
                        </Col>
                        <Col xl={8} style={{ paddingRight: 0 }}>
                            <div className="topSellingProducts heading">
                                <div className="metricsFilter">
                                    <h2>Top selling Products</h2>
                                    <Select defaultValue="Month" style={{ width: 100 }} onChange={filterDataProduct}>
                                        <Option value="month">Month</Option>
                                        <Option value="alltime">All Time</Option>
                                        <Option value="day">Day</Option>
                                        <Option value="week">Week</Option>
                                    </Select>
                                </div>
                            </div>
                            {topProduct.length > 0 ? (
                                topProduct.map((data) => {
                                    return (
                                        <div key={data.id}>
                                            <TopSellingProducts
                                                serialNo={data.serialNo}
                                                numberSold={data.numberSold}
                                                productName={data.productName}
                                                price={data.price}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="topSellingProducts">
                                    <span className="no-data">No Data Found</span>
                                </div>
                            )}
                        </Col>
                    </Row>
                </div>
            </DashboardStyled>
        </VendorLayout>
    );
};

export default Dashboard;
