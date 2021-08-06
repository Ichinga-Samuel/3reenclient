import { ADMIN, APP_BASE } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import {  Col, Row, Spin, Button, notification, Modal, Tag } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LogisticMenu } from './LogisticMenu';
import CreateCompanyModal from './CreateCompanyModal';
import UpdateCompany from './UpdateCompany';

const LogisticCompany = () => {
    const [getCompany, setCompany] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [singleCompany, setSingleCompany] = useState('');
      const addNewCompany = () => {
        setVisibleNew(true);
    };
      const closeModal = () => {
          setVisibleNew(false);
          setVisibleUpdate(false);
      };
    console.log(getCompany);

    const token = getFromLocalStorage('admintoken');
    const fetchAllCompany = async () => {
        setFetching(true);
        try {
            const response = await axios.get(`${APP_BASE}${ADMIN.getAllCompany}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const { doc } = response.data;
            setCompany(doc);
            setFetching(false);
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
    useEffect(() => {
        const getLogCompany = async () => {
            setFetching(true);
            try {
                const response = await axios.get(`${APP_BASE}${ADMIN.getAllCompany}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCompany(response.data.doc);
                setFetching(false);
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        };
        getLogCompany();
    }, [token]);
    //Delete A Company
    const deleteCompany = async (record) => {
        const token = localStorage.getItem('admintoken');
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.delete(`${APP_BASE}${ADMIN.deleteSingleCompany(record._id)}`, config);
            if (res) {
                notification.success({
                    message: 'Success',
                    description: `${record.companyName} company deleted successfully`,
                });
                fetchAllCompany();
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
    const confirmDeleteCompany = (record) => {
        console.log(record);
        Modal.confirm({
            title: 'Do you want to delete this company?',
            content: 'Click yes to proceed',
            okText: 'Delete',
            // loading: resetloading,
            okType: 'primary',
            async onOk() {
                await deleteCompany(record);
            },
            onCancel() {
                return false;
            },
        });
    };
    const updateCompany = (record) => {
        setVisibleUpdate(true)
        setSingleCompany(record)
    }
    interface logistic {
        _id: any;
        name: string;
        enabled: boolean;
    }
    const logisticCol: ColumnsType<logistic> = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
        },
        {
            title:'Email Address',
            dataIndex:'email'
        },
        {
            title:'Address',
            dataIndex:'address'
        },
        {
            title:'State',
            dataIndex:'state'
        },
        {
            title:'Phone NO',
            dataIndex:'phone'
        },
        {
            title:'Selected',
            dataIndex:'enabled',
            render: (_text, record) => (
                <>{record.enabled ? <Tag color="green">YES</Tag> : <Tag color="cyan">NO</Tag>}</>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            render: (_text, record) => (
                <>
                    <LogisticMenu record={record} deleteCompany={confirmDeleteCompany} updateCompany={updateCompany}></LogisticMenu>
                </>
            ),
        },
    ];
    return (
        <>
        {
            fetching ? 
            <div className="fetchingloading">
                        <Spin />
                        <small>Fetching Logistic Companies...</small>
                    </div>
          : <div>
               <Row gutter={28} justify="space-between">
                    <Col xs={24} xl={12} lg={12}>
                        <Row gutter={28}>
                            <Col xs={10} xl={8} lg={10}>
                                <Button type="primary" onClick={addNewCompany}>
                                    Add New Company
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
          <Table  columns={logisticCol} dataSource={getCompany} />
          <CreateCompanyModal visible={visibleNew} fetchAllCompany={fetchAllCompany} closeModal={closeModal}></CreateCompanyModal>
          <UpdateCompany  visible={visibleUpdate} record={singleCompany} fetchAllCompany={fetchAllCompany} closeModal={closeModal} ></UpdateCompany>
     </div>
        }
        </>
    )
}

export default LogisticCompany;
