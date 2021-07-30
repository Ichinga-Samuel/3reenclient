import React, { useEffect, useState } from 'react';
import { Col, notification, Row, Spin } from 'antd';
import InventoryCard from '@/components/Admin/components/cards/InventoryCard';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';

const InventoryProducts = () => {
    const [fetching, setfetching] = useState(false);
    const [updating, setupdating] = useState(false);
    const [inventoryProducts, setInventoryProducts] = useState([]);

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
                setfetching(false);
            }, 200);
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
                    setfetching(false);
                }, 200);
            }
        };
        fetchInventoryProducts();
    }, []);

    return (
        <>
            <div style={{ marginTop: '2rem' }}>
                {fetching ? (
                    <div className="fetchingloading">
                        <Spin />
                        <small>Fetching Inventory...</small>
                    </div>
                ) : (
                    <Row gutter={28}>
                        {inventoryProducts?.map((product) => {
                            return (
                                <Col key={product.id} xs={24} xl={6} lg={6}>
                                    <InventoryCard
                                        product={product}
                                        updateStatus={UpdateAProductStatus}
                                        updating={updating}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </div>
        </>
    );
};

export default InventoryProducts;
