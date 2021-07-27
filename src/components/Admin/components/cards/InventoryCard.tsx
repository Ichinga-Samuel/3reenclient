import React from 'react';
import { InventoryCardHolder } from '@/components/Admin/styles/AdminStyle.styled';
import { Row, Col, Button } from 'antd';
import { truncateText } from '@/utils/helpers';

const InventoryCard = (props) => {
    return (
        <InventoryCardHolder>
            <div className="image">
                {props.product?.images.length <= 0 ? (
                    <img src="/img/no-image.png" alt="no-pict" />
                ) : (
                    <img src={props.product?.images[0]} alt={props.product?.name} />
                )}
            </div>
            <div className="content">
                <h3>{props.product?.name}</h3>
                <p>{truncateText(props.product?.description, '35')}</p>
                <Row justify="space-between">
                    <Col>
                        <Button disabled>Available For Purchase</Button>
                    </Col>
                    <Col>
                        <Button loading={props.updating} onClick={() => props.updateStatus(props?.product)}>
                            Update
                        </Button>
                    </Col>
                </Row>
            </div>
        </InventoryCardHolder>
    );
};

export default InventoryCard;
