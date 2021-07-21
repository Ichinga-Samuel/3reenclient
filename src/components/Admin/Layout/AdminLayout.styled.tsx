import styled from 'styled-components';

export const LayoutHolder = styled.div`
    position: relative;
    //background: #777;
`;

export const AgentHeaderLayout = styled.header`
    position: fixed;
    width: 100%;
    transition: ease all 0.6s;
    background: var(--white-color);
    display: flex;
    align-items: center;
    height: 55px;
    padding: 5px 6rem;
    z-index: 1;
    .user_notification {
        display: flex;
        justify-content: flex-end;
        transition: ease all 0.5s;
        flex: 1;
        position: relative;
        cursor: pointer;
        > div {
            margin-left: 20px;
        }
        svg {
            font-size: 2rem;
        }
        .count {
            position: absolute;
            color: var(--background-color);
            right: -4px;
            top: -4px;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                color: var(--background-color);
                font-size: 0.9rem;
                font-weight: bold;
            }
        }
    }
    .userprofile {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        margin-left: 3rem;
        &__avatar {
            width: 30px;
            height: 30px;
            border-radius: 50px;
            background: var(--background-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            color: var(--white-color);
            font-size: 1.5rem;
            font-weight: bold;
            overflow: hidden;
        }
        &__name {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            span {
                color: var(--background-color);
                padding-left: 0.41rem;
            }
        }
    }
    .usermenu {
        position: absolute;
        top: 30px;
        width: 100%;
        background: #fff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        border-radius: 3px;
        transition: ease all 0.5s;
        opacity: 0;
        transform: translateY(0);
        visibility: hidden;
        z-index: 2;
        &.isOpen {
            transition: ease all 0.5s;
            opacity: 1;
            transform: translateY(10px);
            visibility: visible;
        }
        ul {
            margin: 0;
            padding: 0;
        }
        li {
            display: flex;
            padding: 9px 0;
            transition: ease all 0.5s;
            justify-content: center;
            font-size: 1.2rem;
            &.logout {
                border-top: 1px solid #eee;
            }
        }
    }
    @media (max-width: 449px) {
        padding: 5px 2rem;
        .opendrawer {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
`;

export const AgentSidebarLayout = styled.aside``;

export const AgentMainContainer = styled.main`
    position: relative;
    transition: ease all 0.6s;
    background: #e5e5e5;
    padding: 7rem 2rem 1rem 27rem;
    height: auto;
    width: auto;
    margin-bottom: 15px;
    @media (max-width: 449px) {
        padding: 5rem 2rem 1rem 2rem;
        transition: ease all 0.6s;
    }
`;

export const FooterContainer = styled.footer`
    position: relative;
    bottom: 0;
    z-index: 1;
    background: var(--white-color);
    padding: 10px;
    transition: ease all 0.5s;
    width: 100%;
    display: flex;
    justify-content: center;
    span {
        text-align: center;
    }
`;

export const PlainAdminHeader = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
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

export const MainContainer = styled.main`
    position: relative;
    transition: ease all 0.5s;
    .authContainer {
        // display: flex;
        align-items: center;
        padding: 4rem 0;
        transition: ease all 0.5s;
        font-family: 'Montserrat', sans-serif;
        h2 {
            display: flex;
            justify-content: center;
            width: 100%;
            font-size: 2.4rem;
        }
        .login {
            width: 30%;
            margin: 3rem auto;
            transition: ease all 0.6s;
            border-radius: 8px;
            overflow: hidden;
            padding: 4rem 1.8rem 1.5rem;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
            &.register {
                width: 50%;
            }
            &__form {
                padding: 4rem 0;
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
                    text-transform: uppercase;
                    font-size: 1.2rem;
                }
                .form-group {
                    margin-bottom: 2rem;
                }
                .ant-btn-primary {
                    background: var(--background-color);
                    border-color: var(--background-color);
                }
            }
        }
    }
`;

export const PlainAdminFooter = styled.footer`
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
