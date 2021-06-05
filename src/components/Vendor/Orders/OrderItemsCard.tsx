import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;

const OrderItemsCard = ({ status, processDate }) => {
    return (
        <Steps current={1} progressDot>
            <Step title={status} description={processDate} />
            <Step title="Processed" description="2 Jan" />
            <Step title="Dispatched" description="2 Jan" />
            <Step title="Delivered" description="2 Jan" />
        </Steps>
    );
};

export default OrderItemsCard;
