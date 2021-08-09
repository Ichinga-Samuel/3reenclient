import React from 'react';
import { Col, Divider, Row } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const OrderPaymentSummary = () => {
    return (
        <div className="carttotal">
            <Row gutter={28} align="middle" justify="space-between" className="pb">
                <Col xs={12} xl={12} lg={12}>
                    <span>Sub Total</span>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <p>
                        {CURRENCY}
                        {formatAmount('24000')}
                    </p>
                </Col>
            </Row>
            <Row gutter={28} align="middle" justify="space-between" className="pb">
                <Col xs={12} xl={12} lg={12}>
                    <span>Shipping</span>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <p>
                        {CURRENCY}
                        {formatAmount('2000')}
                    </p>
                </Col>
            </Row>
            <Row gutter={28} align="middle" justify="space-between" className="pb">
                <Col xs={12} xl={12} lg={12}>
                    <span>Discount</span>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <p className="discount">
                        {CURRENCY}-{formatAmount('500')}
                    </p>
                </Col>
            </Row>
            <Divider />
            <Row gutter={28} align="middle" justify="space-between" className="pb">
                <Col xs={12} xl={12} lg={12}>
                    <strong>TOTAL</strong>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <p className="total">
                        {CURRENCY}
                        {formatAmount('25500')}
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default OrderPaymentSummary;
