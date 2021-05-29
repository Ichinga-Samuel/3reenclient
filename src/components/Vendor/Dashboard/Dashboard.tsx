import React from 'react';
import { DashboardStyled } from '@/components/Vendor/Dashboard/Dashboard.styled';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { PieChart } from '@/components/Vendor/VendorDashboard/DashBoardPieChart';
import { VerticalBoardCharts } from '@/components/Vendor/VendorDashboard/DashBoardCharts';
import HorizontalBarChart from '@/components/Vendor/VendorDashboard/HorizontalBarChart';
import Metrics from '@/components/Vendor/VendorDashboard/DashBoardMetrics';
import TopSellingProducts from '@/components/Vendor/VendorDashboard/TopSellingProducts';
import { Row, Col, Select } from 'antd';
import { ShoppingCartOutlined, TagOutlined, DollarCircleOutlined, EyeOutlined } from '@ant-design/icons';
const { Option } = Select;

const Dashboard = () => {
    return (
        <VendorLayout pageTitle="Dashboard" crumbName="Dashboard" dashboardTitle="Dashboard">
            <DashboardStyled>
                <div className="topMetricsContainer">
                    <Row justify="space-between" gutter={[16, 16]} style={{ marginRight: 0 }}>
                        <Col xs={12} xl={6} lg={6} style={{ paddingLeft: 0 }}>
                            <Metrics icon={<ShoppingCartOutlined />} metricCount="50" metricName="Weekly new orders" />
                        </Col>
                        <Col xs={12} xl={6} lg={6}>
                            <Metrics icon={<TagOutlined />} metricCount="2652" metricName="Product Visit" />
                        </Col>
                        <Col xs={12} xl={6} lg={6}>
                            <Metrics icon={<EyeOutlined />} metricCount="428" metricName="Product Sold" />
                        </Col>
                        <Col xs={12} xl={6} lg={6}>
                            <Metrics
                                icon={<DollarCircleOutlined />}
                                metricCount="1,345,222"
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
                                    <Select defaultValue="Month" style={{ width: 100 }}>
                                        <Option value="Month">Month</Option>
                                        <Option value="All Time">All Time</Option>
                                        <Option value="Day">Day</Option>
                                        <Option value="Week">Week</Option>
                                    </Select>
                                </div>
                            </div>
                            <TopSellingProducts
                                serialNo={1}
                                numberSold={42}
                                productName="Red Bluetooth Player"
                                price={2500}
                            />
                            <TopSellingProducts
                                serialNo={2}
                                numberSold={67}
                                productName="Red Bluetooth Player"
                                price={2500}
                            />
                            <TopSellingProducts
                                serialNo={3}
                                numberSold={104}
                                productName="Red Bluetooth Player"
                                price={2500}
                            />
                        </Col>
                    </Row>
                </div>
            </DashboardStyled>
        </VendorLayout>
    );
};

export default Dashboard;
