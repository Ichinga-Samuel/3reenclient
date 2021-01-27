import styled from 'styled-components';

export const HeaderStyled = styled.header`
    .Header {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 15px;
        margin: 5px;
    }

    .Brand {
        //This is positioned because there are empty spaces in the logo
        position: relative;
        top: 0.4rem;
        right: 0.5rem;
        grid-column: 1/2;
    }
    .Input {
        grid-column: 3/10;
        display: flex;
    }
    .Search {
        width: 80%;
        height: 4rem;
        padding: 1.5rem;
        font-weight: 500;
        background: #ffffff;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    }
    .Search input[placeholder] {
        font-size: 1.3rem;
        color: #878787;
        font-weight: 500;
    }
    .SearchBtn {
        width: 6.2rem;
        height: 4rem;
        background-color: #ffaf38;
        color: white;
        place-items: center;
    }
    .Cart {
        grid-column: 11/11;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .Profile {
        grid-column: 12/12;
        margin-left: 15px;
    }
    // medium screens

    @media @media (min-width: 601px) and (max-width: 1024px) {
        /* .Cart,
        .Hamburger {
            display: none;
        }

        .Brand {
        } */
    }

    // large screens

    @media (min-width: 1025px) {
        padding: 1rem 12.3rem;

        /* .Cart,
        .Hamburger {
            display: none;
        } */

        /* .Brand {
            margin-right: auto;
            //This is positioned because there are empty spaces in the logo
            position: relative;
            top: 0.4rem;
        } */
    }
`;
