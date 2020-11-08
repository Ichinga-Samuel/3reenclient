import styled from 'styled-components';

export const JumbotronStyled = styled.div`
    .Container {
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url('/img/banner.png');
        background-position: 90% 10%;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        position: relative;
        z-index: -1;
    }

    .Container h1 {
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 1.2;
        margin-left: 1rem;
    }

    .Container h1 span {
        display: flex;
        font-size: 2rem;
        font-weight: 400;
        text-transform: lowercase;
        margin-bottom: 2rem;
    }

    .Container .CTA {
        background: #590a5b;
        color: white;
        width: 13.4rem;
        height: 5.2rem;
        margin-left: 1rem;
        border-radius: 5rem;
        font-size: 1.8rem;
        text-transform: lowercase;
        font-weight: 400;
    }

    // medium screens

    @media (min-width: 768px) {
        .Container {
            min-height: 50vh;
            background-position: 80% 10%;
        }

        .Container h1 {
            font-size: 12vw;
            line-height: 0.9;
            margin-left: 8rem;
        }

        .Container h1 span {
            font-size: 5rem;
            font-weight: 500;
            margin-left: 0.6rem;
        }

        .Container .CTA {
            background: transparent;
            width: 15rem;
            height: 5rem;
            margin-left: 8.6rem;
            border: 0.4rem solid #ffffff;
            font-size: 2.4rem;
        }
    }

    //Large screens

    @media (min-width: 1024px) {
        .Container {
            min-height: 100vh;
        }

        .Container h1 {
            font-size: 12rem;
            font-weight: 500;
            line-height: 0.9;
            margin-left: 8rem;
        }

        .Container h1 span {
            font-size: 5rem;
            font-weight: 500;
            margin-left: 0.6rem;
        }

        .Container .CTA {
            background: transparent;
            width: 15rem;
            height: 5rem;
            //...
            margin-left: 8.6rem;
            border: 0.4rem solid #ffffff;
            font-size: 2.4rem;
        }
    }
`;
