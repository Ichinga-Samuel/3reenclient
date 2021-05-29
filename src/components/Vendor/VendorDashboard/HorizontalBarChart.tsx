import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';
const HorizontalBarChart = () => {
    const newData = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 5, earnings: 19000 },
    ];
    const categories = {
        x: ['1', '2', '3', '4', '5', '6'],
    };

    return (
        <VictoryChart domainPadding={30}>
            <VictoryBar
                horizontal
                categories={categories}
                cornerRadius={{ topLeft: 5, topRight: 5, bottomLeft: 5, bottomRight: 5 }}
                data={newData}
                x="quarter"
                y="earnings"
                style={{
                    data: {
                        fill: ({ datum }) => (datum._x === 1 || datum._x === 3 ? '#590A5B' : '#FFAF38'),
                        fillOpacity: 0.7,
                    },
                }}
                labels={({ datum }) => `${datum._y}`}
            />
        </VictoryChart>
    );
};

export default HorizontalBarChart;
