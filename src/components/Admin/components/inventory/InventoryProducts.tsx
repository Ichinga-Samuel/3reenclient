import React from 'react';
import { Col, Row } from 'antd';
import InventoryCard from '@/components/Admin/components/cards/InventoryCard';

const InventoryProducts = (props) => {
    return (
        <>
            <div style={{ marginTop: '2rem' }}>
                <Row gutter={28}>
                    {props.inventoryProducts?.map((product) => {
                        return (
                            <Col key={product.id} xs={24} xl={6} lg={6}>
                                <InventoryCard
                                    product={product}
                                    updateStatus={props.UpdateAProductStatus}
                                    updating={props.updating}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </>
    );
};

export default InventoryProducts;
