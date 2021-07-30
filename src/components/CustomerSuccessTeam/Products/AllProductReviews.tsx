import React, { useState } from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { Row, Col, notification, Button, Input, Progress } from 'antd';
import { CSTProductContainer, UserReviewLists } from './CSTProduct.styled';
import { StarFilled } from '@ant-design/icons';
import axios from 'axios';
// import star from './Star1.svg';
import { APP_BASE, MESSAGES } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import CSTReviewCard from './CSTReviewCard';
import BeautyStars from 'beauty-stars';
import { LOGGER } from '@/utils/helpers';
// import moment from 'moment';

const AllProductReviews = () => {
    const [loading, setloading] = useState(false);
    const [msg, setMsg] = useState({
        messageBody: '',
    });
    const [collapse, setCollapse] = useState(false);
    const token = getFromLocalStorage('csttoken');
    // const userData = getFromLocalStorage('cstuser') || null;

    const onChangeValue = (e: any) => {
        e.preventDefault();
        setMsg({ ...msg, [e.target.name]: e.target.value });
    };

    // const viewDetails = () => setCollapse(!collapse);

    const viewDetails2 = () => {
        LOGGER('c', collapse);
        setCollapse(!collapse);
    };

    const SendReview = async (e: any) => {
        e.preventDefault();
        const msgData = {
            body: msg.messageBody,
        };
        if (msg.messageBody === '') {
            notification.error({
                message: 'Error',
                description: 'Please, enter message',
                duration: 0,
            });
            return;
        }
        try {
            setloading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${APP_BASE}${MESSAGES}`, msgData, config);
            if (res) {
                setMsg({
                    messageBody: '',
                });
                // getAllMessages();
                requestAnimationFrame(() => {
                    setMsg({
                        messageBody: '',
                    });
                    setloading(false);
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

    return (
        <>
            <CSTMainLayout pageTitle="Product Review" layoutTitle="All Customer Review">
                <CSTProductContainer>
                    <CSTReviewCard
                        title="Fashion Bag"
                        description="Reviews for Fashion Bag"
                        image="4"
                        // action={viewDetails}
                    />
                    <div onClick={viewDetails2} onKeyDown={viewDetails2} role="button" tabIndex={0}>
                        view
                    </div>
                    {/* {`reviewDetails ${collapse ? 'activedev' : ''}`} */}
                    <div className={`reviewDetails`}>
                        <h4>Product Rating</h4>
                        <Row gutter={50} justify="space-between">
                            <Col xs={24} xl={6} lg={6}>
                                <div className="ratingscore">
                                    <div className="ratingnum">4.0/5</div>
                                    <div className="mt-2 mb-5">
                                        <BeautyStars
                                            value={5}
                                            activeColor="#ffaf38"
                                            size="11px"
                                            inactiveColor="#E2DDDD"
                                            maxStars={5}
                                            gap={3}
                                        />
                                    </div>
                                    <div className="fnsz-12 mgtop5">1223 Rating</div>
                                </div>
                            </Col>
                            <Col xs={24} xl={16} lg={16}>
                                <div className="ratingprogress">
                                    <div>
                                        <span>
                                            5 <StarFilled />
                                            <small>(447)</small>
                                        </span>
                                        <Progress
                                            percent={5 ? 100 : 0}
                                            size="small"
                                            strokeColor="#ffaf38"
                                            showInfo={false}
                                        />
                                    </div>
                                    <div>
                                        <span>
                                            4 <StarFilled /> <small>(347)</small>
                                        </span>
                                        <Progress
                                            percent={4 ? 80 : 0}
                                            size="small"
                                            strokeColor="#ffaf38"
                                            showInfo={false}
                                        />
                                    </div>
                                    <div>
                                        <span>
                                            3 <StarFilled /> <small>(247)</small>
                                        </span>
                                        <Progress
                                            percent={3 ? 60 : 0}
                                            size="small"
                                            strokeColor="#ffaf38"
                                            showInfo={false}
                                        />
                                    </div>
                                    <div>
                                        <span>
                                            2 <StarFilled /> <small>(230)</small>
                                        </span>
                                        <Progress
                                            percent={2 ? 40 : 0}
                                            size="small"
                                            strokeColor="#ffaf38"
                                            showInfo={false}
                                        />
                                    </div>
                                    <div>
                                        <span>
                                            1 <StarFilled /> <small>(147)</small>
                                        </span>
                                        <Progress
                                            percent={1 ? 20 : 0}
                                            size="small"
                                            strokeColor="#ffaf38"
                                            showInfo={false}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <h4>Product Reviews</h4>
                        <UserReviewLists>
                            <Row justify="end">
                                <Col xs={24} xl={18} lg={18}>
                                    <Row>
                                        <Col xs={24}>
                                            <BeautyStars
                                                value={3}
                                                activeColor="#ffaf38"
                                                size="14px"
                                                inactiveColor="#E2DDDD"
                                                maxStars={5}
                                                gap={4}
                                            />
                                        </Col>
                                        <Col xs={24}>
                                            <p>My review notes comes here</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={24} xl={6} lg={6}>
                                    <div className="poster_date">
                                        <div>2021-09-12</div>
                                        <div>Joe Doe</div>
                                    </div>
                                </Col>
                            </Row>
                        </UserReviewLists>
                        <div className="mailactions">
                            <form onSubmit={SendReview} autoComplete="off">
                                <Row gutter={12} justify="space-between">
                                    <Col xs={19} xl={19} lg={19}>
                                        <Input
                                            placeholder="Enter your message"
                                            name="messageBody"
                                            onChange={onChangeValue}
                                            value={msg.messageBody}
                                        />
                                    </Col>
                                    <Col xs={5} xl={5} lg={5}>
                                        <Button type="primary" onClick={SendReview} loading={loading} block>
                                            {loading ? 'Sending...' : 'Send Reply'}
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </CSTProductContainer>
            </CSTMainLayout>
        </>
    );
};

export default AllProductReviews;
