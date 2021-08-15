import React from 'react';
import BeautyStars from 'beauty-stars';
import { Col, Row } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import { AddShoppingCart } from '@material-ui/icons';
import { ProductCardHolder } from '@/components/Products/Products.styled';

const ProductCard = (props) => {
    const { productObject, addToCart, getProductDetails } = props;
    return (
        <ProductCardHolder onClick={() => getProductDetails(productObject)}>
            <div className="image">
                {productObject?.images.length <= 0 ? (
                    <img src="/img/no-image.png" alt="no-pict" />
                ) : (
                    <img src={productObject?.images[0]} alt={productObject?.name} />
                )}
                {/*<img src={productObject.images[0]} alt={productObject?.name} />*/}
            </div>
            <div className="carddetails">
                <h4>{productObject?.name}</h4>
                <BeautyStars
                    size="20px"
                    gap="10px"
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
                    <Col>
                        <span className="price">
                            {CURRENCY}
                            {formatAmount(0)}
                        </span>
                    </Col>
                </Row>
            </div>
            <div className="actions">
                <Row>
                    <Col xs={24} xl={24} lg={24}>
                        <div
                            onClick={() => addToCart(productObject)}
                            onKeyDown={() => addToCart(productObject)}
                            role="button"
                            tabIndex={0}
                            className="actions__ops cartops"
                        >
                            <AddShoppingCart /> ADD TO CART
                        </div>
                    </Col>
                </Row>
            </div>
        </ProductCardHolder>
    );
};
export default ProductCard;
