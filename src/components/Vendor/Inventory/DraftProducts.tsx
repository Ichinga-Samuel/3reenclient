import React from 'react';
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;

const DraftProducts = () => {
    return (
        <div className="draftContainer">
            <h3 className="productDraftLeftHeader">Draft Products</h3>
            <Row className="productDraftHeader">
                <Tabs type="card">
                    <TabPane tab="All" key="1">
                        <Row className="draftProductsContainer">
                            <Col xs={12} xl={8} lg={8}>
                                <div className="draftProductCol">
                                    <img alt="product2" className="draftImage" src="/img/googlenest.jpg" />
                                    <span className="draftProductSpan">
                                        <div style={{ marginBottom: '20px' }}>Nike summer combo</div>
                                    </span>
                                </div>
                            </Col>
                            <Col xs={12} xl={8} lg={8}>
                                <div className="draftProductCol">
                                    <img alt="product" className="draftImage" src="/img/googlenest.jpg" />
                                    <span className="draftProductSpan">
                                        <div style={{ marginBottom: '20px' }}>Nike summer combo</div>
                                        <div>3 items 3 variants </div>
                                    </span>
                                    <span className="comboSpan">Combo</span>
                                </div>
                            </Col>
                            <Col xs={12} xl={8} lg={8}>
                                <div className="draftProductCol">
                                    <img alt="nike Snikers" className="draftImage" src="/img/googlenest.jpg" />
                                    <span className="draftProductSpan">
                                        <div style={{ marginBottom: '30px' }}>Nike summer combo</div>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Individual" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Combo" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Row>
        </div>
    );
};

export default DraftProducts;
