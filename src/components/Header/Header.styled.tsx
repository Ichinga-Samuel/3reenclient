import styled from 'styled-components';

export const HeaderStyled = styled.header`
    .Header {
        display: grid;
        /*grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px; */
        border-bottom: 1px solid #ccc;
        padding: 0.5rem 2rem;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    }

    .Brand {
        //This is positioned because there are empty spaces in the logo
        position: relative;
        top: 0.4rem;
        right: 0.5rem;
        grid-column: 1/2;
        margin-top: 10px;
    }
    .Input {
        grid-column: 3/10;
        display: flex;
        margin-top: 10px;
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
        padding-left: 10px;
        display: flex;
        align-items: center;
        /*justify-content: space-evenly; */
    }
    .Profile {
        grid-column: 12/12;
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        img {
            padding-left: 5px;
        }
        p{
            padding: 20px 5px;
        }
    }
    // medium screens

    @media only screen and (max-width: 768px) {
        .Header{
            padding: 20px;
            
        }
        .Brand {
        display: none;
    }
    .Input {
       display: none;
    }
    .Cart {
       display:none;
    }
    .Profile {
       display: none;
    }

    // large screens

    @media (min-width: 1025px) {
        /* padding: 1rem 12.3rem; */

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
