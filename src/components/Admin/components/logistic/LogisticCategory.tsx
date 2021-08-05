import { ADMIN, APP_BASE } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { Col, Row, Spin, Button, notification, Input, Tag } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import axios from 'axios';
import React, { useState } from 'react';

const LogisticCategory = () => {
    const [getState, setState] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState({
        state: '',
    });
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const { state } = data;
    console.log(state);
    const token = getFromLocalStorage('admintoken');
    const getCompanyByState = async () => {
        setFetching(true);
        try {
            const response = await axios.get(`${APP_BASE}${ADMIN.getCompanyByState(state)}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const { companies } = response.data;
            console.log(response);
            setState(companies);
            setFetching(false);
            setTimeout(() => {
                notification.destroy();
            }, 200);
        } catch (error) {
            console.log('error', error.response);
            notification.error({
                message: 'State Error',
                description: error?.response?.data?.message,
                duration: 10,
            });
        }
    };
    interface byState {
        _id: any;
        name: string;
        state: string;
        enabled: boolean;
    }
    const byState: ColumnsType<byState> = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'State',
            dataIndex: 'state',
        },
        {
            title: 'Phone NO',
            dataIndex: 'phone',
        },
        {
            title: 'Selected',
            dataIndex: 'enabled',
            render: (_text, record) => (
                <>{record.enabled ? <Tag color="green">YES</Tag> : <Tag color="cyan">NO</Tag>}</>
            ),
        },
    ];
    return (
        <>
            {fetching ? (
                <div className="fetchingloading">
                    <Spin />
                    <small>Fetching Companies By State</small>
                </div>
            ) : (
                <div>
                    <form>
                    <Row gutter={28} justify="space-between">
                        <Col xs={24} xl={12} lg={12}>
                            <Row gutter={28}>
                                <Col xs={24} xl={10} lg={10}>
                        <div style={{ display: 'flex', width:'400px' }}>
                            <Input placeholder="Get By State" name='state' onChange={onChange} value={state} style={{ marginRight: '5px', width:'200px' }} />
                            <Button type="primary" onClick={getCompanyByState}>Get By State</Button>
                        </div>
                    </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <Table columns={byState} dataSource={getState} />
                    </form>
                </div>
            )}
        </>
    );
};

export default LogisticCategory;
