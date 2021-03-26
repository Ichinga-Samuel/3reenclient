/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { media } from './device';

export const AboutWrap = styled.div`
    text-align: center;
    position: absolute;
    background-color: #ffffff;
    left: 0;
    right: 0;

    .flex-box {
        display: flex;
    }

    .justify-btw {
        justify-content: space-between;
    }

    .primary-color {
        color: #ffaf38;
    }

    .borderTp {
        width: 100px;
        border-bottom: 4px solid #ffaf38;
        border-radius: 2px;
    }
    .borderTp1 {
        width: 100px;
        border-bottom: 4px solid #ffaf38;
        border-radius: 2px;
        text-align: center;
        justify-content: center;
        align-content: center;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .align-center {
        justify-content: center;
        text-align: center;
    }

    & img {
        width: 100%;
        height: 500px;
        align-content: flex-start;
        justify-content: flex-start;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    & .about-banner_container {
        z-index: 999;
        color: #000;
        text-align: center;
        position: absolute;
        top: 300px;
        width: 300px;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
    }

    & .borderTop {
        width: 190px;
        border-top: 4px solid #ffffff;
        text-align: center;
        justify-content: center;
        left: 50%;
        text-align: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        position: absolute;

        ${media.mobileL} {
            width: 100px;
        }
    }

    & .about-title {
        font-size: 50px;
        margin-top: 10px;

        ${media.mobileS} {
            font-size: 25px;
        }
    }

    & .about-slogan {
        font-size: 20px;
        margin-top: 10px;
    }

    & .mission {
        display: flex;
        background-color: #ffffff;
        padding: 20px 40px;
        text-align: start;
        align-items: flex-start;
        ${media.mobileL} {
            flex-direction: column;
            flex-wrap: wrap;
            padding: 2px 20px;
        }

        img {
            width: 600px;
            height: 500px;

            ${media.mobileL} {
                width: 100%;
            }
        }

        .our-mission {
            margin-top: 120px;
            padding-right: 45px;
            ${media.tablet} {
                padding-right: 10px;
            }

            ${media.mobileL} {
                width: 100%;
                padding-right: 0;
            }

            h4 {
                font-size: 20px;
                color: #ffaf38;
                line-height: 13px;
            }

            p {
                width: 100%;
                font-size: 15px;
                line-height: 24px;
                ${media.tablet} {
                    width: 300px;
                }
            }

            ${media.mobileL} {
                flex-direction: column;

                p {
                    width: 100%;
                }
            }
        }

        & .mission-1 {
            color: #ffffff;
        }
        .img-missionCol {
            ${media.tablet} {
                width: 400px;
                padding: 10px;
            }
            ${media.mobileL} {
                width: 100%;
            }
        }
    }

    & .what-we-do {
        background: #590a5b;
        padding: 100px;

        ${media.mobileL} {
            padding: 50px 20px;
        }

        .what-we-do_title {
            color: #ffaf38;
            font-size: 24px;
            margin-bottom: 40px;
            margin-top: 10px;
        }
        .what-we-do_txt {
            color: #ffffff;
            font-size: 15px;
            font-weight: 400;
            line-height: 24px;
            text-align: start;
        }
    }

    & .Q-tag {
        background-color: #590a5b;
        color: #ffaf38;
        padding-top: 50px;
        margin-top: 100px;
        font-size: 24px;
        padding-bottom: 30px;

        .Q-title {
            margin-bottom: 40px;
        }

        .Q-tagline {
            text-align: start;
            margin: 20px 40px;
            padding: 10px 0;
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
            font-size: 15px;
            ${media.mobileL} {
                margin: 10px 20px;
            }
        }

        .Q-dropdown {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 20px;
            margin-top: -60px;
            color: #ffffff;
            ${media.mobileL} {
                margin-top: -60px;
                margin-left: 0;
                right: 10px;
            }
        }
        .Q-dropUp {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 60px;
            color: #ffffff;
            ${media.mobileL} {
                margin-top: 45px;
                right: 20px;
            }
        }

        .Q-box {
            height: 100%;
            text-align: start;
            padding: 30px;
            margin: 0 0px;
            background-color: #ffffff;
            color: #590a5b;
            font-size: 15px;
            position: relative;
            border-radius: 20px;
        }
    }

    & .footer {
        background-color: #ffffff;
        color: #263238;
        height: 100%;
        /* text-align: start; */
        padding-top: 80px;
        display: flex;
        justify-content: space-around;

        ${media.mobileL} {
            flex-direction: column;
            text-align: center;
            justify-content: center;
        }

        .site-map {
            text-align: center;
            justify-content: center;
            margin: 0 auto;
        }

        li {
            list-style: none;
            text-align: start;
            font-size: 15px;
        }

        .flutter-icon {
            width: 200px;
            height: 150px;
            margin-top: -50px;
        }
        .reen-logo {
            width: 100px;
            height: 70px;
            margin-top: -20px;
            text-align: center;
        }
        .facebk-logo {
            width: 30px;
            height: 30px;
        }
        .social-media {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Team = styled.div`
    background-color: #ffffff;
    padding-top: 100px;

    .treen-team-title {
        color: #ffaf38;
        font-size: 24px;
        margin-bottom: 30px;
    }
    .font-18 {
        font-size: 18px;
    }
    .px-10 {
        padding: 0 20px;
        ${media.mobileL} {
            padding: 0 10px;
        }
    }
    .team-1 {
        margin-top: 30px;
        margin: 0 30px;
        img {
            height: 100%;
        }
        ${media.mobileL} {
            margin: 0 10px;
        }
    }
    .team-name {
        text-align: left;
        ${media.mobileL} {
            margin-top: -20px;
        }
    }
    .pb-10 {
        margin-top: -20px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 250px;
    margin-top: 50px;
    text-align: start;
    ${media.mobileL} {
        flex-direction: column;
        height: 100%;
        padding: 30px 0;
        text-align: center;
    }

    .tel {
        width: 38px;
        height: 28px;
        margin-top: 10px;
    }

    .footer-link {
        font-size: 25px;
        color: #263238;
        font-weight: bold;
        margin-top: 20px;
    }

    .footer-link-nav {
        font-size: 18px;
        margin-bottom: 10px;
        justify-self: left;

        div {
            margin: 10px 0;
        }

        a {
            text-decoration: none;
            color: #263238;
            list-style: none;
            text-align: left;
            justify-content: left;
        }
    }
    .flutter {
        img {
            width: 200px;
            height: 103px;
            margin-top: -10px;
            margin-left: -10px;
            ${media.mobileL} {
                width: 150px;
                height: 70px;
                margin-top: -10px;
            }
        }
    }
    .social-media {
        text-align: center;
        justify-content: center;
        align-items: center;
        align-self: center;
        img {
            width: 121px;
            height: 53px;
        }
    }
    .social-handles {
        text-align: center;
        justify-content: center;
        margin-bottom: 10px;
        img {
            width: 28px;
            height: 28px;
            margin-right: 5px;
        }
    }
`;
