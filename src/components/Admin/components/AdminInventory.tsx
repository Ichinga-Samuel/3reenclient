import React, { useState, useEffect } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { Row, Col, Input, Button } from 'antd';
import { InventoryContainer } from '@/components/Admin/styles/AdminStyle.styled';
import InventoryProducts from '@/components/Admin/components/inventory/InventoryProducts';
import InventoryCategory from '@/components/Admin/components/inventory/InventoryCategory';

const AdminInventory = () => {
    const title = 'Inventory';
    const [active, setactive] = useState(false);
    const [catactive, setcatactive] = useState(false);

    const changeCategory = (tab) => {
        if (tab === 'all') {
            setactive(true);
            setcatactive(false);
        } else if (tab === 'cat') {
            setcatactive(true);
            setactive(false);
        }
    };

    useEffect(() => {
        setactive(true);
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
                        <InventoryProducts />
                    </>
                ) : (
                    <div>
                        <InventoryCategory />
                    </div>
                )}
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminInventory;
