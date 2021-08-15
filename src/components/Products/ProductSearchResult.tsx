import React from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { ProductSearchContainer } from '@/components/Products/Products.styled';
import { Col, Row, Divider } from 'antd';
import ProductCard from '@/components/Products/ProductCard';

const ProductSearchResult = () => {
    return (
        <UserWebLayout webtitle="Shop All Product">
            <ProductSearchContainer>
                <Row gutter={28}>
                    <Col xs={24} xl={6} lg={6}>
                        <div className="sidebar_result card-style">
                            <h3>sidebar Pages</h3>
                        </div>
                    </Col>
                    <Col xs={24} xl={18} lg={18}>
                        <div className="card-style">
                            <h3>Result Pages</h3>
                            <Divider />
                            <Row gutter={28}>
                                <Col xs={24} xl={6} lg={6}>
                                    <ProductCard />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </ProductSearchContainer>
        </UserWebLayout>
    );
};

export default ProductSearchResult;
