import React from 'react';
import { ProductVisits } from '@/components/AdminPages/icons/Icons';

const DashBoardMetrics = () => {
    return (
        <div>
            <div className="topDashboardMetrics">
                <div>
                    <ProductVisits />
                </div>
                <div className="merticsText">
                    <h3>2656</h3>
                    <p>Product visits</p>
                </div>
            </div>
        </div>
    );
};

export default DashBoardMetrics;
