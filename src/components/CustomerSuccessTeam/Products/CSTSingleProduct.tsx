import React, { useEffect, useState } from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { CSTProductDetails } from '@/components/CustomerSuccessTeam/Products/CSTProduct.styled';
import { Row, Col, Button, notification, Spin } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductDetailCard from './ProductDetailCard';
import { formatAmount } from '@/utils/helpers';
import { APP_BASE, CST_API } from '@/utils/ApiList';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { getFromLocalStorage } from '@/utils/browserStorage';
import moment from 'moment';

const CSTSingleProduct = () => {
    const router = useRouter();
    const { id } = router.query;
    const token = getFromLocalStorage('csttoken');
    const [details, setdetails] = useState(null);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (id === undefined) {
                return;
            }
            try {
                setUpdating(true);
                const response = await axios.get(`${APP_BASE}${CST_API.getSingleProduct(id)}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc } = response?.data;
                setdetails(doc);
                setUpdating(false);
            } catch (err) {
                setUpdating(true);
                console.log('error', err);
                notification.error({
                    message: 'Orders Error',
                    description: err.response?.data.message,
                    duration: 0,
                });
            }
        };
        fetchProductDetails();
    }, [id, token]);
    return (
        <>
            <CSTMainLayout layoutTitle="Product Information" pageTitle="Products Details">
                <Row>
                    <Col xs={24}>
                        <Link href="/cst/products">
                            <a>
                                <Button type="dashed">
                                    <ArrowLeftOutlined /> Go Back
                                </Button>
                            </a>
                        </Link>
                    </Col>
                </Row>
                {updating && details === null ? (
                    <div className="loadingspinner">
                        <Spin />
                    </div>
                ) : (
                    <>
                        <CSTProductDetails data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <Row gutter={48}>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="slideProduct">
                                        <ProductDetailCard />
                                    </div>
                                </Col>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="basicDetails">
                                        <h3>Fashion Bag</h3>
                                        <p className="basicDetails__price">${formatAmount(details?.price)}</p>
                                        <p>{details?.id}</p>
                                        <p>{details?.category}</p>
                                        <p>Date of Upload: {moment(details?.createdAt, 'MMMM Do YYYY')}</p>
                                        {/* <small>{moment(details?.createdAt, 'MMMM Do YYYY').fromNow()}</small> */}
                                        <p>Abuja</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-5 pt-5" />
                            <Row gutter={48}>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="fullDetails">
                                        <h4>Description</h4>
                                        <p>{details?.description}</p>
                                    </div>
                                </Col>
                                <Col xs={24} xl={12} lg={12}>
                                    <div className="fullDetails">
                                        <h4>Key Features</h4>
                                        <p>{details?.keyFeatures}</p>
                                    </div>
                                    <div className="fullDetails">
                                        <h4>Specification</h4>
                                        <p>{details?.specification}</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={24} xl={24} lg={24}>
                                    <div className="fullDetails">
                                        <h4>Availability</h4>
                                        <Row gutter={48} align="middle">
                                            <Col xs={24} xl={6} lg={6}>
                                                <p>Is this product available</p>
                                            </Col>
                                            <Col xs={24} xl={16} lg={16}>
                                                <Row gutter={24}>
                                                    <Col xs={24} xl={6} lg={6}>
                                                        <Button className="prodbtn active">Yes</Button>
                                                    </Col>
                                                    <Col xs={24} xl={6} lg={6}>
                                                        <Button className="prodbtn">No</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </CSTProductDetails>
                    </>
                )}
            </CSTMainLayout>
        </>
    );
};

export default CSTSingleProduct;
