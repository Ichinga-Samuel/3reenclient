import React, { useState } from 'react';
import { VendorStyle, StyledContainer, StyledContent } from './VendorDashboard.styled';
import VendorDashBoardHeader from './VendorDashBoardHeader';
import { PieChart } from './DashBoardPieChart';
import { VerticalBoardCharts } from './DashBoardCharts';
import HorizontalBarChart from './HorizontalBarChart';
import Select from './Select';
import Metrics from './DashBoardMetrics';
import TopSellingProducts from './TopSellingProducts';

import { Row, Col } from 'reactstrap';
import SideBar from './SideBar';

const Dashboard = () => {
    const [movedIn, setMovedIn] = useState(false);
    return (
        <div>
            <VendorDashBoardHeader movedIn={movedIn} setMovedIn={setMovedIn} />
            <StyledContainer>
                <VendorStyle>
                    <div className={`${movedIn && 'moved-out'} sidebar`}>
                        <SideBar setMovedIn={setMovedIn} />
                    </div>
                </VendorStyle>
                <StyledContent>
                    <h3 className="dashBoardText">Dashboard</h3>
                    <div className="topMetricsContainer">
                        <Row>
                            <Col>
                                <Metrics />
                            </Col>
                            <Col>
                                <Metrics />
                            </Col>
                            <Col>
                                <Metrics />
                            </Col>
                            <Col>
                                <Metrics />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8" className="chartIndicatorContainer">
                                <Row xs="4" className="bolo">
                                    <Col xs="2" className="chartIndicatorBox">
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
                                    <Col xs="2" className="chartIndicatorBox">
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
                                </Row>
                                <Row xs="4" className="bolo">
                                    <Col s="2x" className="chartIndicatorBox">
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
                                    <Col xs="2" className="chartIndicatorBox">
                                        <div className="metricsFilter">
                                            <h3>Top selling products</h3>
                                        </div>
                                        <PieChart />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
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
        </div>
    );
};

export default Dashboard;
