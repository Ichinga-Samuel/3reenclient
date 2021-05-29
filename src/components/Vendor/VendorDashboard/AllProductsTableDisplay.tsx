import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AllProductsTableDisplay = () => {
    return (
        <div>
            <div>
                <Row className="allProductsTableHeader">
                    <Col>
                        <input style={{ float: 'left' }} className="productHeaderInput" type="checkbox"></input>
                    </Col>
                    <Col>
                        <h3 style={{ float: 'left' }}>Item name</h3>
                    </Col>
                    <Col>
                        <h3>Status</h3>
                    </Col>
                    <Col>
                        <h3>Quantity</h3>
                    </Col>
                    <Col>
                        <h3>Views</h3>
                    </Col>
                    <Col>
                        <h3>Sold</h3>
                    </Col>
                    <Col>
                        <h3>Price</h3>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
            <div>
                <Row className="allProductsTableContent">
                    <Col>
                        <input style={{ float: 'left' }} type="checkbox"></input>
                    </Col>
                    <Col>
                        <h4 style={{ float: 'left' }}>Yellow Tshirt, Nike cap</h4>
                    </Col>
                    <Col>
                        <h4 className="productActive">Active</h4>
                    </Col>
                    <Col>
                        <h4>25</h4>
                    </Col>
                    <Col>
                        <h4>645</h4>
                    </Col>
                    <Col>
                        <h4>53</h4>
                    </Col>
                    <Col>
                        <h4>N1245</h4>
                    </Col>
                    <Col>
                        <h4 className="productContext">:</h4>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AllProductsTableDisplay;
