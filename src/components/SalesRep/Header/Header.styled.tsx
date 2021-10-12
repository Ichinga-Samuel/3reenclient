import styled from 'styled-components';

export const HeaderStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 100;
    background-color: #fff;

    .Brand {
        //This is positioned because there are empty spaces in the logo
        position: relative;
        top: 0.4rem;
        right: 0.5rem;
    }

    .NavItems {
        display: none;
    }

    // medium screens

    @media @media (min-width: 601px) and (max-width: 1024px) {
        .Cart,
        .Hamburger {
            display: none;
        }

        .Brand {
        }

        .NavItems {
            display: flex;
        }

        .NavItems:last-child {
            margin-right: 0;
        }

        .NavItems li {
            list-style-type: none;
            margin-right: 3.2rem;
        }

        .NavItems li:last-child a {
            text-decoration: none;
            font-weight: 700;
            font-size: 1.6rem;
            color: #878787;
        }

        active {
            color: #590a5b;
        }
    }

    // large screens

    @media (min-width: 1025px) {
        padding: 1rem 12.3rem;

        .Cart,
        .Hamburger {
            display: none;
        }

        .Brand {
            margin-right: auto;
            //This is positioned because there are empty spaces in the logo
            position: relative;
            top: 0.4rem;
        }

        .NavItems {
            display: flex;
            //This is done to make right margin look like UI
            position: relative;
            right: 15rem;
        }

        .NavItems li {
            list-style-type: none;
            margin-right: 3.2rem;
        }

        .NavItems li a {
            text-decoration: none;
            font-weight: 700;
            font-size: 1.6rem;
            color: #878787;
        }

        .active {
            color: #590a5b;
            border-bottom: 4px solid #590a5b;
        }
    }
`;
