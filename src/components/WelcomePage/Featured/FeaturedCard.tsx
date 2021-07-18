import React from 'react';
import { FeaturedCardHolder } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col } from 'antd';
import BeautyStars from 'beauty-stars';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const FeaturedCard = ({ featuredProduct }) => {
    console.log('tpp', featuredProduct);
    return (
        <FeaturedCardHolder>
            {/*<div className="image" style={{ marginRight: '30px' }}>*/}
            {/*    <img src={featuredProduct.img} alt={featuredProduct.name + featuredProduct.type} />*/}
            {/*</div>*/}
            {/*<div className="FeaturedProductsItemsDescription">*/}
            {/*    <h4>*/}
            {/*        {featuredProduct.name}*/}
            {/*        <br />*/}
            {/*        {featuredProduct.type}*/}
            {/*    </h4>*/}
            {/*    <img src="/img/rating.png" width="150px" height="30px" alt="Rating for Beats solo" />*/}
            {/*    <p>*/}
            {/*        <span>${featuredProduct.discount}</span> ${featuredProduct.price}*/}
            {/*    </p>*/}
            {/*</div>*/}
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
                                    {formatAmount(499)}
                                </span>
                            </Col>
                            <Col>
                                <span className="price">
                                    {CURRENCY}
                                    {formatAmount(899)}
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
