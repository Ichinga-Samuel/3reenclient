import React, { useState } from 'react';
import VendorLayout from '../Layout/VendorLayout';
import axios from 'axios';
import { APP_BASE, VENDOR_PRODUCT } from '@/utils/ApiList';
import { Row, Col, Upload, Input, Button, notification } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getFromLocalStorage } from '@/utils/browserStorage';

// const { Option } = Select;
const NewProduct = () => {
    const title = 'New Product';
    const router = useRouter();
    const token = getFromLocalStorage('token');
    // const [product, createProduct] = useState({
    //     nameOfProduct: '',
    //     price: '',
    //     description: '',
    //     keyFeatures: '',
    //     specification: '',
    //     category: '',
    // });
    interface fileList {
        uid: string;
        name: string;
        status: string;
        url: string;
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setloading] = useState(false);
    const [fileList, setFileList] = useState([]);

    const onSubmit = async (data: any) => {
        const { name, price, description, category, specification, keyFeatures } = data;
        setloading(true);
        const formData = new FormData();
        const files = [...fileList];
        files.forEach((eachFile) => {
            formData.append('images', eachFile.name);
        });
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('keyFeatures', keyFeatures);
        formData.append('category', category);
        formData.append('specification', specification);
        console.log(data);
        try {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${APP_BASE}${VENDOR_PRODUCT.createProduct}`, formData, config);
            // const res = await axios.post('https://treen-shop-api.herokuapp.com/api/v1/products', formData, config);
            console.log(res.data);
            if (res) {
                notification.close('error');
                requestAnimationFrame(() => {
                    reset();
                    setloading(false);
                });
                router.push('/vendor/inventory/allproducts');
                notification.success({
                    key: 'success',
                    message: 'Success',
                    description: 'Product Created Successfully',
                    duration: 15,
                });
            }
        } catch (error) {
            setloading(false);
            console.log('error', error.response);
            const { data } = error.response;
            notification.error({
                key: 'error',
                message: 'Create Error',
                description: data?.message,
                duration: 0,
            });
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
                    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <Row gutter={24}>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Enter Name of Product</label>
                                    <Input
                                        placeholder="Enter Name of Product"
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <span className="error">Product Name is required</span>}
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Price of Product</label>
                                    <Input placeholder="Price of Product" {...register('price', { required: true })} />
                                    {errors.price && <span className="error">Product Price is required</span>}
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Key Feature</label>
                                    <Input placeholder="Key Feature" {...register('keyFeatures', { required: true })} />
                                    {errors.keyFeatures && <span className="error">Key Feature is required</span>}
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName">Specification</label>
                                    <Input
                                        placeholder="Enter Specification"
                                        {...register('specification', { required: true })}
                                    />
                                    {errors.specification && <span className="error">Specification is required</span>}
                                </div>
                            </Col>
                            <Col xs={24} xl={12} lg={8}>
                                <div className="form-group">
                                    <label htmlFor="productName" style={{ display: 'flex' }}>
                                        Category
                                    </label>
                                    {/* <Select style={{ width: '100%' }} {...register('category', { required: true })}>
                                        <Option value="Electronics">Electronics</Option>
                                    </Select> */}
                                    <select {...register('category')}>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Phone">Phone</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                    {errors.category && <span className="error">Category is required</span>}
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col xs={24} xl={24} lg={24}>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <Input.TextArea
                                        placeholder="Enter Product Description"
                                        showCount
                                        maxLength={250}
                                        {...register('description', { required: true })}
                                    />
                                    {errors.description && (
                                        <span className="error">Product Description is required</span>
                                    )}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} xl={24} lg={24}>
                                <div className="form-group">
                                    <label htmlFor="productImages">Upload Product Images</label>
                                    <ImgCrop rotate>
                                        <Upload
                                            //<fileList>
                                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
                                <Button loading={loading} type="primary" onClick={handleSubmit(onSubmit)}>
                                    CREATE PRODUCT
                                </Button>
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
