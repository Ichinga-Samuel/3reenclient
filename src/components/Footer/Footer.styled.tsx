import styled from 'styled-components';

export const FooterStyled = styled.footer`
    .Footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;
        width: 100%;
        padding: 0 20px;
        margin: 15px 10px;
        position: relative;
    }
    .Footer div {
        padding: 0 10px;
        width: 25%;
    }
    .Footer .Contact p,
    .Footer .Sitemap p,
    .Footer .Flutterwave p,
    .Footer .Socials p {
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
    }
    .Footer .Contact,
    .Footer .Sitemap,
    .Footer .Flutterwave,
    .Footer .Socials {
        width: 100%;
    }
    .Socials .input {
        display: none;
    }
    .Footer .Sitemap li {
        list-style-type: none;
        text-decoration: none;
        padding: 5px;
        text-align: center;
    }
    .Footer .Sitemap li a {
        color: #000;
        & :hover {
            text-decoration: none;
            color: #ccc;
        }
    }
    /* mobile */
    @media only screen and (max-width: 768px) {
        .Footer .Contact,
        .Footer .Sitemap,
        .Footer .Flutterwave {
            display: none;
        }
        .Footer .Socials .Nav {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        .Footer .Socials .Nav li {
            list-style-type: none;
        }
        .Footer .Socials .Nav li a {
            text-decoration: none;
        }
        .Footer .Socials .Nav li a img {
            width: 100px;
        }
        .Socials p {
            display: none;
        }
        .Socials .input {
            display: inline-block;
            width: 100%;
            position: relative;
        }
        /* .Input {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
        } */
        .Search {
            border-radius: 20px;
            border: none;
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
            /* position: absolute;
            right: 0; */
            float: right;
            width: 6rem;
            height: 3rem;
            background-color: #590A5B;
            color: white;
            place-items: center;
            border-radius: 20px;
            cursor: pointer;
            border:none;
        }
        .Socials .Logo {
            margin-left: 12rem;
            padding-bottom: 15px;
            width: 150px;
        }
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
