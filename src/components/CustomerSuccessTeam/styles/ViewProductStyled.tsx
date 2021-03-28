/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const CustomerViewProduct = styled.div`
    position: fixed;
    margin-left: 300px;
    max-width: 920px;

    & .view-product_content {
        width: 100%;
        height: 460px;
        background: #ffffff;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
        padding: 10px 0;
        position: relative;
        overflow: auto;
    }

    & .view-product_columnA,
    .view-product_columnB {
        width: 50%;
        padding: 0 20px;
    }

    & .view-product_description {
        margin-top: 30px;
    }

    & .view-availability {
        padding: 30px 20px;
    }

    & .view-btn-yes {
        width: 150px;
        height: 35px;
        background-color: transparent;
        border: 1.5px solid #ffaf38;
        margin-left: 40px;
    }

    & .view-btn-no {
        width: 150px;
        height: 35px;
        background-color: transparent;
        border: 1.5px solid #ffaf38;
        margin-left: 20px;
    }

    & .view-btn-yes:hover,
    .view-btn-no:hover {
        background-color: #ffaf38;
        color: #ffffff;
    }
`;

export const ItemName = styled.div`
    font-size: 22px;
    font-weight: 500;
    color: #590a5b;
    font-style: normal;
`;

export const ItemPrice = styled.div`
    font-size: 18px;
    color: #ffaf38;
    margin-top: 10px;
`;

export const ItemDetails = styled.div`
    font-size: 18px;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.67);
`;
