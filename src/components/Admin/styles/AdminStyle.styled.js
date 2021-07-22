import styled from 'styled-components';

export const DashboardCardHolder = styled.div`
    background: var(--white-color);
    padding: 15px 2rem;
    transition: ease all 0.5s;
    border-radius: 5px;
    margin-bottom: 15px;
    .iconHolder {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            color: rgba(0, 0, 0, 0.3);
        }
    }
    .content {
        transition: ease all 0.5s;
        p {
            font-size: 1.7rem;
            color: rgba(0, 0, 0, 0.6);
            margin-bottom: 1rem;
            word-break: break-word;
        }
        strong {
            font-size: 1.9rem;
            font-family: 'Avenir Heavy', sans-serif;
        }
    }
`;

export const CountHolder = styled.div`
    background: var(--white-color);
    padding: 15px 2rem;
    transition: ease all 0.5s;
    border-radius: 5px;
    margin-bottom: 15px;
    h3 {
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 0.3);
    }
    span {
        font-size: 2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.9);
    }
`;

export const LargeMHolder = styled.div`
    background: var(--white-color);
    padding: 15px 2rem;
    transition: ease all 0.5s;
    border-radius: 5px;
    margin-bottom: 15px;
    height: 260px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgb(0, 0, 0, 0.02);
    h3 {
        font-size: 1.5rem;
        margin-bottom: 0;
        margin-top: 1.2rem;
        color: rgba(0, 0, 0, 0.3);
    }
    span {
        font-size: 2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
    }
    svg {
        padding: 1rem;
    }
    .bdetails {
        transition: ease all 0.5s;
        margin-top: 15px;
        display: flex;
        //padding: 15px;
        justify-content: space-between;
        > div {
            flex: 0 0 50%;
            text-align: center;
            &:first-child {
                border-right: 1px solid #ddd;
            }
            h5 {
                color: rgba(0, 0, 0, 0.3);
                margin-bottom: 0;
            }
            h4 {
                color: rgba(0, 0, 0, 0.8);
            }
        }
        &__btn {
            padding: 1rem;
            .ant-btn-default {
                background: var(--gray-color);
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    color: var(--white-color);
                    font-size: 1rem;
                    font-weight: lighter;
                }
                &:hover {
                    font-weight: bold;
                    border-color: var(--black-color);
                }
            }
        }
    }
`;

export const SmallCircle = styled.div`
    transition: ease all 0.5s;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: ${(props) => props.circleColor || ' var(--secondary-color)'};
`;

export const OrderContainer = styled.div`
    background: var(--white-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    padding: 1rem;
    transition: ease all 0.5s;
    border-radius: 4px;
    .agentTitle {
        font-family: 'Avenir Medium', sans-serif;
        font-size: 1.4rem;
        margin-bottom: 2rem;
    }
`;

export const OrderDetailContainer = styled.div`
    background: var(--white-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    padding: 2rem 3rem;
    transition: ease all 0.5s;
    border-radius: 4px;
    .title {
        font-family: 'Avenir Heavy', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .details {
        position: relative;
        &__top {
            font-family: 'Avenir Light', sans-serif;
            margin-top: 2rem;
            position: relative;
            span {
                font-weight: lighter;
            }
            p {
                font-weight: bolder;
                font-family: 'Avenir Heavy', sans-serif;
                margin-bottom: 1rem;
            }
            &:after {
                position: absolute;
                content: '';
                width: 80%;
                background: var(--fade-color);
                height: 1px;
                right: 0;
                bottom: 10px;
            }
        }
        &__progress {
            font-family: 'Avenir Light', sans-serif;
            margin-top: 2rem;
            span {
                font-weight: lighter;
            }
            &:after {
                position: absolute;
                content: '';
                width: 80%;
                background: var(--fade-color);
                height: 1px;
                right: 0;
                bottom: 10px;
            }
        }
        &__inner {
            border-bottom: 1px solid var(--gray-color);
            padding: 1rem 0;
            color: var(--fade-black);
            font-family: 'Avenir Light', sans-serif;
        }
    }
    .progress_action {
        transition: ease all 0.5s;
        margin-top: 1.5rem;
        .label {
            font-family: 'Avenir Light', sans-serif;
            display: flex;
        }
        button {
            height: 30px;
            display: flex;
            justify-content: center;
            width: 10%;
            margin: auto;
            align-items: center;
        }
        .ant-progress-success-bg,
        .ant-progress-bg {
            background-color: var(--green-color);
        }
    }
    @media (max-width: 499px) {
        .details {
            &__top {
                &:after {
                    position: absolute;
                    content: '';
                    width: 50%;
                    background: var(--fade-color);
                    height: 1px;
                    right: 0;
                    bottom: 10px;
                }
            }
        }
        .progress_action {
            button {
                width: 30%;
            }
        }
    }
`;
