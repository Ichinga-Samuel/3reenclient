import styled from 'styled-components';

export const BestSellersStyled = styled.div`
    .BestSellerItems {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
        grid-row-gap: 2.1rem;
        justify-items: center;

        // padding: 0 8rem;
        // ..For Flex
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: center;
    }

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        .BestSellerItems {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
            grid-row-gap: 2.1rem;
            justify-items: center;
            padding: 0 8rem;

            //..For Flex
            // display: flex;
            // flex-wrap: wrap;
            // justify-content: center;
        }
    }

    // large screens
    @media (min-width: 1025px) {
        .BestSellerItems {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
            grid-row-gap: 2.1rem;
            justify-items: center;
            padding: 0 8rem;

            //..For Flex
            // display: flex;
            // flex-wrap: wrap;
            // justify-content: center;
        }

        .BestSellerItems h4 {
            font-size: 1.4rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
            font-weight: 300;
            color: #878787;
        }
    }
`;
