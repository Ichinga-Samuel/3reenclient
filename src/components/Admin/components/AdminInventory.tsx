import React, { useState, useEffect } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { Row, Col, Input, Button, notification, Spin } from 'antd';
import { InventoryContainer } from '@/components/Admin/styles/AdminStyle.styled';
import InventoryProducts from '@/components/Admin/components/inventory/InventoryProducts';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import axios from 'axios';

const AdminInventory = () => {
    const title = 'Inventory';
    const [updating, setupdating] = useState(false);
    const [loading, setloading] = useState(false);
    const [fetching, setfetching] = useState(false);
    const [active, setactive] = useState(false);
    const [catactive, setcatactive] = useState(false);
    const [inventoryProducts, setInventoryProducts] = useState([]);

    console.log(loading);
    const ReInventoryProducts = async () => {
        setfetching(true);
        try {
            const response = await axios.get(`${APP_BASE}${PRODUCT.allProducts}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { doc } = response?.data;
            setInventoryProducts(doc);
            console.log('res', response.data);
            setTimeout(() => {
                setfetching(false);
            }, 200);
        } catch (err) {
            console.log('error', err.response);
            notification.error({
                message: 'Product Error',
                description: err?.response?.data?.message,
                duration: 15,
            });
            setTimeout(() => {
                setloading(false);
            }, 200);
        }
    };
    const changeCategory = (tab) => {
        if (tab === 'all') {
            setactive(true);
            setcatactive(false);
        } else if (tab === 'cat') {
            setcatactive(true);
            setactive(false);
        }
    };
    const UpdateAProductStatus = async (product) => {
        console.log('id', product.id);
        setupdating(true);
        try {
            const response = await axios.patch(
                `${APP_BASE}/product/update`,
                {
                    id: product.id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            const { doc } = response?.data;
            // setPages(pages);
            setInventoryProducts(doc);
            console.log('res', response.data);
            setTimeout(() => {
                ReInventoryProducts();
                notification.destroy();
                setfetching(false);
            }, 200);
        } catch (err) {
            console.log('error', err.response);
            notification.error({
                message: 'Product Error',
                description: err?.response?.data?.message,
                duration: 10,
            });
            setTimeout(() => {
                setloading(false);
            }, 200);
        }
        setTimeout(() => {
            notification.info({
                message: 'Info',
                description: 'No Endpoint For this Operation',
                duration: 10,
            });
            setupdating(false);
        }, 300);
    };

    useEffect(() => {
        setactive(true);
    }, []);

    useEffect(() => {
        const getInventoryProducts = () => {
            setloading(true);
            setTimeout(() => {
                setloading(false);
            }, 300);
        };
        getInventoryProducts();
    }, []);

    useEffect(() => {
        const fetchInventoryProducts = async () => {
            setfetching(true);
            try {
                const response = await axios.get(`${APP_BASE}${PRODUCT.allProducts}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc } = response?.data;
                // setPages(pages);
                setInventoryProducts(doc);
                console.log('res', response.data);
                setTimeout(() => {
                    setfetching(false);
                }, 200);
            } catch (err) {
                console.log('error', err.response);
                notification.error({
                    message: 'Product Error',
                    description: err?.response?.data?.message,
                    duration: 15,
                });
                setTimeout(() => {
                    setloading(false);
                }, 200);
            }
        };
        fetchInventoryProducts();
    }, []);

    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <InventoryContainer>
                <Row gutter={28} justify="space-between">
                    <Col xs={24} xl={12} lg={12}>
                        <Row gutter={28}>
                            <Col>
                                <div
                                    onClick={() => changeCategory('all')}
                                    onKeyDown={() => changeCategory('all')}
                                    role="button"
                                    tabIndex={0}
                                    className={`catops ${active ? 'active' : ''}`}
                                >
                                    All
                                </div>
                            </Col>
                            <Col>
                                <div
                                    onClick={() => changeCategory('cat')}
                                    onKeyDown={() => changeCategory('cat')}
                                    role="button"
                                    tabIndex={0}
                                    className={`catops ${catactive ? 'active' : ''}`}
                                >
                                    Categories
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} xl={10} lg={10}>
                        <div className="searchform">
                            <Input placeholder="Search 'Inventory'" />
                            <Button type="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
                {active ? (
                    <>
                        {fetching ? (
                            <div className="fetchingloading">
                                <Spin />
                                <small>Fetching Inventory...</small>
                            </div>
                        ) : (
                            <InventoryProducts
                                UpdateAProductStatus={UpdateAProductStatus}
                                updating={updating}
                                loading={loading}
                                inventoryProducts={inventoryProducts}
                            />
                        )}
                    </>
                ) : (
                    <div>
                        <h3>Catgories Management</h3>
                    </div>
                )}
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminInventory;
