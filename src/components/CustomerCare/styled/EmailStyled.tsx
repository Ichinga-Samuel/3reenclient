import styled from 'styled-components';
import { media } from './device';

export const EmailContainer = styled.div`
    text-align: center;
    background-color: #d2d2d2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow-y: hidden;

    .left-arror {
        position: absolute;
        top: 155px;
        left: 185px;
        width: 20px;
        height: 20px;
        z-index: 999;

        ${media.mobileL} {
            left: 10px;
        }

        ${media.tablet} {
            left: 38px;
        }
    }

    & .mail-title {
        position: relative;
        z-index: 999;
        text-align: start;
        color: #ffffff;
        margin-left: 50px;

        ${media.mobileL} {
            margin-left: 17px;
        }
    }
    & img {
        position: relative;
        height: 600px;
        margin-top: -50px;
    }

    & .mail-box {
        width: 900px;
        height: 350px;
        background: #590a5b;
        position: absolute;
        opacity: 0.75;
        z-index: 1;
        top: 330px;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow-y: hidden;

        ${media.tablet} {
            width: 90%;
        }

        ${media.mobileL} {
            width: 95%;
        }
    }

    & .mail-text-box {
        width: 800px;
        height: 200px;
        position: absolute;
        top: 330px;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 555;
        text-align: start;

        ${media.tablet} {
            width: 80%;
        }
        ${media.mobileL} {
            width: 85%;
        }
    }

    & textarea {
        width: 100%;
        height: 200px;
    }

    & button {
        width: 200px;
        height: 45px;
        background: #ffaf38;
        text-align: center;
        color: #ffffff;
        font-size: 18px;
        border: none;

        a {
            text-decoration: none;
            color: #ffffff;
        }
    }
`;
