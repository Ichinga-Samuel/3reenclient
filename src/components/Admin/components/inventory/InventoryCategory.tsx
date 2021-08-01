import React, { useState } from 'react';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Input, notification, Row, Spin, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import CreateCategoryModal from './CreateCategoryModal';
import { CategoryMenu } from './CategoryMenu';
const InventoryCategory = () => {
    //Fetch The API
    const [category, setCategory] = useState([]);
    const [visibleNew, setVisibleNew] = useState(false);
    const [loading,  setLoading] = useState(false);
    const closeModal = () => {
        setVisibleNew(false);
    };
    const addNewCategory = () => {
        setVisibleNew(true);
    };
    const deleteCategory = async (id) => {
        console.log(`${APP_BASE}${ADMIN.delSingleCat(id)}`)
        const token = localStorage.getItem('supertoken');
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }
            const res = await axios.delete(`${APP_BASE}${ADMIN.delSingleCat(id)}`,config)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${APP_BASE}${ADMIN.getAllCategory}`)
                const {doc} = response.data;
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
        }
        fetchCategory();
    }, [])    
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
            render: (_text) => (
                <>
                    <CategoryMenu deleteCategory={deleteCategory}/>
                </>
            ),
        },
    ];
    return (
        <>
        <br></br>
            <h3>Categories Operations will be here</h3>
           {
               loading ? 
               <div className="fetchingloading">
               <Spin />
               <small>Fetching Category...</small>
           </div>
               : 
               <div>
               <h2>All Categories</h2>
               <Row gutter={28} justify="space-between">
                   <Col xs={24} xl={12} lg={12}>
                       <Row gutter={28}>
                           <Col xs={10} xl={8} lg={10}>
                               <Button type="primary" block onClick={addNewCategory} >
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
               <br></br>
               <Table
               columns={categoryCol}
               dataSource={category}
               >
               </Table>
               <CreateCategoryModal visible={visibleNew} closeModal={closeModal} />
               </div>
           }
        </>
    );
};

export default InventoryCategory;
