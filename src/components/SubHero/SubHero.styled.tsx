import styled from 'styled-components';

export const SubHeroStyled = styled.section`
    .SubHero {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
        align-items: center;
    }

    .SubHero .Card {
        width: 13.9rem;
        margin-bottom: 2.3rem;
    }

    .SubHero .Card .CardTitle {
        font-size: 1.4rem;
        color: #878787;
        font-weight: 400;
    }


    //mobile
    @media only screen and (max-width: 768px){
        .SubHero{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 10px;
        }
        .SubHero .Card .CardTitle{
            padding: 10px;
        }
        .SubHero .Card {
            width: 15rem;
        }
    }

    //medium screens

    @media (min-width: 601px) and (max-width: 1024px) {
        .SubHero {
            justify-content: center;
            position: relative;

            //Images have shadows and hence cannot collapse like the UI

            bottom: 10rem;
            margin-bottom: -10rem;
        }

        .Card .Card {
            width: 30rem;
            height: 20rem;
            margin-bottom: 8rem;
        }

        .Card .CardTitle {
            font-size: 3rem;
            color: inherit;
            font-weight: 500;
        }
    }

    //Large screens

    @media (min-width: 1025px) {
        .SubHero {
            justify-content: center;
            position: relative;

            //Images have shadows and hence cannot collapse like the UI

            bottom: 10rem;
            margin-bottom: -10rem;
        }

        .SubHero .Card {
            width: 30rem;
            height: 20rem;
        }

        .SubHero .Card .CardTitle {
            font-size: 3rem;
            color: inherit;
            font-weight: 500;
        }
    }
`;
