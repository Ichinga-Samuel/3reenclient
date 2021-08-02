import React, { useCallback, useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { Alert, Button, Col, Input, notification, Row } from 'antd';
import { ProfileIcon } from '@/utils/Icons';
import moment from 'moment';
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons';
import axios from 'axios';
import { APP_BASE, MESSAGES } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';

const AdminMessages = () => {
    const [loading, setloading] = useState(false);
    const [fetching, setfetching] = useState(false);
    const [allMessages, setAllMessage] = useState([]);
    const [msg, setMsg] = useState({
        messageBody: '',
    });

    const token = getFromLocalStorage('admintoken');
    const adminData = getFromLocalStorage('admindetails') || null;
    const loggedAdmin = JSON.parse(adminData);

    const onChangeValue = (e: any) => {
        e.preventDefault();
        setMsg({ ...msg, [e.target.name]: e.target.value });
    };

    const getAllMessages = useCallback(async () => {
        setfetching(true);
        try {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(
                `${APP_BASE}${MESSAGES.getMessage('d93bdced-58a1-4985-976f-ddf4ff582fc8')}`,
                config,
            );
            if (res) {
                setAllMessage(res.data?.messages);
                notification.close('error');
            }
        } catch (error) {
            setloading(false);
            const { data } = error?.response;
            notification.error({
                key: 'error',
                message: 'Message Error',
                description: data?.message,
                duration: 0,
            });
        }
    }, [token]);

    const SendMessage = async (e: any) => {
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
            const res = await axios.post(`${APP_BASE}${MESSAGES.sendMessage(loggedAdmin._id)}`, msgData, config);
            if (res) {
                setMsg({
                    messageBody: '',
                });
                getAllMessages();
                requestAnimationFrame(() => {
                    setMsg({
                        messageBody: '',
                    });
                    setloading(false);
                });
            }
        } catch (error) {
            setloading(false);
            const { data } = error.response;
            notification.error({
                key: 'error',
                message: 'Create Error',
                description: data?.message,
                duration: 0,
            });
        }
    };

    useEffect(() => {
        getAllMessages();
    }, []);

    const title = 'Messages';
    return (
        <DefaultLayout browserTitle={title} breadTitle={title}>
            <Row>
                <Col xs={24} xl={6} lg={8}>
                    <div className="mailleft">
                        <div className="mailleft__title">
                            <h3>Inbox</h3>
                        </div>
                        <ul>
                            <li className="active">
                                <ProfileIcon />
                                <div>
                                    <span>{loggedAdmin?.fullName}</span>
                                    <span>{'Admin Personnel'}</span>
                                </div>
                            </li>
                            <li>
                                <ProfileIcon />
                                <div>
                                    <span>Gold Henniel</span>
                                    <span>Admin 002</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={24} xl={18} lg={18}>
                    <div className="mailright">
                        <div className="mailmessages">
                            {fetching ? (
                                <>
                                    {allMessages.length === 0 ? (
                                        <Alert message="You don't have New Message" type="warning" showIcon />
                                    ) : (
                                        <>
                                            {allMessages.map((mes) => {
                                                return (
                                                    <div
                                                        className="mailmessages__chat"
                                                        data-aos="fade-right"
                                                        data-aos-delay="2s"
                                                        data-aos-duration="1s"
                                                        key={mes._id}
                                                    >
                                                        <div>
                                                            <p>{mes.body}</p>
                                                        </div>
                                                        <div className="mailtime">
                                                            {moment(mes.timeStamp).format('DD-MM-YYYY hh:mm A')}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )}
                                </>
                            ) : (
                                <div>No New Messages</div>
                            )}
                        </div>
                        <div className="mailactions">
                            <form onSubmit={SendMessage}>
                                <Row gutter={12} justify="space-between">
                                    <Col xs={3} xl={3} lg={3}>
                                        <div className="uploadfiles">
                                            <PaperClipOutlined />
                                        </div>
                                    </Col>
                                    <Col xs={16} xl={16} lg={16}>
                                        <Input
                                            placeholder="Enter your message"
                                            name="messageBody"
                                            onChange={onChangeValue}
                                            value={msg.messageBody}
                                        />
                                    </Col>
                                    <Col xs={5} xl={5} lg={5}>
                                        <Button type="primary" onClick={SendMessage} loading={loading} block>
                                            {loading ? 'Sending...' : 'Message'} <SendOutlined />
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </DefaultLayout>
    );
};

export default AdminMessages;
