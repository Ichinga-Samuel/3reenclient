import React, { useState, useEffect } from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { Table, notification, Pagination } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { OrderTableContainer } from '@/components/CustomerSuccessTeam/CSTLayout/CSTGeneral.styled';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, CST_API } from '@/utils/ApiList';
import axios from 'axios';

const AllRegisteredUsers = () => {
    const token = getFromLocalStorage('csttoken');
    const [userList, setuserList] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [total, setTotal] = useState(0);

    interface userList {
        _id: string;
        email: string;
        fullName: string;
        role: string;
    }

    const usersColumn: ColumnsType<userList> = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];

    useEffect(() => {
        const fetchAllOrders = async () => {
            setFetching(true);
            try {
                const response = await axios.get(`${APP_BASE}${CST_API.getAllUsers}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc, result } = response.data;
                setuserList(doc);
                setTotal(result);
                console.log('users', doc);
                setTimeout(() => {
                    setFetching(false);
                }, 500);
            } catch (err) {
                notification.error({
                    message: 'Users Error',
                    description: err.response?.data?.message,
                    duration: 0,
                });
            }
        };
        fetchAllOrders();
    }, [token]);

    return (
        <>
            <CSTMainLayout pageTitle="All Registered Users" layoutTitle="All Registered Users">
                <OrderTableContainer>
                    <Table
                        loading={fetching}
                        rowKey="_id"
                        columns={usersColumn}
                        dataSource={userList}
                        pagination={false}
                    />
                    <div className="pagination">
                        <Pagination defaultCurrent={1} total={total} />
                    </div>
                </OrderTableContainer>
            </CSTMainLayout>
        </>
    );
};

export default AllRegisteredUsers;
