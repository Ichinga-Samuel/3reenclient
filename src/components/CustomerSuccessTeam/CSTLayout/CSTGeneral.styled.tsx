import styled from 'styled-components';

export const WelcomeCard = styled.div`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.52rem;
    transition: ease all 0.5s;
    margin-bottom: 3rem;
    svg {
        stroke: var(--background-color);
    }
    &:hover {
        box-shadow: none;
        transition: ease all 0.5s;
        border: 1px solid rgba(89, 10, 91, 0.2);
        a {
            text-decoration: none;
        }
    }
`;

export const QAHeaderContainer = styled.header`
    display: flex;
    width: 100%;
    background: var(--white-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    height: 60px;
    align-items: center;
    position: fixed;
    z-index: 1;
    .logoHolder {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 13px;
        .icon {
            margin-left: 5rem;
            cursor: pointer;
            span {
                font-size: 2rem;
            }
        }
    }
    .notification {
        position: relative;
        cursor: pointer;
        span {
            font-size: 2rem;
            color: var(--background-color);
            svg {
                fill: var(--background-color);
            }
        }
    }
    .profileDetails {
        display: flex;
        position: relative;
        justify-content: flex-end;
        width: 100%;
        margin: 0 20px;
        align-items: center;
        div {
            margin: 0 20px;
        }
        .profile {
            display: flex;
            align-items: center;
            .detail {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 0 0 10px;
                p {
                    font-weight: bold;
                    display: block;
                    font-size: 1.4rem;
                    margin-bottom: 0;
                }
                span {
                    font-size: 1.2rem;
                }
            }
        }
    }
    .brand {
        position: relative;
        // top: 0.4rem;
        // right: 0.5rem;
        // grid-column: 1/2;
        // margin-top: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PlainCSTHeader = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    justify-content: space-between;
    padding: 0 20px;
    .plain-logo {
        margin: 0 20px;
    }
    .links {
        display: flex;
        a {
            margin: 0 15px;
            font-size: 1.4rem;
            text-transform: uppercase;
            transition: ease all 0.5s;
            color: rgba(0, 0, 0, 0.38);
            position: relative;
            text-decoration: none;
            &.active {
                color: #000;
                transition: ease all 0.5s;
                &:after {
                    position: absolute;
                    content: '';
                    bottom: -5px;
                    background: var(--background-color);
                    height: 3px;
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
            &:hover {
                text-decoration: none;
                color: #000;
                &:after {
                    position: absolute;
                    content: '';
                    bottom: -5px;
                    background: var(--background-color);
                    height: 3px;
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
        }
    }
`;

export const PlainQAFooter = styled.footer`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    bottom: 0;
    justify-content: center;
    background: #eee;
    padding: 10px;
    transition: ease all 0.5s;
    clear: both;
    span {
        text-align: center;
    }
`;

export const AuthContainer = styled.div`
    width: 50%;
    margin: 10px auto;
    transition: ease all 0.6s;
    border-radius: 8px;
    overflow: hidden;
`;

export const OrderTableContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    margin: 20px 0;
    text-transform: capitalize;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    .pagination {
        justify-content: center;
        padding: 4rem 0;
    }
