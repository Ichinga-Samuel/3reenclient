import styled from 'styled-components';

export const ImageHeader = styled.div`
    height: 70vh;
    //min-width: 100%;
    margin: 20px 4rem;
    background: url('/img/hp-omen.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
