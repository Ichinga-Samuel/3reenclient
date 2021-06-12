import styled from 'styled-components';

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

export const PlainQAHeader = styled.header`
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
    margin-top: 4rem;
    text-transform: capitalize;
    .ant-tabs-tab {
        + .ant-tabs-tab {
            margin: 0px 15px;
            color: rgba(0, 0, 0, 0.25);
        }
        &:hover {
            color: var(--background-color);
        }
        &.ant-tabs-tab-active {
            .ant-tabs-tab-btn {
                color: var(--background-color);
            }
        }
    }
    .ant-tabs-ink-bar {
        background: var(--background-color);
    }
    .pagination {
        justify-content: center;
        padding: 4rem 0;
    }
`;

export const OrderDetailsContainer = styled.div``;
