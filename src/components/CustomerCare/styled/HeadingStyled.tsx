import styled from 'styled-components';
import { media } from './device';

export const Heading = styled.div`
    width: 100%;
    height: 72px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;

    & .header-container {
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        ${media.mobileL} {
            padding: 1px 0;
        }
    }

    & .navigator {
        display: flex;
    }

    & .search-data {
        display: flex;
        margin-right: 10px;

        ${media.mobileL} {
            display: none;
        }
    }

    .cart,
    .user {
        margin: 10px 20px;
        ${media.mobileL} {
            display: none;
        }
    }

    .cart span {
        width: 20px;
        height: 20px;
        background-color: #ffaf38;
        color: #ffffff;
        clip-path: circle();
        position: absolute;
        margin-top: -5px;
        padding-top: 2px;
        margin-left: -10px;
        text-align: center;
    }

    & input {
        width: 500px;
        height: 48px;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.25);
        padding-left: 10px;
    }

    ${media.tablet} {
        input {
            width: 250px;
        }
    }

    & .cart-img,
    .user-img {
        width: 30px;
        height: 30px;
    }

    & .user-id {
        margin-top: -30px;
        margin-left: 40px;
    }
    & .user-id span img {
        margin-left: 10px;
    }
    ${media.mobileL} {
        .logo {
            margin: 0 auto;
        }
    }
`;

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

export const BurgerIcon = styled.div`
    display: none;
    position: absolute;
    left: 20px;
    top: 40px;

    ${media.mobileL} {
        display: block;
    }
`;
