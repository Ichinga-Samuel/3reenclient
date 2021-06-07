import React, { useState } from 'react';
import VendorLayout from '../Layout/VendorLayout';
import axios from 'axios';
import { APP_BASE, VENDOR_PRODUCT } from '@/utils/ApiList';
import { Row, Col, Upload, Input, Select, Button } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

const { Option } = Select;
const NewProduct = () => {
    const title = 'New Product';
    const [product, createProduct] = useState({
        nameOfProduct: '',
        price: '',
        description: '',
        keyFeatures: '',
        specification: '',
        category: '',
    });
    //Set The Image State
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    // const [file, setFile] = useState([]);
    // const [loading, setloading] = useState(false);
    // const [imageURL, setimageURL] = useState(null);

    //Destructure
    const { nameOfProduct, price, description, keyFeatures, specification, category } = product;
    // const onChange = (e) => {
    //     createProduct({ ...product, [e.target.name]: e.target.value });
    //     const file = e.target.files;
    //     setFile(file);
    // };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        const files = [...file];
        files.forEach((eachFile) => {
            formData.append('images', eachFile);
        });
        formData.append('name', nameOfProduct);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('keyFeatures', keyFeatures);
        formData.append('category', category);
        formData.append('specification', specification);
        createProduct({
            nameOfProduct: '',
            price: '',
            description: '',
            keyFeatures: '',
            specification: '',
            category: '',
        });
        const token = localStorage.getItem('token');
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${APP_BASE}${VENDOR_PRODUCT.createProduct}`, formData, config);
            // const res = await axios.post('https://treen-shop-api.herokuapp.com/api/v1/products', formData, config);
            console.log(res.data);
            if (res) {
                alert('Working');
            }
        } catch (error) {
            console.log('error', error.response);
        }
    };

    // const getBase64 = (img: any, callback: any) => {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    // };

    const onPreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div className="product" data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <div className="newProduct">
                    {/* <h2>Create New Product</h2> */}
                    <form method="POST" onSubmit={onSubmit}>
                        <Row gutter={24}>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Enter Name of Product</label>
                                    <Input placeholder="Enter Name of Product" />
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Price of Product</label>
                                    <Input placeholder="Price of Product" />
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Key Feature</label>
                                    <Input placeholder="Key Feature" />
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Specification</label>
                                    <Input placeholder="Enter Specification" />
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName" style={{ display: 'flex' }}>
                                        Category
                                    </label>
                                    <Select style={{ width: '100%' }}>
                                        <Option value="Cat1">Cat 1</Option>
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col xs={24} xl={24} lg={24}>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <Input.TextArea placeholder="Enter Product Description" showCount maxLength={250} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} xl={24} lg={24}>
                                <div className="form-group">
                                    <label htmlFor="productImages">Upload Product Images</label>
                                    <ImgCrop rotate>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onChange={onChange}
                                            onPreview={onPreview}
                                        >
                                            {fileList.length < 5 && '+ Upload'}
                                        </Upload>
                                    </ImgCrop>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} xl={12} lg={12}>
                                <Button type="primary">CREATE PRODUCT</Button>
                            </Col>
                        </Row>
                        {/* <div>
                            <input
                                type="text"
                                className="input-product"
                                onChange={onChange}
                                name="nameOfProduct"
                                value={nameOfProduct}
                                placeholder="Enter Name of Product"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                className="input-product"
                                onChange={onChange}
                                name="price"
                                value={price}
                                placeholder="Enter Price of Product"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input-product"
                                onChange={onChange}
                                name="description"
                                value={description}
                                placeholder="Enter Description"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input-product"
                                onChange={onChange}
                                name="keyFeatures"
                                value={keyFeatures}
                                placeholder="Enter Key Features"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input-product"
                                onChange={onChange}
                                name="specification"
                                value={specification}
                                placeholder="Enter Specification"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input-product"
                                onChange={onChange}
                                name="category"
                                value={category}
                                placeholder="Enter Category"
                                required
                            />
                        </div> */}
                        {/* <div className="form-data">
                            <label htmlFor="file">Select File</label>
                            <input className="input-file" type="file" multiple name="file" onChange={onChange} />
                        </div>
                        <input type="submit" value="SUBMIT" className="submit-btn" /> */}
                    </form>
                </div>
            </div>
        </VendorLayout>
    );
};

export default NewProduct;
