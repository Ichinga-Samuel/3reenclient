import styled from 'styled-components';

export const BestSellerSectionHomeStyled = styled.div`
    .BestSeller {
    }

    .BestSeller h1 {
        display: flex;
        justify-content: center;
        font-family: montserrat, 'MADE_TOMMY_Regular', sans-serif;
        font-size: 1.8rem;
        color: darken($fadedBlack, 10%);
        font-weight: 200;
        text-transform: capitalize;
        margin-top: 0.5rem;
        margin-bottom: 2.9rem;
    }

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        .BestSeller {
        }

        .BestSeller h1 {
            display: flex;
            justify-content: center;
            font-family: montserrat, 'MADE_TOMMY_Regular', sans-serif;
            font-size: 6.4rem;
            font-weight: 200;
            text-transform: uppercase;
            margin-top: 0.5rem;
            margin-bottom: 2.9rem;
        }
    }

    // large screens
    @media (min-width: 1025px) {
        .BestSeller {
        }

        .BestSeller h1 {
            display: flex;
            justify-content: center;
            font-family: montserrat, 'MADE_TOMMY_Regular', sans-serif;
            font-size: 6.4rem;
            font-weight: 200;
            text-transform: uppercase;
            margin-top: 0.5rem;
            margin-bottom: 2.9rem;
        }
    }
`;

export const LoadMore = styled.div`
    // load more buttons

    .BestSellerLoadMoreBtn {
        text-align: center;
    }

    .BestSellerLoadMoreBtn button {
        font-size: 3rem;
        color: #590a5b;
        text-transform: lowercase;
        font-weight: 500;
        background-color: transparent;
    }

    .BestSellerLoadMoreBtn button:after {
        content: '';
        display: table;
        width: 50%;
        height: 0.6rem;
        background-color: #590a5b;
        position: relative;
        left: 30%;
    }

    //medium screens

    @media (min-width: 601px) and (max-width: 1024px) {
        // load more buttons

        .BestSellerLoadMoreBtn {
            text-align: center;
        }

        .BestSellerLoadMoreBtn button {
            font-size: 3rem;
            color: #590a5b;
            text-transform: lowercase;
            font-weight: 500;
            background-color: transparent;
        }

        .BestSellerLoadMoreBtn button:after {
            content: '';
            display: table;
            width: 50%;
            height: 0.6rem;
            background-color: $mainPurple;
            position: relative;
            left: 30%;
        }
    }

    //Large screens

    @media (min-width: 1025px) {
        // load more buttons

        .BestSellerLoadMoreBtn {
            text-align: center;
        }

        .BestSellerLoadMoreBtn button {
            font-size: 3rem;
            color: #590a5b;
            text-transform: lowercase;
            font-weight: 500;
            background-color: transparent;
        }

        .BestSellerLoadMoreBtn button:after {
            content: '';
            display: table;
            width: 50%;
            height: 0.6rem;
            background-color: #590a5b;
            position: relative;
            left: 30%;
        }
    }
`;
