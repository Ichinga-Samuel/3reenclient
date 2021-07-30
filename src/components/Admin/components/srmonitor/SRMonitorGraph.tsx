import React from 'react';
import { Bar } from 'react-chartjs-2';
import { SRGraphCard } from '@/components/Admin/styles/AdminStyle.styled';
import { Row, Col, Select } from 'antd';

const { Option } = Select;

const SRMonitorGraph = (props) => {
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Septeber',
            'October',
            'November',
            'December',
        ],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgba(255, 175, 56, 0.8)',
                borderColor: 'none',
                borderWidth: 0.5,
                data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 100, 200],
            },
        ],
    };
    return (
        <>
            <SRGraphCard>
                <div className="title">
                    <h4>Statistics for {props?.salename}</h4>
                </div>
                <Row justify="space-between">
                    <Col xs={12} xl={12} lg={12}>
                        <p>Barchart Showing Number of Referrals</p>
                    </Col>
                    <Col xs={6} xl={6} lg={6} style={{ textAlign: 'right' }}>
                        <Select defaultValue="Monthly" style={{ width: '100px' }}>
                            <Option value="daily">Daily</Option>
                            <Option value="weekly">Weekly</Option>
                            <Option value="monthly">Monthly</Option>
                            <Option value="quarterly">Quarterly</Option>
                            <Option value="year">Yearly</Option>
                        </Select>
                    </Col>
                </Row>
                <div className="graph">
                    <Bar data={data} height={70} width={20} options={{ maintainAspectRatio: false }} type="" />
                </div>
            </SRGraphCard>
        </>
    );
};

export default SRMonitorGraph;
