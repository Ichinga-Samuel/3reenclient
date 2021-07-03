/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ProductDetailsContent = styled.div`
    position: fixed;
    margin-left: 300px;
    max-width: 920px;

    & .order-info-content {
        margin-top: 70px;
        font-size: 36px;
        font-weight: 500;
    }

    & .delivery-details {
        font-size: 22px;
        background-color: transparent;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.25);
    }

    & .customer-review {
        font-size: 22px;
        color: rgba(0, 0, 0, 0.25);
        font-weight: 600;
        margin-left: 150px;
    }

    & .product-rating_col-1 {
        width: 140px;
        height: 110px;
        background-color: #fafafa;
        text-align: center;
        justify-content: center;
        align-content: center;
        align-self: center;
        padding: 10px;
    }

    & .review-group {
        width: 200px;
        margin-left: 20px;
    }
`;

export const Pagination = styled.div`
    position: fixed;
    left: 52%;
    bottom: 5px;
`;
