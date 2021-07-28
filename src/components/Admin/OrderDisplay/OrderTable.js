import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
export const OrderTable = () => {
    const APP_URL = process.env.APP_BASE_URL;
    const colums = [
        {
            key:'1',
            title:'Date',
            dataIndex:'data'
        },
        {
            key:'2',
            title:'Product',
            dataIndex:'name'
        },
        {
            key:'3',
            title:'Qty',
            dataIndex:'quantity'
        },
        {
            key:'4',
            title:'Item ID',
            dataIndex:'_id'
        },
        {
            key:'5',
            title:'Tracking',
            dataIndex:'tracking'
        },
        {
            key:'6',
            title:'Amount',
            dataIndex:'totalCost'
        },
        {
            key:'7',
            title:'Status',
            dataIndex:'status',
            render: (status) => (
                <>
                    {status === 'completed' || status === 'Completed' ? (
                        <span style={{ color: '#219653' }}>Completed</span>
                    ) : status === 'refunded' || status === 'Refunded' ? (
                        <span style={{ color: '#7F7806' }}>Refunded</span>
                    ) : status === 'onhold' || status === 'Onhold' ? (
                        <span style={{ color: '#C5BC09' }}>On Hold</span>
                    ) : status === 'cancelled' || status === 'Cancelled' ? (
                        <span style={{ color: '#BE1E2D' }}>Cancelled</span>
                    ) : status === 'pending' || status === 'Pending' ? (
                        <span style={{ color: '#FFAF38' }}>Pending</span>
                    ) : status === 'failed' || status === 'Failed' ? (
                        <span style={{ color: '#BE1E2D' }}>Failed</span>
                    ) : (
                        ''
                    )}
                </>
            ),
        },
        {
            key:'8',
            title:'Payment',
            dataIndex:'payment'
        },
        {
            key:'9',
            title:'Action',
            dataIndex:'action'
        },
        
    ]
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }
        useEffect(async() => {
          setLoading(true)
          const res =  await axios.get(`${APP_URL}/orders`, config)
          const {doc} = res.data
          setDataSource(doc)
          setLoading(false)
        }, []);
    } catch (error) {
        console.log(error);
    } 
    return (
        <Table 
         dataSource={dataSource}
         loading={loading}
         columns={colums}
            pagination={{
                position: ['bottomCenter'],
            }}
            style={{ width: '100%' }}
        />
    );
};

export default OrderTable;
