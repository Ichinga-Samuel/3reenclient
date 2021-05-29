import React from 'react';

import styled from 'styled-components';
import { VictoryPie } from 'victory';

export const PieChart = () => {
    const data = [
        { x: 'Picked up', y: 35 },
        { x: 'Returned', y: 40 },
        { x: 'Dispatched', y: 55 },
        { x: 'Delivered', y: 55 },
    ];
    return (
        <StyledContent>
            <VictoryPie
                innerRadius={100}
                width={600}
                colorScale={['#631466', '#EFD9FF', '#150321', '#FFAF38']}
                data={data}
            />
        </StyledContent>
    );
};

const StyledContent = styled.div`
    width: 100%;
    h3 {
        font-weight: 'bold';
    }
`;
