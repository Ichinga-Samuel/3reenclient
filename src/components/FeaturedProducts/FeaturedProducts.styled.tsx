import styled from 'styled-components';

export const FeaturedProductsStyled = styled.div`
    margin-top: 2rem;
    margin-bottom: 10rem;

    h2 {
        font-size: 1.8rem;
        font-weight: 400;
        color: #878787;
        display: flex;
        justify-content: center;
    }

    .FeaturedProductsItems {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }

    .FeaturedProductsItems:first-child {
        margin-top: 0;
    }

    //medium screens

    @media (min-width: 601px) and (max-width: 1024px) {
        margin-top: 5rem;

        h2 {
            font-size: 3rem;
            font-weight: 500;
            color: inherit;
        }

        .FeaturedProductsItems {
            justify-content: space-around;
            width: 100%;
        }
    }

    //Large screens

    @media (min-width: 1025px) {
        margin-top: 15rem;

        h2 {
            font-size: 3rem;
            font-weight: 500;
            color: inherit;
        }

        .FeaturedProductsItems {
            justify-content: space-around;
        }
    }
`;
