import React from 'react';
import { DashboardStyled } from '@/components/Vendor/Dashboard/Dashboard.styled';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { StyledContainer, StyledContent } from '@/components/Vendor/VendorDashboard/VendorDashboard.styled';
import { PieChart } from '@/components/Vendor/VendorDashboard/DashBoardPieChart';
import { VerticalBoardCharts } from '@/components/Vendor/VendorDashboard/DashBoardCharts';
import HorizontalBarChart from '@/components/Vendor/VendorDashboard/HorizontalBarChart';
import Select from '@/components/Vendor/VendorDashboard/Select';
import Metrics from '@/components/Vendor/VendorDashboard/DashBoardMetrics';
import TopSellingProducts from '@/components/Vendor/VendorDashboard/TopSellingProducts';
// import { Row, Col } from 'reactstrap';
import { Row, Col } from 'antd';

const Dashboard = () => {
    // const [movedIn, setMovedIn] = useState(false);
    return (
        <VendorLayout pageTitle="Dashboard" crumbName="Dashboard" dashboardTitle="Dashboard">
            <DashboardStyled>
                <StyledContainer>
                    <StyledContent>
                        <div className="topMetricsContainer">
                            <Row justify="space-between" gutter={[16, 16]}>
                                <Col xs={12} xl={6} lg={6}>
                                    <Metrics />
                                </Col>
                                <Col xs={12} xl={6} lg={6}>
                                    <Metrics />
                                </Col>
                                <Col xs={12} xl={6} lg={6}>
                                    <Metrics />
                                </Col>
                                <Col xs={12} xl={6} lg={6}>
                                    <Metrics />
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col xl={8}>
                                    <Row className="bolo">
                                        <Col xs="24" className="chartIndicatorBox">
                                            <div className="metricsFilter">
                                                <h3>Product sold</h3>
                                                <div>
                                                    <Select />
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
                                                    <Select />
                                                </div>
                                            </div>
                                            <div>
                                                <HorizontalBarChart />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={8}>
                                    <Col xs="24" className="chartIndicatorBox">
                                        <div className="metricsFilter">
                                            <h3>Product sold</h3>
                                            <div>
                                                <Select />
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
                                <Col xl={8}>
                                    <div className="topSellingProducts heading">
                                        <div className="metricsFilter">
                                            <h2>Top selling Products</h2>
                                            <Select />
                                        </div>
                                    </div>
                                    <TopSellingProducts />
                                    <TopSellingProducts />
                                    <TopSellingProducts />
                                </Col>
                            </Row>
                        </div>

                        <div></div>

                        <div className="indicatorContainer"></div>
                    </StyledContent>
                </StyledContainer>
            </DashboardStyled>
        </VendorLayout>
    );
};

export default Dashboard;
