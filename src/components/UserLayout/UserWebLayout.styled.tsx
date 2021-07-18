import styled from 'styled-components';

export const HomeBannerContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    height: 100vh;
    background-image: url('/img/banner.png');
    background-position: 90% 10%;
    .welcome {
        position: relative;
        transition: ease all 0.5s;
        padding: 2rem 9rem;
        top: 50%;
        font-family: 'Made Tommy', sans-serif;
        h3 {
            color: var(--white-color);
            text-transform: uppercase;
            font-size: 6.5rem;
            margin-bottom: 0;
            font-weight: bold;
        }
        h4 {
            color: var(--white-color);
            font-size: 4rem;
            font-weight: lighter;
        }
        .btn-shop {
            display: flex;
            padding: 10px 4rem;
            height: 50px;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: 2px solid var(--white-color);
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
                transform: translateY(-5px);
                background: var(--deeper-main);
                border: 2px solid var(--deeper-main);
                color: var(--white-color);
                //padding: 10px 4.5rem;
            }
        }
    }
`;

export const BannerProduct = styled.div`
    width: 50%;
    transition: ease all 0.5s;
    margin: -10rem auto 2rem;
    //background: var(--white-color);
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
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
`;

export const FeaturedProductHolder = styled.div`
    position: relative;
    transition: ease all 0.5s;
    margin: 2rem 9rem;
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
    margin: 2rem 4rem;
`;

export const LowerBannerSection = styled.div`
    position: relative;
    transition: ease all 0.5s;
    height: 400px;
    background: var(--background-color);
`;
