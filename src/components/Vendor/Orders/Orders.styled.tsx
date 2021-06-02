import styled from 'styled-components';

export const OrderTableContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    .filter {
        background-color: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 30px;
        border-radius: 4px;
        color: var(--white-color);
        width: 100%;
        transition: ease all 0.5s;
    }
`;

export const OrderDetailsContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
`;
