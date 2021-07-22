import styled from 'styled-components';

export const BodyContainer = styled.div`
    background: var(--gray-background);
    width: 100%;
    height: 100%;
    font-family: 'Made Tommy', sans-serif;
`;

export const AuthHeader = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    font-size: 2.6rem;
`;

export const UserLoginContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    padding-bottom: 3rem;
    .login {
        width: 30%;
        margin: 3rem auto;
        padding: 15px;
        background: var(--white-color);
        box-shadow: 0 2px 13px rgba(0, 0, 0, 0.09);
        transition: ease all 0.6s;
        border-radius: 4px;
        overflow: hidden;
        h4 {
            padding: 2rem 0;
            font-size: 1.8rem;
            font-weight: lighter;
        }
        &.register {
            width: 60%;
        }
        &__form {
            // padding: 4rem;
            position: relative;
            transition: ease all 0.6s;
            h3 {
                font-size: 2rem;
                margin-bottom: 1.5rem;
                color: car(--background-color);
            }
            h4 {
                font-weight: lighter;
                font-size: 1.5rem;
            }
            label {
                margin-bottom: 0;
                font-size: 1.4rem;
                text-transform: uppercase;
            }
            .form-group {
                margin-bottom: 2rem;
            }
            .ant-input {
                /* height: 46px; */
                border-radius: 2px;
            }
            .ant-input-affix-wrapper {
                /* height: 46px; */
                overflow: hidden;
            }
            .ant-input-affix-wrapper-lg {
                padding: 10.5px 11px;
            }
        }
        &__pwd {
            display: flex;
            justify-content: flex-end;
            padding-bottom: 10px;
            a {
                color: var(--secondary--color);
            }
        }
        &__regtext {
            display: flex;
            justify-content: center;
            padding-top: 2rem;
            a {
                color: var(--secondary--color);
                padding-left: 5px;
                font-weight: bold;
            }
        }
        .ant-btn-default {
            background: #f2f2f2;
            border-radius: 2px;
            border: none;
            span {
                padding-left: 2rem;
            }
            &:hover {
                color: var(--black-color);
                span {
                    color: var(--black-color);
                    font-weight: bold;
                }
            }
        }
        &.verify {
            transition: ease all 0.5s;
            form {
                padding: 1rem 0 2rem;
                .ant-input {
                    height: 55px;
                    display: flex;
                    font-size: 2rem;
                    align-items: center;
                    border: none;
                    background: var(--gray-color);
                    justify-content: center;
                    text-align: center;
                    &:focus {
                        border-color: var(--btn-text-color);
                        box-shadow: none;
                    }
                }
            }
        }
    }
    @media (max-width: 449px) {
        .login {
            width: 99%;
        }
    }
`;
