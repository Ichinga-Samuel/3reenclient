import React from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { StyledContent } from '@/components/Vendor/VendorDashboard/VendorDashboard.styled';
import { Row, Col } from 'antd';
// import googleNest from '@/components/Vendor/VendorDashboard/googlenest.jpg';

const VendorCreateProduct = () => {
    const title = 'Create Products';
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <StyledContent>
                <div className="createProductsMainContainer">
                    <h3 className="selectHeaderText">Select Product You want to create</h3>
                    <div>
                        <Row style={{ margin: '7px' }}>
                            <Col className="createProductCol">
                                <h3 className="createProductHeader">New Product</h3>
                                <h4 style={{ textAlign: 'center' }}>
                                    Upload image and provide basic <br></br>details to create a new product
                                </h4>
                                <div className="createProductList">
                                    <ol start={1}>
                                        <li className="createProductOl">Name and specification</li>
                                        <li className="createProductOl">Color and quantity</li>
                                        <li className="createProductOl">Product images</li>
                                        <li className="createProductOl">Set price</li>
                                    </ol>
                                </div>
                                <div className="createProductButtonContainer">
                                    <button className="createProductButton">Create Product</button>
                                </div>
                            </Col>
                            <Col className="createProductCol">
                                <h3 className="createProductHeader">Combo Product</h3>
                                <h4 style={{ textAlign: 'center' }}>
                                    Select multiple product from your inventory <br></br>and create a special combo for
                                    your customers
                                </h4>
                                <div className="createProductList">
                                    <ol start={1}>
                                        <li className="createProductOl">Select multiple products</li>
                                        <li className="createProductOl">Color and quantity</li>
                                        <li className="createProductOl">Product images</li>
                                        <li className="createProductOl">Set combo price</li>
                                    </ol>
                                </div>
                                <div className="createProductButtonContainer">
                                    <button className="createProductButton">Create Product</button>
                                </div>
                            </Col>
                        </Row>
                        <div className="draftContainer">
                            <Row className="productDraftHeader">
                                <Col className="productDraftLeftHeader">Draft Products</Col>
                                <Col style={{ textAlign: 'right' }} className="productDraftRightHeader">
                                    <div>
                                        <button style={{ background: 'ash', padding: '5px' }}>All</button>
                                        <button style={{ background: 'pink', padding: '5px' }}>Individual</button>
                                        <button style={{ background: 'pink', padding: '5px' }}>Combo</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="draftProductsContainer">
                                <Col className="draftProductCol">
                                    <img alt="product2" className="draftImage" src="/img/googlenest.jpg" />
                                    <span className="draftProductSpan">
                                        <div style={{ marginBottom: '20px' }}>Nike summer combo</div>
                                    </span>
                                </Col>
                                <Col className="draftProductCol">
                                    <img alt="product" className="draftImage" src="/img/googlenest.jpg" />
                                    <span className="draftProductSpan">
                                        <div style={{ marginBottom: '20px' }}>Nike summer combo</div>
                                        <div>3 items 3 variants </div>
                                    </span>
                                    <span className="comboSpan">Combo</span>
                                </Col>
                                <Col className="draftProductCol">
                                    <img alt="nike Snikers" className="draftImage" src="/img/googlenest.jpg" />
                                    <span className="draftProductSpan">
                                        <div style={{ marginBottom: '30px' }}>Nike summer combo</div>
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </StyledContent>
        </VendorLayout>
    );
};

export default VendorCreateProduct;
