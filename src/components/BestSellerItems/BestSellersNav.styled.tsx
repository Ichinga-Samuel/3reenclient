import styled from 'styled-components';

export const BestSellerNavStyled = styled.nav`
    .BestSellerNav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        list-style: none;
        font-size: 1.6rem;
        font-weight: 300;
        color: $fadedBlack;
        cursor: pointer;
    }

    .BestSellerNav li {
        margin-right: 5rem;
    }

    .BestSellerNav li:last-child {
        margin-right: 0;
    }

    .BestSellerNav li a {
        text-decoration: none;
    }

    .BestSellerNav .active {
        color: #590a5b;
    }

    .BestSellerNav .active:after {
        content: '';
        display: table;
        width: 130%;
        height: 0.5rem;
        background-color: #590a5b;
        position: relative;
        left: 0.4rem;
    }

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        .BestSellerNav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 2rem;

            list-style: none;

            font-size: 1.6rem;
            font-weight: 700;
            cursor: pointer;
        }

        .BestSellerNav li {
            margin-right: 5rem;
        }

        .BestSellerNav li:last-child {
            margin-right: 0;
        }

        .BestSellerNav li a {
            text-decoration: none;
        }

        .BestSellerNav .active {
            color: $mainPurple;
        }

        .BestSellerNav .active:after {
            content: '';
            display: table;

            width: 130%;
            height: 0.5rem;
            background-color: $mainPurple;

            position: relative;
            left: 0.4rem;
        }
    }

    //large screens
    @media (min-width: 1025px) {
        .BestSellerNav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 2rem;
            list-style: none;
            font-size: 1.6rem;
            font-weight: 700;
            cursor: pointer;
        }

        .BestSellerNav li {
            margin-right: 5rem;
        }

        .BestSellerNav li :last-child {
            margin-right: 0;
        }

        .BestSellerNav li a {
            text-decoration: none;
        }

        .BestSellerNav.active {
            color: $mainPurple;
        }

        .BestSellerNav.active:after {
            content: '';
            display: table;
            width: 130%;
            height: 0.5rem;
            background-color: $mainPurple;
            position: relative;
            left: 0.4rem;
        }
    }
`;
