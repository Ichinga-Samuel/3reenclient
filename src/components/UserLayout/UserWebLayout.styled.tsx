import styled from 'styled-components';

export const HomeBannerContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    height: 100vh;
    //background-image: url('/img/banner.png');
    background: url('/img/home/3reen-banner.jpg') no-repeat center;
    //background-position: 90% 10%;
    background-size: cover;
    //background: var(--secondary-color);
    .welcome {
        position: relative;
        transition: ease all 0.5s;
        padding: 6rem 0 2rem 5rem;
        //margin-top: 12rem;
        //top: 80%;
        font-family: 'Made Tommy', sans-serif;
        h3 {
            color: var(--background-color);
            //text-transform: uppercase;
            font-size: 6.5rem;
            margin-bottom: 0;
            font-weight: bolder;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
        }
        .btn-shop {
            display: flex;
            padding: 10px 5rem;
            height: 56px;
            justify-content: center;
            align-items: center;
            background: var(--background-color);
            border: 2px solid var(--background-color);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
            transition: ease all 0.5s;
            transform: translateY(0);
            text-transform: uppercase;
            margin-top: 5rem;
            color: var(--white-color);
            border-radius: 4px;
            font-weight: bold;
            font-size: 1.7rem;
            &:hover {
                transition: ease all 0.5s;
                transform: translateY(-2px);
                //background: var(--deeper-main);
                //border: 2px solid var(--deeper-main);
                box-shadow: none;
                color: var(--white-color);
                //padding: 10px 4.5rem;
            }
        }
    }
    @media (max-width: 768px) {
        .welcome {
            padding: 12rem 0 1rem 3rem;
            h3 {
                font-size: 5.5rem;
            }
        }
    }
`;

export const BannerProduct = styled.div`
    width: 80%;
    transition: ease all 0.5s;
    margin: -11rem auto 2rem;
    //background: var(--white-color);
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
    @media (max-width: 768px) {
        width: 90%;
        margin: 1rem auto 2rem;
        position: relative;
        .ant-row {
            row-gap: 20px !important;
        }
    }
    h4 {
        text-align: center;
        padding: 10px 0;
        transition: ease all 0.5s;
    }
`;

export const EmptyDiv = styled.div`
    height: 150px;
    position: relative;
    transition: ease all 0.5s;
    @media (max-width: 768px) {
        height: 10px;
    }
`;

export const TBHolder = styled.div`
    transition: ease all 0.5s;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    height: 160px;
    transform: translateX(0);
    &:hover {
        transition: ease all 0.5s;
        transform: translateX(5px);
    }
    img {
        object-fit: contain;
        width: 100%;
        //height: inherit;
    }
    @media (max-width: 768px) {
        height: 120px;
        padding: 0 0 0 7px;
    }
`;

export const FeaturedProductHolder = styled.div`
    position: relative;
    transition: ease all 0.5s;
    margin: 2rem 9rem;
    @media (max-width: 768px) {
        margin: 2rem 2rem;
    }
`;

export const FeaturedCardHolder = styled.div`
    position: relative;
    transition: ease all 0.5s;
    padding: 15px;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    font-family: 'Made Tommy', sans-serif;
    .image {
        padding-right: 4px;
        img {
            height: 100px;
            object-fit: contain;
        }
    }
    .details {
        position: relative;
        h4 {
            font-size: 1.62rem;
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
`;

export const BestSellerContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    margin: 6rem 9rem;
    @media (max-width: 768px) {
        margin: 6rem 2rem;
    }
    .bestCat {
        padding-top: 4rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        > div {
            transition: ease all 0.5s;
            display: flex;
            margin-left: 4rem;
            font-weight: bold;
            font-size: 1.8rem;
            cursor: pointer;
            position: relative;
            &:after {
                position: absolute;
                content: '';
                background: var(--background-color);
                height: 3px;
                bottom: 3px;
                width: auto;
                left: 0;
                right: 0;
                transform: translateX(-5px);
                opacity: 0;
                visibility: hidden;
                transition: ease all 0.5s;
            }
            &:hover {
                color: var(--background-color);
                &:after {
                    visibility: visible;
                    opacity: 1;
                    transition: ease all 0.5s;
                    transform: translateX(0);
                }
            }
            &.active {
                color: var(--background-color);
                position: relative;
                &:after {
                    position: absolute;
                    content: '';
                    background: var(--background-color);
                    height: 3px;
                    bottom: 3px;
                    width: auto;
                    left: 0;
                    right: 0;
                    transition: ease all 0.5s;
                }
            }
        }
    }
    .bestproducts {
        position: relative;
        transition: ease all 0.5s;
        margin-top: 3rem;
    }
    .loadmore {
        position: relative;
        transition: ease all 0.5s;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
    }
`;

export const BestProductHolder = styled.div`
    position: relative;
    transition: ease all 0.5s;
    transform: translateY(0);
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    font-family: 'Made Tommy', sans-serif;
    height: 330px;
    overflow: hidden;
    padding: 1rem 0;
    margin-bottom: 25px;
    .image {
        padding: 15px;
        img {
            object-fit: contain;
            width: 100%;
            height: 140px;
            margin: auto;
        }
    }
    .carddetails {
        padding: 10px 3rem;
        position: relative;
        transition: ease all 0.5s;
        h4 {
            font-size: 1.82rem;
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
        bottom: 0;
        z-index: 2;
        transition: ease all 0.5s;
        width: 100%;
        transform: translateY(50px);
        visibility: hidden;
        opacity: 0;
        svg {
            font-size: 2.5rem;
        }
        &__ops {
            cursor: pointer;
            text-align: center;
            padding: 0.81rem 0;
            transition: ease all 0.5s;
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
    @media (max-width: 768px) {
        height: 300px;
        .image {
            padding: 10px;
            img {
                height: 100px;
            }
        }
        .carddetails {
            padding: 10px 2rem;
        }
    }
    &:hover {
        transform: translateY(1px);
        .actions {
            transform: translateY(0);
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const LowerBannerSection = styled.div`
    position: relative;
    transition: ease all 0.5s;
    height: 430px;
    //background: var(--background-color);
    background: var(--black-color) url('/img/home/banner-small.jpg') no-repeat center;
    background-size: cover;
    .welcomelower {
        position: relative;
        transition: ease all 0.5s;
        padding: 2rem 9rem;
        margin-top: 9rem;
        font-family: 'Made Tommy', sans-serif;
        top: 80%;
        h3 {
            color: var(--white-color);
            //text-transform: capitalize;
            font-size: 4.5rem;
            margin-bottom: 0;
            font-weight: bold;
        }
        h4 {
            color: var(--white-color);
            font-size: 2rem;
            font-weight: lighter;
        }
        .btn-shop {
            display: flex;
            padding: 10px 4rem;
            height: 50px;
            justify-content: center;
            align-items: center;
            background: var(--secondary-color);
            border: none;
            transition: ease all 0.5s;
            transform: translateY(0);
            //text-transform: uppercase;
            margin-top: 5rem;
            color: var(--background-color);
            border-radius: 4px;
            font-weight: bold;
            font-size: 1.7rem;
            &:hover {
                transition: ease all 0.5s;
                transform: translateY(-2px);
                border: none;
                color: var(--white-color);
                //padding: 10px 4.5rem;
            }
        }
    }
    .lowerbanner {
        //min-height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url('/img/iPhone.png');
        background-position: 32% center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    @media (max-width: 768px) {
        background-size: contain;
    }
`;
