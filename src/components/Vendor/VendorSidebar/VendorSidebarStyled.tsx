import styled from 'styled-components';

export const VendorSidebarStyled = styled.aside`
    background: #590a5b;
    min-width: 250px;
    height: 100vh;
    // padding: 10px 0;
    z-index: 1;
    position: fixed;
    transition: ease all 0.5s;
    color: #fff;
    padding-top: 8rem;
    .vHeader {
        padding: 20px;
        h3 {
            font-size: 1.3rem;
            font-weight: lighter;
            color: #fff;
        }
        h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #fff;
        }
    }
    .vendorProduct {
        background: #fff;
        width: 85%;
        margin: auto;
        height: 40px;
        border-radius: 10px;
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
            color: #590a5b;
            font-size: 1.3rem;
            font-weight: 400;
        }
    }
    .vendorMenu {
        display: flex;
        align-items: center;
        margin: 2rem 0 0 0;
        transition: ease all 0.5s;
        position: relative;
        ul {
            list-style: none;
            width: 100%;
            display: block;
            margin-bottom: 0;
            position: relative;
        }
        li,
        a {
            display: flex;
            width: 100%;
            color: #fff !important;
            text-decoration: none;
            align-items: center;
            // padding: 4px 0px;
            font-size: 1rem;
            margin: 5px 0;
            transition: ease all 0.5s;
            position: relative;
            svg {
                padding: 0 10px 0 20px;
                width: 50px;
                overflow: hidden;
                position: relative;
            }
            &:hover {
                svg {
                    stroke: #590a5b;
                    fill: #590a5b;
                }
                background: #fff;
                span {
                    color: #590a5b;
                    text-decoration: none;
                }
            }
            &.active {
                background: #fff;
                span {
                    color: #590a5b !important;
                }
                svg {
                    stroke: #590a5b;
                    fill: #590a5b;
                }
            }
        }
    }
    .drop-cont {
        display: none !important;
        width: 100%;
        transition: ease all 0.45s;
        transform: translateY(-20px);
        &.active {
            display: block !important;
            transition: ease all 0.45s;
            // visibility: visible;
            transform: translateY(0);
        }
        ul {
            list-style: none;
            margin-bottom: 0;
            width: 100%;
            li a {
                display: flex;
                padding: 7px 0 7px 28px;
                margin-left: 25px;
                align-items: center;
                justify-content: left;
                text-decoration: none;

                &:hover {
                    background-color: #fff;
                    color: #590a5b !important;
                }
            }
        }
    }
    .has-dropdown {
        flex-direction: column;
        cursor: pointer;
        transition: ease all 0.45s;
        > div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
        }
        &:hover {
            background: transparent !important;
            span {
                color: #fff !important;
                text-decoration: none;
            }
            svg {
                stroke: #fff !important;
                fill: #fff !important;
            }
        }
    }
    .__footer {
        position: absolute;
        display: flex;
        bottom: 0;
        align-items: center;
        justify-content: center;
        // left: 23px;
        width: 100%;
        overflow: hidden;
        transition: ease all 0.5s;
        svg {
            width: 20px;
            padding-right: 2px;
        }
        ul {
            list-style: none;
            display: flex;
            align-items: center;
            flex-direction: column;
            // margin: 0;
            padding: 0;
        }

        li,
        button {
            cursor: pointer;
            font-size: 14px;
            background: transparent;
            border-color: transparent;
            text-transform: uppercase;
            color: #be1e2d;
            display: flex;
            // padding: 4px 0;
            align-items: center;
        }
    }
`;
