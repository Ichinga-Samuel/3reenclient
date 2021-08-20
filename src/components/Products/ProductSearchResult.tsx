import React, { useEffect, useState } from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { ProductSearchContainer } from '@/components/Products/Products.styled';
import { Col, Row, Divider, Button, Slider } from 'antd';
import ProductCard from '@/components/Products/ProductCard';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import { useRouter } from 'next/router';
import SkeletonLoader from '@/components/Products/Skeleton';
import { CURRENCY, LOGGER } from '@/utils/helpers';

const ProductSearchResult = () => {
    const [searchResult, setsearchResult] = useState([]);
    const [loading, setloading] = useState(false);
    const [allcategory, setallCategory] = useState([]);

    const router = useRouter();
    const { search } = router.query;

    const onChange = (e) => {
        console.log('e', e);
    };

    const getProductDetails = (record) => {
        const slug = record.name.replace(' ', '-') + '-' + record._id;
        router.push({
            pathname: '/products/[details]',
            query: { details: slug },
        });
    };

    const getProductByCat = async (cat) => {
        setloading(true);
        try {
            const response = await axios.get(`${APP_BASE}${PRODUCT.filterByCat}`, {
                params: {
                    filter: cat,
                    page: 1,
                    limit: 20,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { result } = response?.data?.data;
            // setPages(pages);
            setsearchResult(result);
            console.log('res', response?.data);
            setTimeout(() => {
                setloading(false);
            }, 500);
        } catch (err) {
            console.log('error', err.response);
            setTimeout(() => {
                setloading(false);
            }, 500);
        }
    };

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (search === undefined) {
                return;
            }
            try {
                setloading(true);
                const response = await axios.get(`${APP_BASE}${PRODUCT.searchProduct(search)}`, {
                    // params: {
                    //     page: 1,
                    // },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('resr', searchResult);
                const { data } = response?.data;
                setsearchResult(data);
                setloading(false);
            } catch (err) {
                setloading(false);
                console.log('error', err);
            }
        };
        fetchProductDetails();
    }, [search]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${APP_BASE}${PRODUCT.allCategory}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc } = response?.data;
                setallCategory(doc);
            } catch (err) {
                LOGGER('err', err);
            }
        };
        fetchCategory();
    }, []);

    return (
        <UserWebLayout webtitle="Shop All Product">
            <ProductSearchContainer>
                <Row gutter={28}>
                    <Col className="hidden" xs={24} xl={6} lg={6}>
                        <div className="sidebar_result card-style">
                            <div className="catside">
                                <h3>Filter By Category</h3>
                                {allcategory?.map((cat) => {
                                    return (
                                        <>
                                            <div
                                                onClick={() => getProductByCat(cat.name)}
                                                onKeyDown={() => getProductByCat(cat.name)}
                                                role="button"
                                                tabIndex={0}
                                                className="catItem"
                                            >
                                                {cat?.name}
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className="catside">
                                <h3>Filter By Price ({CURRENCY})</h3>
                                <Row>
                                    <Col xs={24} xl={24} lg={24} style={{ marginBottom: '10px' }}>
                                        <Slider
                                            min={500}
                                            max={9999999}
                                            range={{ draggableTrack: true }}
                                            defaultValue={[500, 9999999]}
                                            onChange={onChange}
                                            // value={typeof inputValue === 'number' ? inputValue : 0}
                                        />
                                    </Col>
                                </Row>
                                <Row gutter={28} justify="space-between" align="middle">
                                    <Col xs={10} xl={10} lg={10}>
                                        <input className="ant-input" min="500" type="number" defaultValue="500" />
                                    </Col>
                                    <Col xs={2} xl={2} lg={2}>
                                        -
                                    </Col>
                                    <Col xs={10} xl={10} lg={10}>
                                        <input
                                            className="ant-input"
                                            max="9999999"
                                            type="number"
                                            defaultValue="9999999"
                                        />
                                    </Col>
                                </Row>
                                <Row justify="end">
                                    <Col xs={24} lg={24} xl={24}>
                                        <div style={{ marginTop: '10px', textAlign: 'right' }}>
                                            <Button type="primary">APPLY</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} xl={18} lg={18}>
                        <div className="card-style">
                            <h3>Shop All Products: {searchResult?.length} product found</h3>
                            <Divider />
                            {loading ? (
                                <>
                                    <Row>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((_item, index) => (
                                            <SkeletonLoader key={index} />
                                        ))}
                                    </Row>
                                </>
                            ) : (
                                <>
                                    <Row gutter={28}>
                                        {searchResult?.length > 0 ? (
                                            <>
                                                {searchResult?.map((prod) => {
                                                    return (
                                                        <>
                                                            <Col xs={24} xl={6} lg={6}>
                                                                <ProductCard
                                                                    key={prod._id}
                                                                    productObject={prod}
                                                                    getProductDetails={getProductDetails}
                                                                />
                                                            </Col>
                                                        </>
                                                    );
                                                })}
                                            </>
                                        ) : (
                                            <Col xs={24} lg={24} xl={24}>
                                                <div className="noproduct">
                                                    <h3>Search result: `{search}`</h3>
                                                    <div className="nobar">
                                                        No Products were found matching your selection, you can tru
                                                        again with another keywords
                                                    </div>
                                                </div>
                                            </Col>
                                        )}
                                    </Row>
                                </>
                            )}
                        </div>
                    </Col>
                </Row>
            </ProductSearchContainer>
        </UserWebLayout>
    );
};

export default ProductSearchResult;
