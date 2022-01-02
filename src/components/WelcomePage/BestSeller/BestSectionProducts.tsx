import React, { useEffect, useState } from 'react';
import { BestSellerContainer } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col, notification, Pagination } from 'antd';
import BestProductCard from '@/components/WelcomePage/BestSeller/BestProductCard';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import { useRouter } from 'next/router';
import SkeletonLoader from '@/components/Products/Skeleton';

const BestSectionProducts = () => {
    const [loading, setloading] = useState(false);
    const [bestProduct, setbestProduct] = useState([]);
    const [pages, setPages] = useState([]);
    console.log('page', pages);
    const router = useRouter();

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
                    onClick={() => getProductByCat('ipod')}
                    onKeyDown={() => getProductByCat('all')}
                    role="button"
                    tabIndex={0}
                >
                    Electronics
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
                                            key={index}
                                            xs={12}
                                            xl={6}
                                            lg={6}
                                            data-aos="flip-right"
                                            data-aos-delay="800"
                                            data-aos-duration="800"
                                        >
                                            <BestProductCard
                                                key={product?.id}
                                                productObject={product}
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
                        <Row>
                            {[1, 2, 3, 4, 5, 6].map((_item, index) => (
                                <SkeletonLoader key={index} />
                            ))}
                        </Row>
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
