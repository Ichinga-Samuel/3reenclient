import React from 'react';
import { Col, Divider, Row } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const OrderPaymentSummary = ({ total, shipping, discount }) => {
    const allTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(discount);
    console.log(total)
    return (
        <div className="carttotal">
            <Row gutter={28} align="middle" justify="space-between" className="pb">
                <Col xs={12} xl={12} lg={12}>
                    <span>Sub Total</span>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <p>
                        {CURRENCY}
                        {formatAmount(total)}
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
                        {formatAmount(shipping)}
                    </p>
                </Col>
            </Row>
            <Row gutter={28} align="middle" justify="space-between" className="pb">
                <Col xs={12} xl={12} lg={12}>
                    <span>Discount</span>
                </Col>
                <Col xs={12} xl={12} lg={12}>
                    <p className="discount">
                        {CURRENCY}-{formatAmount(discount)}
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
                        {formatAmount(allTotal)}
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default OrderPaymentSummary;
