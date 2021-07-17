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
                background: #eee;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
            }
            &__name {
                display: flex;
                align-items: center;
                justify-content: center;
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
        ul {
            margin: 0;
            padding: 0;
        }
        li {
            display: flex;
            padding: 9px 0;
            transition: ease all 0.5s;
            justify-content: center;
            &.logout {
                border-top: 1px solid #eee;
            }
        }
    }
`;
