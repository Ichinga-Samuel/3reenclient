import React, { useState } from 'react';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Input, Modal, notification, Row, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import CreateCategoryModal from './CreateCategoryModal';
import { CategoryMenu } from './CategoryMenu';
import { getFromLocalStorage } from '@/utils/browserStorage';

const InventoryCategory = () => {
    //Fetch The API
    const [category, setCategory] = useState([]);
    const [visibleNew, setVisibleNew] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = getFromLocalStorage('admintoken');
    const closeModal = () => {
        setVisibleNew(false);
    };
    const addNewCategory = () => {
        setVisibleNew(true);
    };
    const fetchAllCategory = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${APP_BASE}${ADMIN.getAllCategory}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const { doc } = response.data;
            setCategory(doc);
            setLoading(false);
            setTimeout(() => {
                notification.destroy();
            }, 200);
        } catch (error) {
            console.log('error', error.response);
            notification.error({
                message: 'Category Error',
                description: error?.response?.data?.message,
                duration: 10,
            });
        }
    };

    const deleteCategory = async (record) => {
        const token = localStorage.getItem('admintoken');
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.delete(`${APP_BASE}${ADMIN.delSingleCat(record._id)}`, config);
            if (res) {
                notification.success({
                    message: 'Success',
                    description: `Category ${record.name} deleted successfully`,
                });
                fetchAllCategory();
            }
            console.log(res.data);
        } catch (err) {
            console.log(err?.response);
            notification.error({
                message: 'Error',
                description: err?.response?.data?.message,
            });
        }
    };

    const confirmDeleteCategory = (record) => {
        console.log(record);
        Modal.confirm({
            title: 'Do you want to delete this category?',
            content: 'Click yes to proceed',
            okText: 'Delete',
            // loading: resetloading,
            okType: 'primary',
            async onOk() {
                await deleteCategory(record);
            },
            onCancel() {
                return false;
            },
        });
    };

    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${APP_BASE}${ADMIN.getAllCategory}`);
                const { doc } = response.data;
                setCategory(doc);
                setLoading(false);
                setTimeout(() => {
                    notification.destroy();
                }, 200);
            } catch (error) {
                console.log('error', error.response);
                notification.error({
                    message: 'Category Error',
                    description: error?.response?.data?.message,
                    duration: 10,
                });
            }
        };
        fetchCategory();
    }, []);
    interface category {
        _id: any;
        name: string;
    }
    const categoryCol: ColumnsType<category> = [
        {
            title: 'Name of Category',
            dataIndex: 'name',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            render: (_text, record) => (
                <>
                    <CategoryMenu record={record} deleteCategory={confirmDeleteCategory} />
                </>
            ),
        },
    ];
    return (
        <>
            <div style={{ marginTop: '2rem' }}>
                <h2>All Categories</h2>
                <Row gutter={28} justify="space-between">
                    <Col xs={24} xl={12} lg={12}>
                        <Row gutter={28}>
                            <Col xs={10} xl={8} lg={10}>
                                <Button type="primary" block onClick={addNewCategory}>
                                    Add New Category
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} xl={10} lg={10}>
                        <div style={{ display: 'flex' }}>
                            <Input placeholder="Search 'Categories'" style={{ marginRight: '5px' }} />
                            <Button type="primary">Search</Button>
                        </div>
                    </Col>
                </Row>
                <br />
                <Table rowKey="_id" loading={loading} columns={categoryCol} dataSource={category} />
                <CreateCategoryModal fetchAllCategory={fetchAllCategory} visible={visibleNew} closeModal={closeModal} />
            </div>
        </>
    );
};

export default InventoryCategory;
