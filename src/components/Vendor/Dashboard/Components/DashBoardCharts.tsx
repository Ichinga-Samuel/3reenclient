import React from 'react';
// import { Chart } from 'react-charts';
import styled from 'styled-components';
import { VictoryBar, VictoryChart } from 'victory';
const newData = [
    { quarter: 1, earnings: 1300 },
    { quarter: 2, earnings: 1600 },
    { quarter: 3, earnings: 1420 },
    { quarter: 4, earnings: 1900 },
];
const categories = {
    x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
};

export const VerticalBoardCharts = () => {
    return (
        <StyledContent>
            <VictoryChart domainPadding={5} domain={{ x: [0.5, 5.5], y: [100, 2000] }}>
                <VictoryBar
                    data={newData}
                    // data accessor for x values
                    x="quarter"
                    // data accessor for y values
                    y="earnings"
                    //   cornerRadius={{ topLeft: ({ datum }) => datum.x * 4 }}
                    cornerRadius={{ topLeft: 5, topRight: 5, bottomLeft: 5, bottomRight: 5 }}
                    categories={categories}
                    style={{
                        data: {
                            fill: ({ datum }) => (datum._x === 1 || datum._x === 3 ? '#590A5B' : '#FFAF38'),
                            fillOpacity: 0.7,
                            strokeWidth: 3,
                        },
                    }}
                    labels={({ datum }) => `${datum._y}`}
                />
            </VictoryChart>
        </StyledContent>
    );
};

const StyledContent = styled.div`
    width: 100%;
    height: 100%;
    h3 {
        font-weight: 'bold';
    }
`;
