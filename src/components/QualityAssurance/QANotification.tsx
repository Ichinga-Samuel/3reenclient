import React, { useState } from 'react';
import { Drawer, Spin } from 'antd';
import { CaretRightOutlined, LoadingOutlined } from '@ant-design/icons';

const QANotification = ({ visible, close }) => {
    const [loading, setloading] = useState(false);
    const [content, setContent] = useState('');

    const fetchMore = () => {
        setloading(true);
        setContent('Refreshing Notifications');
        setTimeout(() => {
            setloading(false);
        }, 3000);
    };
    return (
        <div className="notification">
            <Drawer
                title="Notifications"
                width={`25%`}
                zIndex={1}
                maskClosable={true}
                closable={false}
                onClose={close}
                visible={visible}
                footer={
                    <div
                        className="notify_footer"
                        onClick={fetchMore}
                        onKeyPress={fetchMore}
                        role="button"
                        tabIndex={0}
                    >
                        <span>
                            Load More <CaretRightOutlined style={{ paddingLeft: '5px' }} />
                        </span>
                    </div>
                }
            >
                <Spin spinning={loading} indicator={<LoadingOutlined />} tip={content} size="small">
                    <div className="spin-content">
                        <div className="notify">
                            <div className="notify__head"></div>
                            <div className="notify__details">
                                <h3>Order delivered</h3>
                                <div className="notify__time-items">
                                    <div>35mins ago</div>&nbsp; |&nbsp; <div>3 Items</div>
                                </div>
                            </div>
                            <div className="notify__period">
                                <h5>Today</h5>
                            </div>
                        </div>
                        <div className="notify">
                            <div className="notify__head"></div>
                            <div className="notify__details">
                                <h3>Order Placed</h3>
                                <div className="notify__time-items">
                                    <div>7hrs ago</div>&nbsp; |&nbsp; <div>1 Item</div>
                                </div>
                            </div>
                            <div className="notify__period">
                                <h5>Today</h5>
                            </div>
                        </div>
                    </div>
                </Spin>
            </Drawer>
        </div>
    );
};

export default QANotification;
