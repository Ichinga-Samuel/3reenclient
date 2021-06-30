import React from 'react';
import { Row, Col } from 'antd';
import { CSTReviewHolder } from '@/components/CustomerSuccessTeam/Products/CSTProduct.styled';
import { RightOutlined } from '@ant-design/icons';

const CSTReviewCard = ({ title, description, image }) => {
    // console.log('ac', action);
    return (
        <>
            <CSTReviewHolder>
                <Row gutter={26}>
                    <Col xs={8} xl={3} lg={3}>
                        <div className="imageholder">
                            <img src={image} alt={title} />
                        </div>
                    </Col>
                    <Col xs={16} xl={16} lg={16}>
                        <div className="details">
                            <h3>{title}</h3>
                            <h4>{description}</h4>
                        </div>
                    </Col>
                    <Col xs={24} xl={4} lg={4}>
                        <div className="rwicon">
                            <RightOutlined />
                        </div>
                    </Col>
                </Row>
            </CSTReviewHolder>
        </>
    );
};

export default CSTReviewCard;
