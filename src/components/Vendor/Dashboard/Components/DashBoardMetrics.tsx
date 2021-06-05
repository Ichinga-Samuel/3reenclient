import { formatNumber } from '@/utils/helpers';
import React from 'react';

const DashBoardMetrics = ({ icon, metricName, metricCount }) => {
    return (
        <>
            <div className="topDashboardMetrics">
                <div className="count">{icon}</div>
                <div className="merticsText">
                    <h3>{formatNumber(metricCount)}</h3>
                    <p>{metricName}</p>
                </div>
            </div>
        </>
    );
};

export default DashBoardMetrics;
