import styled from 'styled-components';

export const Banner = styled.section`
    .Banner {
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url('/img/iphone3x.png');
        background-position: 32% center;
        background-repeat: no-repeat;
        background-size: cover;
    }

 
    //Medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        .Banner {
            margin-top: 5rem;
            min-height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-image: url('/img/iphone3x.png');
            background-position: 32% 50%;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    //Large screens
    @media (min-width: 1025px) {
        .Banner {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-image: url('/img/iphone3x.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
`;
