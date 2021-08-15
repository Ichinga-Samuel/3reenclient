import styled from 'styled-components';

export const ImageHeader = styled.div`
    height: 70vh;
    //min-width: 100%;
    margin: 20px 4rem;
    background: url('/img/hp-omen.png') no-repeat center;
    background-size: cover;
    /* mobile */
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const ProductDisplayContainer = styled.div`
    transition: ease all 0.5s;
    position: relative;
    margin: 4rem 4rem;
    .menuicon {
        cursor: pointer;
        position: absolute;
        z-index: 2;
        svg {
            font-size: 3rem;
        }
    }
    .allcategories {
        transition: ease all 0.5s;
        position: absolute;
        background: var(--white-color);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.09);
        width: 200px;
        height: auto;
        border-radius: 3px;
        padding: 1.4rem 2rem;
        z-index: 2;
        top: 30px;
        transform: translateX(-10px);
        visibility: hidden;
        opacity: 0;
        &.isActive {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
        }
        h3 {
            display: flex;
            justify-content: flex-start;
            font-size: 1.9rem;
            font-weight: bold;
        }
        .eachcat {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            cursor: pointer;
            transition: ease all 0.5s;
            &:hover {
                transition: ease all 0.5s;
                font-weight: bold;
            }
        }
    }
    .producthead {
        display: flex;
        margin-bottom: 4rem;
        > div {
            flex: 0 0 50%;
            display: flex;
            justify-content: flex-end;
            font-weight: bold;
            font-size: 1.5rem;
            &:nth-child(2) {
                cursor: pointer;
                color: #ddd;
            }
        }
    }
    .sectionholder {
        transition: ease all 0.5s;
        position: relative;
        padding: 2px 0;
        margin-bottom: 20px;
    }
`;

export const ProductDetailsContainer = styled.div`
    transition: ease all 0.5s;
    position: relative;
    margin: 6rem 7rem;
    .rowdetails {
        margin: 3rem 0;
        transition: ease all 0.5s;
    }
    .prdimg {
        height: 300px;
        img {
            object-fit: contain;
            width: 80%;
            height: 300px;
            margin: auto;
        }
    }
    .slick-dots li button {
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 50px;
        background: #ddd;
    }
    .slick-dots li {
        &.slick-active {
            button {
                &:before {
                    border: 2px solid var(--secondary--color);
                    border-radius: 50px;
                }
            }
        }
    }
    .sidedetails {
        font-family: 'Made Tommy', sans-serif;
        h3 {
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
        }
        h4 {
            margin-bottom: 1rem;
        }
        .desc {
            line-height: 30px;
            margin-bottom: 3rem;
        }
        .rating {
            margin-bottom: 1rem;
        }
        .amount {
            font-weight: bold;
            font-size: 1.9rem;
        }
        button {
            display: flex;
            align-items: center;
            padding: 10px 3rem;
            height: 40px;
        }
    }
    @media (max-width: 768px) {
        margin: 4rem 1rem;
    }
`;

export const ProductCardHolder = styled.div`
    position: relative;
    transition: ease all 0.5s;
    transform: translateY(0);
    cursor: pointer;
    border-radius: 4px;
    font-family: 'Made Tommy', sans-serif;
    height: 330px;
    overflow: hidden;
    padding: 1rem 0;
    margin-bottom: 25px;
    .image {
        padding: 0 0 15px 0;
        height: 200px;
        img {
            object-fit: contain;
            width: 100%;
            height: inherit;
            margin: auto;
        }
    }
    .carddetails {
        padding: 10px 15px;
        position: relative;
        transition: ease all 0.5s;
        h4 {
            font-size: 1.52rem;
        }
        span {
            font-size: 1.65rem;
        }
        .discount {
            color: #ff0000;
        }
        .price {
            color: #878787;
            position: relative;
            &:after {
                position: absolute;
                content: '';
                background: var(--black-color);
                height: 1px;
                bottom: 10px;
                width: 100%;
                left: 0;
                right: 0;
            }
        }
    }
    .actions {
        position: absolute;
        bottom: -2px;
        z-index: 2;
        transition: ease all 0.5s;
        width: 100%;
        transform: translateY(50px);
        visibility: hidden;
        opacity: 0;
        span {
            color: var(--white-color);
            font-weight: bold;
        }
        svg {
            font-size: 2.5rem;
        }
        &__ops {
            cursor: pointer;
            text-align: center;
            padding: 0.81rem 0;
            transition: ease all 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;
            &.cartops {
                background: #908;
                svg {
                    fill: var(--white-color);
                }
                &:hover {
                    //background: var(--white-color);
                    svg {
                        fill: var(--background-color);
                    }
                }
            }
            &.whistlist {
                background: var(--white-color);
                transition: ease all 0.5s;
                &:hover {
                    transition: ease all 0.5s;
                    svg {
                        stroke: #ff0000;
                    }
                }
            }
        }
    }
    &:hover {
        transform: translateY(1px);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.28);
        .actions {
            transform: translateY(0);
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const ProductSearchContainer = styled.div`
    margin: 20px 5rem;
    position: relative;
    transition: ease all 0.5s;
    .card-style {
        border-radius: 3px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
    }
    .sidebar_result {
        transition: ease all 0.5s;
        h3 {
            font-size: 1.2rem;
        }
    }
`;
