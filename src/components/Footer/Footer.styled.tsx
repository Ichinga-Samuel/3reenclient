import styled from 'styled-components';

export const FooterStyled = styled.footer`
    .Footer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .Footer div {
        padding: 0 25px;
    }
    .Footer .Contact {
        padding: 0 20px;
    }
    .Footer .Contact p,
    .Footer .Sitemap p,
    .Footer .Flutterwave p,
    .Footer .Socials p {
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
    }
    .Footer .Sitemap li {
        list-style-type: none;
        text-decoration: none;
        padding: 5px;
    }
    .Footer .Sitemap li a {
        color: #000;
        & :hover {
            text-decoration: none;
            color: #ccc;
        }
    }
    .Footer .Flutterwave {
        padding: 0 20px;
    }
    .Footer .Search {
        // width: 38rem;
        height: 5.2rem;
        padding: 2rem;
        font-weight: bold;
        border-radius: 5rem;
        background: #ffffff;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        position: relative;
    }

    .Footer .Logo {
        padding-left: 20px;
    }
    /* .Footer .Search input[type='text'] {
        width: 100%;
    } */

    /* .Footer .Search input[placeholder] {
        font-size: 1.6rem;
        color: #878787;
        font-weight: bold;
    }

    .Footer .Search .SearchBtn {
        width: 6.4rem;
        height: 5.2rem;
        background-color: #590a5b;
        border-radius: 5rem;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        display: grid;
        place-items: center;
    } */

    .Footer .Nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        list-style: none;
    }

    .Footer .Nav a {
        color: inherit;
        text-decoration: none;
    }

    .Footer .Nav a:hover {
        text-decoration: underline;
    }

    .Footer .Socials > img {
        margin-top: 2.5rem;
    }
    .Footer .Socials .Nav {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
    }

    // medium screen

    @media (min-width: 601px) and (max-width: 1024px) {
        .Footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .Footer .Search {
            // width: 38rem;
            // width: 90%;
            width: 53.9rem;
            height: 5.2rem;
            padding: 2rem;
            font-weight: bold;
            border-radius: 5rem;
            background: #ffffff;
            box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
            position: relative;
        }

        .Footer .Search input[type='text'] {
            width: 100%;
        }

        .Footer .Search input[placeholder] {
            font-size: 1.6rem;
            color: #878787;
            font-weight: bold;
        }

        .Footer .Search .SearchBtn {
            width: 6.4rem;
            height: 5.2rem;
            background-color: #590a5b;
            border-radius: 5rem;
            color: white;
            position: absolute;
            right: 0;
            top: 0;
            display: grid;
            place-items: center;
        }

        .Footer .Socials {
        }

        .Footer .Socials > img {
            margin-top: 2rem;
        }
        .Footer .Socials .Nav {
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
        }

        .Footer .Nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            list-style: none;
        }

        .Footer .Nav a {
            color: inherit;
            text-decoration: none;
        }

        .Footer .Nav a:hover {
            text-decoration: underline;
        }
    }

    //large screens
    @media (min-width: 1025px) {
        .Footer {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .Footer .Socials > img {
            margin-top: 2rem;
        }

        .Footer .Socials .Nav {
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
        }

        .Footer .Nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            list-style: none;
        }

        .Footer .Nav a {
            color: inherit;
            text-decoration: none;
        }

        .Footer .Nav a:hover {
            text-decoration: underline;
        }
    }
`;
