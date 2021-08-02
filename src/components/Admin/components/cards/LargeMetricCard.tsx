import React from 'react';
import { LargeMHolder, SmallCircle } from '@/components/Admin/styles/AdminStyle.styled';
import { Row, Col, Button } from 'antd';
import { CURRENCY, formatAmount } from '@/utils/helpers';

const LargeMetricCard = (props) => {
    const title = props.cardTitle.includes('Orders');
    const titleU = props.cardTitle.includes('User');
    const titleR = props.cardTitle.includes('Revenue');

    const theme = {
        main: props.circleColor,
    };

    return (
        <LargeMHolder>
            <Row align="middle" justify="space-between">
                <Col>{props.cardIcon}</Col>
                <Col>
                    <SmallCircle theme={theme} />
                </Col>
            </Row>
            <Row>
                <Col xs={24} xl={24} lg={24}>
                    <h3>{props.cardTitle}</h3>
                    <span>
                        {titleR ? CURRENCY : ''} {titleR ? formatAmount(props.count) : props.count}
                        {title ? ' Orders Completed' : ''}
                        {titleU ? ' Users' : ''}
                    </span>
                </Col>
            </Row>
            {title ? (
                <>
                    <div className="bdetails__btn">
                        <Row>
                            <Col xs={24} xl={24} lg={24} style={{ marginBottom: '1rem' }}>
                                <Button block type="default">
                                    View Audit
                                </Button>
                            </Col>
                            <Col xs={24} xl={24} lg={24}>
                                <Button block type="default">
                                    View Inventory
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </>
            ) : (
                <>
                    <div className="bdetails">
                        <div>
                            <h5>{props.bTitle}</h5>
                            <h4>{props.bCount1}</h4>
                        </div>
                        <div>
                            <h5>{props.bTitle2}</h5>
                            <h4>{props.bCount2}</h4>
                        </div>
                    </div>
                </>
            )}
        </LargeMHolder>
    );
};

export default LargeMetricCard;
