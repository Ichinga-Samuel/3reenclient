import React from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { Row, Col, Button } from 'antd';
import DraftProducts from './DraftProducts';
import { useRouter } from 'next/router';

const VendorCreateProduct = () => {
    const title = 'Create Products';
    const router = useRouter();

    const creatProduct = () => {
        return router.push('/vendor/inventory/new');
    };
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div className="createProductsMainContainer">
                <h3>Select Product You want to create</h3>
                <div className="productOptions">
                    <Row gutter={24}>
                        <Col xs={24} xl={12} lg={12}>
                            <div className="createProductCol">
                                <h3 className="createProductHeader">New Product</h3>
                                <h4>
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
                                <Row>
                                    <Col xs={24} xl={24} lg={24}>
                                        <Button block type="primary" onClick={creatProduct}>
                                            Create Product
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} xl={12} lg={12}>
                            <div className="createProductCol">
                                <h3 className="createProductHeader">Combo Product</h3>
                                <h4>
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
                                <Row>
                                    <Col xs={24} xl={24} lg={24}>
                                        <Button block type="primary" onClick={creatProduct}>
                                            Create Product
                                        </Button>
                                    </Col>
                                </Row>
                                {/* <div className="createProductButtonContainer">
                                    <Button type="primary" className="createProductButton">
                                        Create Product
                                    </Button>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </div>
                <DraftProducts />
            </div>
        </VendorLayout>
    );
};

export default VendorCreateProduct;
