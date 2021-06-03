import styled from 'styled-components';

export const OrderTableContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    .filter {
        background-color: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 30px;
        border-radius: 4px;
        color: var(--white-color);
        width: 100%;
        transition: ease all 0.5s;
    }
    .export {
        .ant-btn-primary {
            display: flex;
            align-items: center;
            border: 1px solid var(--white-color);
            background: transparent;
            border-radius: 10px;
            font-size: 13px;
            padding: 2px 2.4rem;
            font-weight: lighter;
        }
        .ant-btn-primary {
            display: flex;
            align-items: center;
            border: 1px solid var(--white-color);
            background: transparent;
            border-radius: 10px;
            font-size: 13px;
            padding: 2px 2.4rem;
            font-weight: lighter;
        }
    }
`;

export const OrderDetailsContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    .title {
        display: flex;
        align-items: center;
        margin: 10px 0;
        transition: ease all 0.5s;
        padding: 10px 0 !important;
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
        padding: 10px 20px;
        width: 100%;
        border-radius: 4px;
        background-color: var(--background-color);
        &__order {
            transition: ease all 0.5s;
            h3 {
                font-size: 1.7rem;
                color: var(--secondary-color);
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
    .orderdetails {
        padding: 25px 6rem;
        transition: ease all 0.5s;
        &__invoice {
            position: relative;
        }
        &__summary {
            border: 1px solid #590a5b;
            padding: 15px;
            border-radius: 5px;
            margin-top: 15px;
            > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0 12px;
                span {
                    font-size: 1rem;
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
    .item_steps {
        display: flex;
        align-items: center;
        height: 100%;
        padding-top: 20px;
        transition: ease all 0.5s;
        .ant-steps-label-vertical .ant-steps-item-content {
            margin-top: 0;
        }
        .ant-steps-item-description {
            position: absolute;
            top: -20px;
            right: 0;
            left: 0;
            font-size: 1rem;
            color: var(--black-color);
        }
        .ant-steps-item-title {
            font-size: 1rem;
            color: var(--black-color);
        }
        .ant-steps-item-finish {
            .ant-steps-item-icon {
                > .ant-steps-icon {
                    .ant-steps-icon-dot {
                        background: var(--secondary-color);
                    }
                }
            }
            > .ant-steps-item-container {
                > .ant-steps-item-tail {
                    &:after {
                        background-color: var(--secondary-color);
                    }
                }
            }
        }
        .ant-steps-item-process {
            .ant-steps-item-container {
                > .ant-steps-item-tail {
                    &:after {
                        background-color: var(--secondary-color);
                    }
                }
                .ant-steps-item-icon {
                    > .ant-steps-icon {
                        .ant-steps-icon-dot {
                            background: var(--secondary-color);
                        }
                    }
                }
            }
        }
        .ant-steps-item-wait {
            > .ant-steps-item-container {
                > .ant-steps-item-tail {
                    &:after {
                        background-color: var(--secondary-color);
                    }
                }
            }
            .ant-steps-item-icon {
                > .ant-steps-icon {
                    .ant-steps-icon-dot {
                        background: var(--secondary-color);
                    }
                }
            }
        }
    }
`;
