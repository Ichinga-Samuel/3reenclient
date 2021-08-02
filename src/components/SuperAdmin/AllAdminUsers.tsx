import React, { useState, useEffect } from 'react';
import SuperDefaultLayout from '@/components/SuperAdmin/Layout/SuperDefaultLayout';
import { Button, Col, Modal, Input, notification, Row, Table, Tag } from 'antd';
import { GeneralContainer } from '@/components/Admin/styles/AdminStyle.styled';
import { getFromLocalStorage } from '@/utils/browserStorage';
import axios from 'axios';
import { APP_BASE, /*ADMIN*/ USER } from '@/utils/ApiList';
import { ColumnsType } from 'antd/es/table/Table';
import { UserMenu } from '@/components/SuperAdmin/UserMenu';
import ChangePasswordModal from '@/components/SuperAdmin/ChangePasswordModal';
import CreateNewAdminModal from '@/components/SuperAdmin/CreateNewAdminModal';

export interface ModalFuncProps {
    loading: boolean;
}

const AllAdminUsers = () => {
    const [adminUsers, setAdminUsers] = useState([]);
    // const [currentuser, setcurrentuser] = useState({});
    const [visiblePwd, setVisiblePwd] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [loading, setloading] = useState(false);
    const [resetloading, setresetloading] = useState(false);

    const token = getFromLocalStorage('supertoken');

    const addNewAdmin = () => {
        setVisibleNew(true);
    };

    const closeModal = () => {
        setVisiblePwd(false);
        setVisibleNew(false);
    };

    const confirmNewPassword = (record) => {
        console.log(record);
        Modal.confirm({
            title: 'Do you want to delete this user?',
            content: 'Click yes to proceed',
            okText: 'Delete',
            // loading: resetloading,
            okType: 'primary',
            async onOk() {
                await axios
                    .post(`${APP_BASE}${USER.forgotPassword}`, { email: record.email })
                    .then((response) => {
                        console.log('for', response);
                        const { data } = response;
                        if (data.status === 'success') {
                            notification.close('error');
                            setresetloading(false);
                            notification.success({
                                message: 'Success',
                                description: data?.message,
                            });
                        }
                        console.log(resetloading);
                    })
                    .catch((err) => {
                        setloading(false);
                        notification.error({
                            key: 'error',
                            message: 'Error',
                            description: err.response.data.message,
                            duration: 25,
                        });
                    });
            },
            onCancel() {
                setresetloading(false);
                return false;
            },
        });
    };

    useEffect(() => {
        const getAllAdminUsers = async () => {
            try {
                setloading(true);
                // const res = await axios.get(`${APP_BASE}${ADMIN.getUserByType('admin')}`, {
                //     headers: {
                //         'Content-Type': 'application/json',
                //         Authorization: `Bearer ${token}`,
                //     },
                // });
                const res = await axios.get(`${APP_BASE}/users/?role=sub-admin`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res) {
                    setloading(false);
                    setAdminUsers(res?.data?.doc);
                }
            } catch (e) {
                setloading(false);
                notification.error({
                    message: 'Error',
                    description: e?.response?.data?.message,
                });
            }
        };
        getAllAdminUsers();
    }, [token]);

    interface adminUsers {
        _id: any;
        fullName: string;
        email: string;
        role: string;
        verified: boolean;
    }

    const userCol: ColumnsType<adminUsers> = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Verified?',
            dataIndex: 'verified',
            render: (_text, record) => (
                <>{!record.verified ? <Tag color="green">YES</Tag> : <Tag color="red">NO</Tag>}</>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            render: (_text, record) => (
                <>
                    <UserMenu record={record} confirmNewPassword={confirmNewPassword} />
                </>
            ),
        },
    ];

    return (
        <SuperDefaultLayout browserTitle="All Admin Users" breadTitle="All Admin Users">
            <Row gutter={28} justify="space-between">
                <Col xs={24} xl={12} lg={12}>
                    <Row gutter={28}>
                        <Col xs={10} xl={8} lg={8}>
                            <Button type="primary" block onClick={addNewAdmin}>
                                Add New Admin
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} xl={10} lg={10}>
                    <div style={{ display: 'flex' }}>
                        <Input placeholder="Search 'Admin Users'" style={{ marginRight: '5px' }} />
                        <Button type="primary">Search</Button>
                    </div>
                </Col>
            </Row>
            <GeneralContainer style={{ marginTop: '15px' }}>
                <Table loading={loading} rowKey="_id" columns={userCol} dataSource={adminUsers} />
            </GeneralContainer>

            <ChangePasswordModal visible={visiblePwd} closeModal={closeModal} />
            <CreateNewAdminModal visible={visibleNew} closeModal={closeModal} />
        </SuperDefaultLayout>
    );
};

export default AllAdminUsers;
