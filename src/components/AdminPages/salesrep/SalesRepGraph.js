import React from 'react';
import { Bar } from 'react-chartjs-2';
import Styled from 'styled-components';

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

const Styles = Styled.div`

color: #333333;
.title{
    margin-right:21px;
    margin-left:21px;
    font-size: 36px;
    line-height: 45px;

color: #333333;

}
.graphtitle{
    width: 90%;
    display:inline-flex;
    justify-content:space-between;
    margin-right:21px;
    margin-left:21px;
    font-size: 14px;
    line-height: 17px;

}
.graph{
    height:285.3px;
    width: 1120px;
}
`;

function SalesRepGraph() {
    return (
        <Styles>
            <div className="title">
                <h4>Statistic</h4>
            </div>
            <div className="graphtitle">
                <p>barchart showing number of referals</p>

                <select>
                    <option>monthly</option>
                </select>
            </div>
            <div className="graph">
                <Bar data={data} height={70} width={20} options={{ maintainAspectRatio: false }}></Bar>
            </div>
        </Styles>
    );
}

export default SalesRepGraph;
