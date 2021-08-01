import React, { useEffect, useState } from 'react';
import { BestSellerContainer } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col, notification, Spin, Pagination } from 'antd';
import BestProductCard from '@/components/WelcomePage/BestSeller/BestProductCard';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';

const BestSectionProducts = () => {
    const [loading, setloading] = useState(false);
    const [bestProduct, setbestProduct] = useState([]);
    const [userCart, setUserCart] = useState([]);
    const [pages, setPages] = useState([]);
    console.log('page', pages);
    const router = useRouter();

    const token = getFromLocalStorage('usertoken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const addToCart = async (product) => {
        let inCart = false;
        //get particular product's id
        const productId = product._id;
        // duplicate of existing usercart
        const cartItems = userCart.slice();
        // loop through items and check if product to add already exist
        cartItems.forEach((item) => {
            if (item.productId === productId) {
                //increment count and update user cart endpoint
                const resp = axios.patch(`${APP_BASE}/cart/${item.productId}`, config);
                // const { data } = resp;
                console.log(resp, 'cart rsponse');
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
                cartItems.push({ ...product, count: 1 });
                notification.success({
                    message: 'Success',
                    description: 'Item Added to Cart',
                    duration: 10,
                });
            } catch (err) {
                notification.error({
                    message: 'Error',
                    description: err?.response?.data?.message,
                    duration: 10,
                });
            }
        }

        setUserCart(cartItems);
        addToLocalStorage('cartItems', cartItems);
        // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const getProductByCat = async (cat) => {
        setloading(true);
        let url = '';
        if (cat === 'all') {
            url = `${APP_BASE}${PRODUCT.allProducts}`;
        } else {
            url = `${APP_BASE}${PRODUCT.allProducts}/${cat}`;
        }
        try {
            const response = await axios.get(`${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { doc, pages } = response?.data;
            setPages(pages);
            setbestProduct(doc);
            console.log('res', response.data);
            setTimeout(() => {
                setloading(false);
            }, 1000);
        } catch (err) {
            console.log('error', err.response);
            notification.error({
                message: 'Product Error',
                description: err?.response?.data?.message,
                duration: 15,
            });
            setTimeout(() => {
                setloading(false);
            }, 1000);
        }
    };

    const getProductDetails = (record) => {
        console.log('record', record);
        const slug = record.name.replace(' ', '-') + '-' + record._id;
        console.log('slug-rul', slug);
        router.push({
            pathname: '/products/[details]',
            query: { details: slug },
        });
    };

    useEffect(() => {
        const fetchBestProducts = async () => {
            setloading(true);
            try {
                const response = await axios.get(`${APP_BASE}${PRODUCT.allProducts}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc, pages } = response?.data;
                setPages(pages);
                setbestProduct(doc);
                console.log('res', response.data);
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            } catch (err) {
                console.log('error', err.response);
                notification.error({
                    message: 'Product Error',
                    description: err?.response?.data?.message,
                    duration: 15,
                });
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            }
        };
        // return () => {};
        fetchBestProducts();
    }, []);

    return (
        <BestSellerContainer>
            <h3 className="pageTitle">Best Seller</h3>
            <div className="bestCat">
                <div
                    onClick={() => getProductByCat('all')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                    className="active"
                >
                    All
                </div>
                <div
                    onClick={() => getProductByCat('mac')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                >
                    Mac
                </div>
                <div
                    onClick={() => getProductByCat('iphone')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                >
                    iPhone
                </div>
                <div
                    onClick={() => getProductByCat('ipad')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                >
                    iPad
                </div>
                <div
                    onClick={() => getProductByCat('ipod')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                >
                    iPod
                </div>
                <div
                    onClick={() => getProductByCat('accessories')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                >
                    Accessories
                </div>
            </div>

            <div className="bestproducts">
                {!loading ? (
                    <>
                        <Row gutter={28}>
                            {bestProduct?.map((product, index) => {
                                return (
                                    <>
                                        <Col
                                            key={product.id}
                                            xs={12}
                                            xl={6}
                                            lg={6}
                                            data-aos="flip-right"
                                            data-aos-delay="800"
                                            data-aos-duration="800"
                                        >
                                            <BestProductCard
                                                key={index + 1}
                                                productObject={product}
                                                addToCart={addToCart}
                                                getProductDetails={getProductDetails}
                                            />
                                        </Col>
                                    </>
                                );
                            })}
                        </Row>
                    </>
                ) : (
                    <>
                        <div className="fetchingloading">
                            <Spin />
                            <small>Fetching Products...</small>
                        </div>
                    </>
                )}
            </div>

            <div className="loadmore">
                <Pagination />
            </div>
        </BestSellerContainer>
    );
};

export default BestSectionProducts;
