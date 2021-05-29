import React from 'react';
import './VendorDashboard.styled';
import { Col } from 'reactstrap';

const TopSellingProducts = () => {
    return (
        <div>
            <div className="topSellingProducts">
                <div className="topSellingCounterContainer">
                    <div className="topSellingCounterNumber">2</div>
                    <p>Sold 67 items</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="topSellingImageContainer">
                        <img
                            className="topSellingImage"
                            src="https://www.bing.com/th?id=OIP.RJDdPc2cPEjqP4BbRl1PPAHaE8&w=130&h=102&c=8&rs=1&qlt=90&pid=3.1&rm=2"
                            alt=""
                        />
                    </div>
                    <Col style={{ flex: 1 }}>
                        <h4>Red button player</h4>
                        <p>25:00</p>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProducts;
