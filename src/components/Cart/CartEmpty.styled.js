import styled from 'styled-components';

export const CartEmptyStyled = styled.div`
    .emptycartWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10rem;
        margin-bottom: 10rem;
        flex-wrap: wrap;
    }

    .circle {
        width: 13rem;
        height: 13rem;
        background: purple;
        border-radius: 50%;
        justify-content: center;
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        margin-top: 5rem;
    }

    .shopper {
        width: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .emptycartWrapper > h3 {
        font-size: 2rem;
        font-weight: bold;
    }

    .emptycartWrapper > h5 {
        font-weight: 500;
        font-size: 3rem;
    }

    button {
        margin-top: 3rem;
        padding: 1.7rem 2rem;
        display: flex;
        align-items: center;
    }

    .cartEmpty {
        background: #ffffff;
    }

    @media only screen and (max-width: 480px) {
        button {
            margin-top: 3rem;
            background: #fff;
            color: orange;
            border: 1px solid orange;
            border-radius: 3rem;
            padding: 0.7rem 1.5rem;
        }
    }
    @media only screen and (max-width: 375px) {
        p{
            font-size: small;
        }
    }
`;
