import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { Button, Col, Input, notification, Row } from 'antd';
import AuditCountCard from '@/components/Admin/components/cards/AuditCountCard';
import { GeneralContainer } from '@/components/Admin/styles/AdminStyle.styled';
import AuditTable from '@/components/Admin/components/audit/AuditTableData';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { AmountMadeIcon, CancelIcon, PendingIcon } from '@/utils/NewIcons2';

const AdminAuditRecord = () => {
    const title = 'Audit';
    const [fetching, setfetching] = useState(false);
    const [auditData, setAuditData] = useState([]);

    const token = getFromLocalStorage('admintoken');
    useEffect(() => {
        const fetchAuditProducts = async () => {
            setfetching(true);
            try {
                const response = await axios.get(`${APP_BASE}/admin/audit`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc } = response?.data;
                // setPages(pages);
                setAuditData(doc);
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
        fetchAuditProducts();
    }, [token]);

    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <div>
                <Row gutter={40} justify="space-between">
                    <Col xs={24} xl={8} lg={6}>
                        <AuditCountCard icon={<AmountMadeIcon />} title="Amount Made" count="35000000" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <AuditCountCard icon={<PendingIcon />} title="Pending Payments" count="45000" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <AuditCountCard icon={<CancelIcon />} title="Total Cancelled" count="400000" />
                    </Col>
                </Row>
            </div>
            <GeneralContainer>
                <Row gutter={28} justify="end">
                    <Col xs={24} xl={10} lg={10}>
                        <div className="searchform">
                            <Input placeholder="Search 'Products'" />
                            <Button type="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
                <div style={{ marginTop: '15px' }} />
                <AuditTable auditData={auditData} fetching={fetching} />
            </GeneralContainer>
        </DefaultLayout>
    );
};

export default AdminAuditRecord;
