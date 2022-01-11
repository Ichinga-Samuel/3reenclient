import React, { useState, useEffect } from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { Button, Select, Pagination, notification, Table, Tag } from 'antd';
import { SearchOutlined, DeleteFilled } from '@ant-design/icons';
import axios from 'axios';
import { TableMenu } from '@/utils/TableHelpers';
import { ColumnsType } from 'antd/es/table';
import { formatAmount } from '@/utils/helpers';
import { APP_BASE, VENDOR_PRODUCT } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';

const { Option } = Select;

const VendorProducts = () => {
    const title = 'All Products';

    interface productData {
        id: number;
        key: number;
        status: string;
        numViews: number | string;
        productSold: number | string;
        price: any;
        quantity: number | string;
        name: string;
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setloading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [productData, setProductData] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [total, setTotal] = useState(0);

    const token = getFromLocalStorage('token');

    const filterProduct = async () => {
        setloading(true);
        setFetching(true);
        await axios
            .post(`${APP_BASE}${VENDOR_PRODUCT.searchProduct}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response: any) => {
                const { doc, data, pages, results } = response;
                if (data.status === 'success') {
                    console.log('record', productData);
                    setPagination(pages);
                    setProductData(doc);
                    setTotal(results);
                    setFetching(false);
                    setloading(false);
                }
            })
            .catch((err) => {
                setFetching(false);
                setloading(false);
                setProductData([]);
                notification.error({
                    message: 'Error',
                    description: err?.response?.data.message,
                    duration: 0,
                });
            });
    };

    useEffect(() => {
        const fetchAllProducts = async () => {
            setloading(true);
            try {
                const response = await axios.get(`${APP_BASE}${VENDOR_PRODUCT.getAllProducts}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { products, results, pages } = response.data;
                console.log(response.data)
                setPagination(pages);
                setProductData(products);
                setTotal(results);
                // notification.success({
                //     message: 'Success',
                //     description: `${results} Products Fetched Successfully`,
                //     duration: 5,
                // });
                console.log('res', response);
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            } catch (err) {
                console.log('error', err.response);
                const { data } = err.response;
                notification.error({
                    message: 'Product Error',
                    description: data?.message,
                    duration: 15,
                });
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            }
        };
        // return () => {};
        fetchAllProducts();
    }, []);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    // const duplicateItem = (record) => {
    //     console.log('record', record.id);
    // };

    // const menu = (
    //     <Menu>
    //         <Menu.Item key="0">
    //             <a href="https://www.antgroup.com">Quick View Items</a>
    //         </Menu.Item>
    //         <Menu.Item key="1">
    //             <a href="https://www.aliyun.com">Edit Item</a>
    //         </Menu.Item>
    //         <Menu.Item key="2" onClick={duplicateItem}>
    //             <Link href="#">Duplicate Item</Link>
    //         </Menu.Item>
    //         <Menu.Item key="3">
    //             <Link href="#">Make Inactive</Link>
    //         </Menu.Item>
    //         <Menu.Item key="4">
    //             <Link href="#">Boost Visibility</Link>
    //         </Menu.Item>
    //     </Menu>
    // );

    const onTableMenuClicked = (record) => {
        console.log(record, 'record');
    };

    const productColumns: ColumnsType<productData> = [
        {
            title: 'Item Name',
            dataIndex: 'name',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status) => <>{status === 'Active' ? <Tag color="#FFAF38">Active</Tag> : ''}</>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'View',
            dataIndex: 'numViews',
        },
        {
            title: 'Sold',
            dataIndex: 'productSold',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (_text, record) => <>{formatAmount(record.price)}</>,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'operation',
            width: 100,
            align: 'center',
            render: (_text, record) => <TableMenu record={record} onTableMenuClicked={onTableMenuClicked} />,
        },
    ];

    // <Dropdown overlay={menu} trigger={['click']}>
    //     <a
    //         href="#"
    //         className="ant-dropdown-link"
    //         onClick={(e) => e.preventDefault()}
    //         onKeyDown={(e) => e.preventDefault()}
    //     >
    //         <MoreOutlined />
    //     </a>
    // </Dropdown>;

    // const fakeProduct: productData[] = [];
    // for (let i = 0; i < 46; i++) {
    //     fakeProduct.push({
    //         key: 0,
    //         id: i,
    //         name: `Yellow Tshirt, Nike Cap ${i}`,
    //         status: 'Active',
    //         quantity: 32,
    //         productView: 400,
    //         productSold: 54,
    //         productPrice: 5040,
    //     });
    // }
    const onSelectChange = (selectedRowKeys: any, record: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        console.log('selected record', record);
        setSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    const deleteSelected = () => {
        alert(hasSelected);
    };

    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div className="product" data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <div className="product__filter">
                    <div className="product__view-filters">
                        <Button loading={fetching} type="primary" onClick={filterProduct}>
                            View Filters
                        </Button>
                    </div>
                    <div className="product__search">
                        <SearchOutlined />
                        <input
                            className="search-product"
                            type="text"
                            name=""
                            id=""
                            placeholder="Search By Names or Product By ID"
                        />
                    </div>
                    <div className="product__status">
                        <span>Status</span>
                        <Select defaultValue="Delivered" style={{ width: 150 }} onChange={handleChange}>
                            <Option value="Delivered">Delivered</Option>
                        </Select>
                    </div>
                </div>
                {/* Export && Pagination */}
                <div className="export">
                    <div className="export__options">
                        <div>
                            {!hasSelected ? (
                                <Button type="primary">Export all</Button>
                            ) : (
                                <Button type="primary">Export {hasSelected ? `${selectedRowKeys.length}` : ''}</Button>
                            )}
                        </div>
                        <div>
                            <Button type="primary">Archive</Button>
                        </div>
                        <div>
                            <Button type="primary" onClick={deleteSelected}>
                                <DeleteFilled /> Delete
                            </Button>
                        </div>
                    </div>
                    <div className="pagination">
                        <Pagination
                            size="small"
                            total={pagination}
                            defaultPageSize={10}
                            defaultCurrent={1}
                            showTotal={(_total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`}
                        />
                    </div>
                </div>
                <div className="productdata">
                    <Table<productData>
                        rowSelection={rowSelection}
                        rowKey="id"
                        loading={loading}
                        columns={productColumns}
                        dataSource={productData}
                        pagination={false}
                    />
                </div>
            </div>
        </VendorLayout>
    );
};

export default VendorProducts;
