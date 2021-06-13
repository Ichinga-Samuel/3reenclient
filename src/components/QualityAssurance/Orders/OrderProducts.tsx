import React, { useState } from 'react';
import { Table, Collapse } from 'antd';
import { formatAmount } from '@/utils/helpers';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const { Panel } = Collapse;

const OrderProducts = ({ productOrder }) => {
    const ProductInOrder = productOrder || [];
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('default.jpg');

    const ViewImage = (record: any) => {
        setOpen(true);
        setImage(record.images);
        console.log(record);
    };

    const getAllDetails = ProductInOrder.map((detail: any) => {
        return {
            ...detail,
            name: detail.product.name,
            images: detail.product.images[0],
            specification: detail.product.specification,
            category: detail.product.category,
            averageRating: detail.product.averageRating,
        };
    });

    const OrderColum = [
        {
            title: 'Product Image',
            dataIndex: 'images',
            render: (_text: any, record: any) => (
                <>
                    <a href="#" onClick={() => ViewImage(record)}>
                        <img src={record.images} alt={record.name} />
                    </a>
                </>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'totalPrice',
            render: (_text: any, record: any) => <>{formatAmount(record.totalPrice)}</>,
        },
        {
            title: 'Specification',
            dataIndex: 'specification',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Average Rating',
            dataIndex: 'averageRating',
        },
    ];

    return (
        <>
            {open && <Lightbox mainSrc={image} onCloseRequest={() => setOpen(false)} />}
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Products In Order" key="1">
                    <Table rowKey="_id" columns={OrderColum} dataSource={getAllDetails} />
                </Panel>
            </Collapse>
        </>
    );
};

export default OrderProducts;
