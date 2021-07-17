import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    transition: ease all 0.5s;
    display: flex;
    padding: 10px 2rem;
    background: #fff;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .userlogo {
        transition: ease all 0.5s;
        margin: 0 9rem 0 2rem;
    }
    .productsearch {
        display: flex;
        align-items: center;
        flex: 0 0 50%;
        min-width: 50%;
        margin: 0 4rem;
        transition: ease all 0.5s;
        .searchbtn {
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: 0;
            text-transform: uppercase;
            border: none;
            padding: 2px 4rem;
        }
    }
    .nav {
        display: flex;
        align-items: center;
        position: relative;
        transition: ease all 0.5s;
        margin: 0 3rem 0 9rem;
        > div {
            margin-right: 7rem;
            transition: ease all 0.5s;
        }
        .cart {
            position: relative;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--background-color);
            svg {
                padding: 4px;
            }
            &__count {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                left: 0;
                top: -8px;
                height: 25px;
                border-radius: 50px;
                background: var(--background-color);
                span {
                    color: var(--white-color);
                    font-size: 1.3rem;
                    font-weight: bold;
                }
            }
        }
        .userprofile {
            display: flex;
            align-items: center;
            cursor: pointer;
            position: relative;
            margin: auto;
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
    }
    .usermenu {
        position: absolute;
        top: 43px;
        width: 100%;
        background: #fff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        border-radius: 3px;
        transition: ease all 0.5s;
        opacity: 0;
        transform: translateY(0);
        visibility: hidden;
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
    @media (max-width: 768px) {
        .userlogo {
            margin: 0;
        }
        .productsearch {
            display: none;
        }
        .nav {
            margin: 0 1rem 0 1rem;
            > div {
                margin-right: 2rem;
            }
            .cart {
                font-size: 1.2rem;
                svg {
                    padding: 5px;
                }
                &__count {
                    width: 20px;
                    top: -5px;
                    height: 20px;
                }
            }
            .userprofile {
                display: flex;
                align-items: center;
                cursor: pointer;
                position: relative;
                margin: auto;
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
                }
                //&__name {
                //    display: none;
                //}
            }
        }
    }
`;
