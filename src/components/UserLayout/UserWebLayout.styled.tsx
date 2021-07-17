import styled from 'styled-components';

export const HomeBannerContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    height: 100vh;
    //background: var(--secondary--color);
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
            transform: translateY(50);
            text-transform: uppercase;
            margin-top: 5rem;
            color: var(--white-color);
            border-radius: 4px;
            font-weight: bold;
            &:hover {
                transition: ease all 0.5s;
                transform: translateY(1px);
                background: var(--deeper-main);
                border: 2px solid var(--deeper-main);
                color: var(--white-color);
                padding: 10px 5rem;
            }
        }
    }
`;
