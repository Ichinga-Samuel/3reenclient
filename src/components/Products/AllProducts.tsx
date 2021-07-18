import React, { useEffect, useState } from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { ProductDisplayContainer, ImageHeader } from './Products.styled';
import { Menu } from '@material-ui/icons';
import { Row, Col, notification, Spin } from 'antd';
import BestProductCard from '@/components/WelcomePage/BestSeller/BestProductCard';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import { useRouter } from 'next/router';

const AllProducts = () => {
    const [fetch, setfetch] = useState(false);
    const [catProduct, setcatproduct] = useState([]);
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

    const fetchUserCart = async () => {
        try {
            const { data } = await axios.get(`${APP_BASE}/cart/myCart`, config);
            const usersCart = data.cart;
            setUserCart(usersCart);
            localStorage.setItem('cartItems', JSON.stringify(usersCart));
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err?.response?.data?.message,
            });
        }
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
                fetchUserCart();
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
        setfetch(true);
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
            setcatproduct(doc);
            console.log('res', response.data);
            setTimeout(() => {
                setfetch(false);
            }, 1000);
        } catch (err) {
            console.log('error', err.response);
            notification.error({
                message: 'Product Error',
                description: err?.response?.data?.message,
                duration: 15,
            });
            setTimeout(() => {
                setfetch(false);
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
            setfetch(true);
            try {
                const response = await axios.get(`${APP_BASE}${PRODUCT.allProducts}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc, pages } = response?.data;
                setPages(pages);
                setcatproduct(doc);
                console.log('res', response.data);
                setTimeout(() => {
                    setfetch(false);
                }, 1000);
            } catch (err) {
                console.log('error', err.response);
                notification.error({
                    message: 'Product Error',
                    description: err?.response?.data?.message,
                    duration: 15,
                });
                setTimeout(() => {
                    setfetch(false);
                }, 1000);
            }
        };
        // return () => {};
        fetchBestProducts();
    }, []);

    return (
        <UserWebLayout webtitle="Shop All Products">
            <ImageHeader />
            <ProductDisplayContainer>
                <div className="menuicon">
                    <Menu />
                </div>
                <div className="allcategories">
                    <div>Accessories</div>
                </div>

                {fetch ? (
                    <>
                        <div className="fetchingloading">
                            <Spin />
                            <small>Fetching Products...</small>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="sectionholder">
                            <div className="producthead">
                                <div>Top Deals</div>
                                <div
                                    onClick={() => getProductByCat('all')}
                                    onKeyDown={() => getProductByCat('all')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    View all
                                </div>
                            </div>
                            <Row gutter={24}>
                                {catProduct?.map((product, index) => {
                                    return (
                                        <>
                                            <Col key={index} xs={12} xl={6} lg={6}>
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
                        </div>
                    </>
                )}
            </ProductDisplayContainer>
        </UserWebLayout>
    );
};

export default AllProducts;
