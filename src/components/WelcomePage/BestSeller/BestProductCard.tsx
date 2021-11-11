import React from 'react';
import { BestProductHolder } from '@/components/UserLayout/UserWebLayout.styled';
import BeautyStars from 'beauty-stars';
import { Col, Row } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import { AddShoppingCart, FavoriteBorder } from '@material-ui/icons';

const BestProductCard = (props) => {
    const { productObject, addToCart, getProductDetails } = props;
    return (
        <BestProductHolder onClick={() => getProductDetails(productObject)}>
            <div className="image">
                <img
                    src={productObject?.images[0] !== undefined ? productObject?.images[0] : `img/mackbook3x.png`}
                    alt={productObject?.name}
                />
                {/*<img src={productObject.images[0]} alt={productObject?.name} />*/}
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
                    {/* <Col>
                        <span className="price">
                            {CURRENCY}
                            {formatAmount(0)}
                        </span>
                    </Col> */}
                </Row>
            </div>
            <div className="actions">
                <Row>
                    <Col xs={12} xl={12} lg={12}>
                        <div
                            onClick={() => addToCart(productObject)}
                            onKeyDown={() => addToCart(productObject)}
                            role="button"
                            tabIndex={0}
                            className="actions__ops cartops"
                        >
                            <AddShoppingCart />
                        </div>
                    </Col>
                    <Col xs={12} xl={12} lg={12}>
                        <div className="actions__ops whistlist">
                            {/*<Favorite />*/}
                            <FavoriteBorder />
                        </div>
                    </Col>
                </Row>
            </div>
        </BestProductHolder>
    );
};

export default BestProductCard;
