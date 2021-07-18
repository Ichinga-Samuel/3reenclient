import React from 'react';
import { FeaturedCardHolder } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col } from 'antd';
import BeautyStars from 'beauty-stars';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const FeaturedCard = ({ featuredProduct }) => {
    return (
        <FeaturedCardHolder>
            <Row gutter={10}>
                <Col xs={8} xl={8} lg={8}>
                    <div className="image">
                        <img src={featuredProduct.img} alt={featuredProduct.name} />
                    </div>
                </Col>
                <Col xs={16} xl={16} lg={16}>
                    <div className="details">
                        <h4>{featuredProduct.name}</h4>
                        <BeautyStars
                            gap="5px"
                            maxStars={5}
                            activeColor="#ffaf38"
                            inactiveColor="#ddd"
                            size="13px"
                            value={featuredProduct.rating}
                        />
                        <Row gutter={30} style={{ marginTop: '15px' }}>
                            <Col>
                                <span className="discount">
                                    {CURRENCY}
                                    {formatAmount(featuredProduct.discount)}
                                </span>
                            </Col>
                            <Col>
                                <span className="price">
                                    {CURRENCY}
                                    {formatAmount(featuredProduct.price)}
                                </span>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </FeaturedCardHolder>
    );
};

export default FeaturedCard;
