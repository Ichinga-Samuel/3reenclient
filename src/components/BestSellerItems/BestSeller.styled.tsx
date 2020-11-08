import styled from 'styled-components';

// .BestSeller .BestSellerItems

export const ItemStyled = styled.div`
    .BestSellerItem {
        // border: 1px solid #ccc;
        border-radius: 0.3rem;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        padding: 5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        //..For Flex
        // margin-right: 16px;
        // margin-bottom: 21px;
    }

    .BestSellerItem:nth-child(4),
    .BestSellerItem:nth-child(8) {
        margin-right: 0;
    }

    .BestSellerItem img:first-of-type {
        width: 13.4rem;
        height: 8.2rem;
    }

    img:last-of-type {
        width: 50%;
    }

    .BestSellerItem h4 {
        font-size: 1.4rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-weight: 300;
        color: #878787;
    }

    .BestSellerItem p {
        font-size: 1.8rem;
        color: #878787;
        margin-top: 1rem;
    }

    .BestSellerItem p span {
        color: #ff0000;
        margin-right: 1.5rem;
    }

    //medium screens

    @media (min-width: 601px) and (max-width: 1024px) {
        .BestSellerItem {
            border: 1px solid #ccc;
            border-radius: 0.3rem;
            padding: 5rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            //..For Flex
            // margin-right: 16px;
            // margin-bottom: 21px;
        }

        .BestSellerItem:nth-child(4),
        .BestSellerItem:nth-child(8) {
            margin-right: 0;
        }

        .BestSellerItem img:first-of-type {
            width: 22.8rem;
            height: 12.5rem;
        }

        .BestSellerItem h4 {
            font-size: 1.5rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        .BestSellerItem p {
            font-size: 1.8rem;
            color: #878787;
            margin-top: 1rem;
        }

        .BestSellerItem p span {
            color: #ff0000;
            margin-right: 1.5rem;
        }
    }

    //Large screens

    @media (min-width: 1025px) {
        .BestSellerItem {
            border: 1px solid #ccc;
            border-radius: 0.3rem;
            padding: 5rem 2rem;

            display: flex;
            flex-direction: column;
            align-items: center;

            //..For Flex
            // margin-right: 16px;
            // margin-bottom: 21px;
        }

        .BestSellerItem:nth-child(4),
        .BestSellerItem:nth-child(8) {
            margin-right: 0;
        }

        .BestSellerItem img:first-of-type {
            width: 22.8rem;
            height: 12.5rem;
        }

        .BestSellerItem h4 {
            font-size: 1.5rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        .BestSellerItem p {
            font-size: 1.8rem;
            color: #878787;
            margin-top: 1rem;
        }

        .BestSellerItem p span {
            color: #ff0000;
            margin-right: 1.5rem;
        }
    }
`;
