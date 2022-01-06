import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import { Row, Col, notification, Button, Spin } from 'antd';
import { useRouter } from 'next/router';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { ProductDetailsContainer } from '@/components/Products/Products.styled';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import BeautyStars from 'beauty-stars';
import { getFromLocalStorage } from '@/utils/browserStorage';

const SingleProductDetails = () => {
    const [showdetail, setshowdetails] = useState(false);
    const [adding, setadding] = useState(false);
    const [productdetails, setproductdetails] = useState(null);
    const [userCart, setUserCart] = useState([]);
    const token = getFromLocalStorage('usertoken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const router = useRouter();
    const { details } = router.query;
    let getTheID;
    let titleArray;
    if (typeof details === 'string') {
        getTheID = details?.split('-');
        titleArray = details?.split('-');
    }
    titleArray?.pop();
    const title = titleArray?.join(' ');
    console.log('new', titleArray?.join(' '));
    // const id = getTheID?.[getTheID?.length - 1];
    const id = getTheID?.pop();
    console.log('detailss', productdetails);
    const addToCart = async (product) => {
        let inCart = false;
        const productId = product.id;
        console.log(productId);
        // // duplicate of existing usercart
        const cartItems = userCart.slice();
        console.log(cartItems)
        setUserCart(cartItems)
        // loop through items and check if product to add already exist
        cartItems.forEach((item) => {
            console.log(item.productId)
            if (item.productId === productId) {
                //increment count and update user cart endpoint
                console.log(item.productId)
                const resp = axios.patch(`${APP_BASE}/cart/${item.productId}`, config);
                // const { data } = resp;
                console.log(resp, 'cart rsponse');
                notification.success({
                    message:'Success',
                    description:'Item Updated',
                    duration:10
                })
                item.count++;
                inCart = true;
            }
        });

        // if new product
        if (!inCart) {
            //add it to cart endpoint
            try {
                const { data } = await axios.post(`${APP_BASE}/cart/${productId}`, { productId }, config);
                //add to usercart duplicate array
                console.log('cart', data);
                const usersCart = data.cartItem;
                localStorage.setItem('cartItems', JSON.stringify([usersCart]));
                setadding(true);
                cartItems.forEach((item) => {
                    console.log(item.productId)
                })
                // cartItems.push({ ...product, count: 1 });
                notification.success({
                    message: 'Success',
                    description: 'Item Added to Cart',
                    duration: 10,
                });
                setadding(false);
                inCart = true;
            } catch (err) {
                setadding(false);
                notification.error({
                    message: 'Error',
                    description: err?.response?.data?.message,
                    duration: 10,
                });
            }
        }
    };

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (id === undefined) {
                return;
            }
            try {
                setshowdetails(true);
                const response = await axios.get(`${APP_BASE}${PRODUCT.singleProduct(id)}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc } = response?.data;
                setproductdetails(doc);
                setshowdetails(false);
            } catch (err) {
                setshowdetails(true);
                console.log('error', err);
                notification.error({
                    message: 'Error',
                    description: err.response?.data.message,
                    duration: 0,
                });
            }
        };
        fetchProductDetails();
    }, [id]);
    return (
        <UserWebLayout webtitle={`${title} Details`}>
            {!showdetail ? (
                <>
                    <ProductDetailsContainer>
                        <div className="rowdetails" style={{ paddingBottom: '6rem' }}>
                            <Row gutter={20}>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="prdimg">
                                        <div>
                                            <img src={productdetails?.images?.[0]} alt={productdetails?.name} />
                                        </div>
                                        {/* <Slider {...settings}>
                                
                                             <div>
                                                <img src={productdetails?.images?.[0]} alt={productdetails?.name} />
                                            </div>
                                             <div>
                                                <img src={productdetails?.images?.[0]} alt={productdetails?.name} />
                                            </div>
                                            <div>
                                                <img src={productdetails?.images?.[0]} alt={productdetails?.name} />
                                            </div>
                                            <div>
                                                <img src={productdetails?.images?.[0]} alt={productdetails?.name} />
                                            </div> 
                                        </Slider> */}
                                    </div>
                                </Col>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="sidedetails">
                                        <h3>{productdetails?.name}</h3>
                                        <h4>{productdetails?.category}</h4>
                                        <div className="rating">
                                            <BeautyStars
                                                size="13px"
                                                gap="5px"
                                                activeColor="#ffaf38"
                                                inactiveColor="#ddd"
                                                value={productdetails?.averageRating}
                                            />
                                        </div>
                                        <p>Rating: {productdetails?.averageRating}</p>
                                        <p className="desc">{productdetails?.description}</p>
                                        <p className="amount">
                                            {CURRENCY} {formatAmount(productdetails?.price)}
                                        </p>
                                        <Button
                                            loading={adding}
                                            onClick={() => addToCart(productdetails)}
                                            type="primary"
                                        >
                                            Add To Cart
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="rowdetails">
                            <Row gutter={20}>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="sidedetails" style={{ padding: '5rem' }}>
                                        <h3>Product Details</h3>
                                        <p>{productdetails?.description}</p>
                                        <p>{productdetails?.specification}</p>
                                        <p>{productdetails?.keyFeatures}</p>
                                    </div>
                                </Col>
                                {/* <Col xs={24} xl={12} lg={12}>
                                    <div className="prdimg">
                                        <img src="/img/phone.png" alt="umgidi" />
                                    </div>
                                </Col> */}
                            </Row>
                        </div>
                        {/* <div className="rowdetails">
                            <Row gutter={40}>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="prdimg">
                                        <img src="/img/matrix.png" alt="matrix" />
                                    
                                    </div>
                                </Col>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="prdimg">
                                        <img src="/img/matrix.png" alt="matrix" />
                                      
                                    </div>
                                </Col>
                            </Row>
                        </div> */}
                    </ProductDetailsContainer>
                </>
            ) : (
                <>
                    <div className="fetchingloading">
                        <Spin />
                        <small>Fetching Products Details...</small>
                    </div>
                </>
            )}
        </UserWebLayout>
    );
};

export default SingleProductDetails;
