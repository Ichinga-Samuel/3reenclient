import React from 'react';
import '../../VendorDashboard/VendorDashboard.styled';
import { Col } from 'antd';

const TopSellingProducts = ({ serialNo, numberSold, productName, price }) => {
    return (
        <div>
            <div className="topSellingProducts">
                <div className="topSellingCounterContainer">
                    <div className="topSellingCounterNumber">{serialNo}</div>
                    <p>Sold {numberSold} items</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div className="topSellingImageContainer">
                        <img
                            src="https://www.bing.com/th?id=OIP.RJDdPc2cPEjqP4BbRl1PPAHaE8&w=130&h=102&c=8&rs=1&qlt=90&pid=3.1&rm=2"
                            alt=""
                        />
                    </div>
                    <Col style={{ flex: 1 }}>
                        <h4>{productName}</h4>
                        <p>{price}</p>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProducts;
