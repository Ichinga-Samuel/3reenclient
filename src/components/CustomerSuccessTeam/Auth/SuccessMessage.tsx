import React from 'react';
import { Row, Col, Button } from 'antd';

const SuccessMessage = ({ successTitle, description, action, loading }) => {
    return (
        <div>
            <div className="emailsent">
                <div className="emailsent__message">
                    <div className="icon">
                        <img src="/img/successIcon.png" alt="success" />
                    </div>
                    <Row>
                        <Col span={24}>
                            <h3>{successTitle}</h3>
                            <h4>{description}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Button loading={loading} block type="primary" onClick={action}>
                                PROCEED
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;
