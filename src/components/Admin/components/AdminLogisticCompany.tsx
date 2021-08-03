import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { InventoryContainer } from '@/components/Admin/styles/AdminStyle.styled';
import { Button, Col, Input, Row } from 'antd';
import LogisticCompany from './logistic/LogisticCompany';
import LogisticCategory from './logistic/LogisticCategory';

const AdminLogisticCompany = () => {
    const title = 'Logistics Company';
    const [active, setactive] = useState(false);
    const [catactive, setcatactive] = useState(false);
    useEffect(() => {
        setactive(true);
    }, []);
    const changeCategory = (tab) => {
        if (tab === 'all') {
            setactive(true);
            setcatactive(false);
        } else if (tab === 'cat') {
            setcatactive(true);
            setactive(false);
        }
    };

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
                            <Input placeholder="Search 'Logistics Company'" />
                            <Button type="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
                <div style={{ marginTop: '15px' }} />
                {active ? (
                    <>
                        <LogisticCompany />
                    </>
                ) : (
                    <div>
                       <LogisticCategory/>
                    </div>
                )}
            </InventoryContainer>
        </DefaultLayout>
    );
};

export default AdminLogisticCompany;
