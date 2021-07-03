import React from 'react';
import { Row, Col } from 'antd';
import { CSTProductHolder } from '@/components/CustomerSuccessTeam/Products/CSTProduct.styled';

const CSTProductCard = ({ productName, image, id, action }) => {
    return (
        <>
            <CSTProductHolder>
                <Row gutter={26}>
                    <Col xs={8} xl={3} lg={3}>
                        <div className="imageholder">
                            <img src={image} alt={productName} />
                        </div>
                    </Col>
                    <Col xs={16} xl={16} lg={16}>
                        <div className="details">
                            <h3>{productName}</h3>
                            <h4>{id}</h4>
                        </div>
                    </Col>
                    <Col xs={24} xl={4} lg={4}>
                        <div className="actbtn" onClick={action} onKeyDown={action} role="button" tabIndex={0}>
                            View Product
                        </div>
                    </Col>
                </Row>
            </CSTProductHolder>
        </>
    );
};

export default CSTProductCard;
