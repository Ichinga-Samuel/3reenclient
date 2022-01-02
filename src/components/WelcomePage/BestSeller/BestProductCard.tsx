import React from 'react';
import { BestProductHolder } from '@/components/UserLayout/UserWebLayout.styled';
import BeautyStars from 'beauty-stars';
import { Col, Row } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const BestProductCard = (props) => {
    const { productObject, getProductDetails } = props;
    return (
        <BestProductHolder onClick={() => getProductDetails(productObject)}>
            <div className="image">
                <img
                    src={productObject?.images[0] !== undefined ? productObject?.images[0] : `img/mackbook3x.png`}
                    alt={productObject?.name}
                />
            </div>
            <div className="carddetails">
                <h4>{productObject?.name}</h4>
                <BeautyStars
                    size="15px"
                    gap="5px"
                    activeColor="#ffaf38"
                    inactiveColor="#ddd"
                    value={productObject?.averageRating}
                />
                <Row gutter={30} style={{ marginTop: '15px' }}>
                    <Col>
                        <span className="discount">
                            {CURRENCY}
                            {formatAmount(productObject?.price)}
                        </span>
                    </Col>
                </Row>
            </div>
        </BestProductHolder>
    );
};

export default BestProductCard;