`;

export const QAOrderDetailsContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    font-family: 'MADE TOMMY', sans-serif;
    .loading {
        margin: 20px 0;
        margin-bottom: 20px;
        padding: 30px 50px;
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    .title {
        display: flex;
        align-items: center;
        margin: 0 0 10px 0;
        transition: ease all 0.5s;
        padding: 0 !important;
        a {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            transform: translateX(0);
            transition: ease all 0.5s;
            &:hover {
                text-decoration: none;
                span {
                    transform: translateX(5px);
                    transition: ease all 0.5s;
                }
            }
        }
        span {
            transition: ease all 0.5s;
            padding-right: 10px;
            &:hover {
                text-decoration: none;
                span {
                    transform: translateX(5px);
                    transition: ease all 0.5s;
                }
            }
        }
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        width: 100%;
        /* border-radius: 4px; */
        /* background-color: var(--background-color); */
        &__order {
            transition: ease all 0.5s;
            h3 {
                font-size: 1.7rem;
                color: var(--black-color);
                font-weight: 400;
                /* margin-bottom: 0; */
            }
            p {
                font-weight: lighter;
                font-size: 1rem;
                margin-bottom: 0;
                color: var(--secondary-color);
            }
        }
        &__actions {
            display: flex;
            button {
                margin-right: 10px;
            }
            .ant-btn-primary {
                background-color: transparent;
                border-color: var(--white-color);
                border-radius: 5px;
                display: flex;
                align-items: center;
                font-size: 1rem;
            }
        }
    }
    .ant-card-body {
        padding: 15px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.09);
        overflow: hidden;
    }
    .actiondetails {
        position: relative;
        transition: ease all 0.5s;
        h4 {
            font-weight: 500;
            margin-bottom: 10px;
            font-size: 1.4rem;
        }
    }
    .general {
        transition: ease all 0.5s;
        position: relative;
        font-family: 'MADE TOMMY', sans-serif;
        padding: 0 10px 0 0;
        h3 {
            color: var(--black-color);
            font-size: 1.6rem;
            margin-bottom: 3rem;
            font-weight: bold;
        }
        .detailsform {
            transition: ease all 0.5s;
            position: relative;
            label {
                font-size: 1.3rem;
                margin-bottom: 0;
                font-weight: 400;
            }
            .ant-input[disabled] {
                color: var(--black-color);
                background-color: transparent;
                cursor: not-allowed;
                border-color: var(--secondary-color);
                border-radius: 0;
                font-weight: lighter;
            }
        }
        .address {
            transition: ease all 0.5s;
            position: relative;
            p {
                font-size: 1.5rem;
                font-weight: lighter;
                word-break: normal;
                margin-bottom: 0;
            }
            &__user {
                padding-top: 3rem;
            }
        }
    }
    .delivery {
        transition: ease all 0.5s;
        h3 {
            text-align: center;
            margin-bottom: 2rem;
        }
        &__details {
            margin-top: 2rem;
            padding-left: 3rem;
            p {
                font-weight: lighter;
            }
        }
    }
    .orderdetails {
        padding: 25px 6rem;
        transition: ease all 0.5s;
        font-family: 'MADE TOMMY', sans-serif;
        &__invoice {
            position: relative;
        }
        &__summary {
            /* border: 1px solid #590a5b; */
            padding: 15px;
            border-radius: 5px;
            transition: ease all 0.5s;
            > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0 12px;
                position: relative;
                span {
                    font-size: 1.3rem;
                    font-weight: 300;
                }
                &:nth-child(4) {
                    padding-bottom: 10px;
                    &:after {
                        position: absolute;
                        background: #e2dddd;
                        content: '';
                        bottom: 5px;
                        left: 0;
                        right: 0;
                        width: 100%;
                        margin: auto;
                        height: 1px;
                    }
                }
            }
            .total {
                span {
                    color: #e121e4;
                    font-weight: bold;
                }
            }
        }
        &__items {
            transition: ease all 0.5s;
            margin-top: 6rem;
            h3 {
                font-size: 1.3rem;
            }
            &__main {
                border: 1px solid #590a5b;
                padding: 10px;
                border-radius: 5px;
                .image {
                    width: 70px;
                    height: 70px;
                    background-color: #ddd;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
    .item_details {
        /* position: relative; */
        transition: ease all 0.5s;
        h4 {
            font-size: 1.41rem;
        }
        .qty {
            display: flex;
            justify-content: space-between;
            padding-right: 30px;
            position: relative;
        }
        .price {
            position: absolute;
            bottom: 0;
        }
    }
`;

export const NotificationCardContainer = styled.div`
    background: var(--secondary-color);
    padding: 10px;
    border-radius: 4px;
    transition: ease 0.5s all;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
    p {
        color: var(--white-color);
        font-size: 1.2rem;
    }
    .timedetail {
        display: flex;
        justify-content: space-between;
        span {
            color: var(--black-color);
            font-style: italic;
            font-size: 1.2rem;
        }
    }
`;
