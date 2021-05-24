import styled from 'styled-components';

export const VendorHeaderStyled = styled.header`
    position: fixed;
    z-index: 100;
    width: 100%;
    .Header {
        display: grid;
        /*grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px; */
        // border-bottom: 1px solid #ccc;
        // padding: 0.5rem 2rem;
        background: #fff;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
        align-items: center;
        position: relative;
        z-index: 1;
    }

    .Brand {
        //This is positioned because there are empty spaces in the logo
        position: relative;
        // top: 0.4rem;
        // right: 0.5rem;
        // grid-column: 1/2;
        // margin-top: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Input {
        grid-column: 3/10;
        display: flex;
        // margin-top: 10px;
        justify-content: center;
    }
    .Search {
        width: 80%;
        display: flex;
        align-items: center;
        height: 4rem;
        padding: 0.5rem 1.5rem;
        font-weight: 500;
        background: #FAFAFA;
        // box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    }
    .Search input[placeholder] {
        font-size: 1.3rem;
        color: #878787;
        font-weight: 500;
    }
    .SearchBtn {
        width: 10rem;
        height: 4rem;
        background-color: #ffaf38;
        color: white;
        place-items: center;
    }
    .Cart {
        grid-column: 11/12;
        padding-left: 10px;
        display: flex;
        align-items: center;
        margin: auto;
        /*justify-content: space-evenly; */
        position: relative;
        cursor: pointer;
        span {
            font-size: 2.3rem;
            color: #590a5b;
        }
        &__label {
            color: #590A5B;
            font-weight: 500;
            font-size: 1.2rem;
            padding-left: 10px;
        }
        &__count {
            width: 20px;
            height: 20px;
            border-radius: 50px;
            justify-content: center;
            background: #FFAF38;
            padding: 2px;
            display: flex;
            position: absolute;
            align-items: center;
            color: #fff;
            top: -5px;
            right: 25px;
            font-weight: 500;
        }
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
            color: #590A5B;
            font-weight: 500;
            font-size: 1.2rem;
            padding: 20px 5px;
            margin-bottom: 0;
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
