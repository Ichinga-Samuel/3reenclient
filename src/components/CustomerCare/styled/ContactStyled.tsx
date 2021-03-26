/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { media } from './device';

export const BannerContainer = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;

    & a {
        color: #590a5b;
        text-decoration: none;
    }

    & img {
        width: 100%;
        height: 440px;

        ${media.mobileL} {
            margin-top: -75px;
        }
    }

    .banner-title {
        font-size: 60px;
        margin-top: -40px;

        ${media.mobileL} {
            margin-top: -85px;
        }
        ${media.mobileS} {
            font-size: 27px;
        }
    }

    .reach-out {
        width: 500px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        padding-top: 20px;
        text-align: center;

        ${media.mobileL} {
            width: 100%;
        }
        ${media.mobileS} {
            flex-direction: column;
            justify-content: center;
        }
    }
    .or {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        padding-top: 20px;
    }
    .client-call {
        text-align: start;
        font-size: 18px;

        ${media.mobileS} {
            text-align: center;
            justify-content: center;
        }
    }
    .client-email {
        width: 130px;
        height: 50px;
        background: #ffffff;
        border: 2px solid #fcf009;
        border-radius: 50px;
        padding: 10px 0;
        font-size: 18px;

        ${media.mobileS} {
            margin: 0 auto;
        }
    }
`;
