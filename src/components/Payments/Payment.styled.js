import styled from 'styled-components';

export const PaymentStyled = styled.div`
    @media only screen and (max-width: 380px) {
        .paymentWrapper {
            width: 100% !important;
        }
    }

    .container {
        margin-top: 5rem !important;
        width: 80%;
        margin: auto;
    }

    .paymentContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .paymentWrapper {
        width: 60%;
    }

    .paymentWrapper > h4 {
        font-size: 2rem;
    }

    .paymentWrapper > p {
        font-size: 1.4rem;
        font-weight: 300;
    }
    .paymentHeader {
        height: 3.188rem;
        background: purple;
        color: #ffffff;
        display: flex;
        align-items: center;
    }

    .paymentHeader > h3 {
        font-size: 1.3rem;
        margin-left: 2rem;
        font-weight: 300;
    }

    .paymentBox {
        border: 1px solid purple;
        height: 64%;
        display: flex;
        flex-direction: column;
    }
    .circleBorder {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 9px solid #ffaf38;
        margin-left: 1rem;
        background: transparent;
    }

    input[type='radio'] {
        border: 20px solid green;
        width: 20px;
        height: 2em;
        background: purple;
        background: red;
        margin-left: 1rem;
    }

    .icons {
        margin-top: 1.7rem;
        margin-left: 1rem;
    }

    .icons > img {
        margin: 0.5rem;
        width: 3.5rem;
    }

    .paystack {
        width: 7rem !important;
    }

    .paymentContainerArea > p {
        margin-left: 1.5rem;
        font-weight: 300;
        font-size: 1.4rem;
    }

    .gray {
        margin-left: 1.5rem;
        width: 13.125rem !important;
        border: 1px solid gray;
        font-size: 1.25rem;
        color: gray;
        font-weight: 300;
    }

    .paymentFooter {
        height: 3.188rem;
        background: purple;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 2rem;
    }

    .paymentFooter > h3 {
        font-size: 1.3rem;
        margin-left: 2rem;
        font-weight: 300;
    }

    .actionArea {
        margin-top: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actionBack > a {
        text-decoration: none;
        color: orange;
    }
    .back {
        mergin-left: -12rem;
        color: orange;
        font-size: 1.2rem;
        display: flex;
        justify-content: flex-start;
    }

    .actionBack {
        display: flex;
        flex-direction: row;
    }

    .payNow > button {
        background: orange;
        color: #ffffff;
        width: 14rem;
        padding: 0.6rem;
        font-size: 1.2rem;
    }

    .paymentWrapper {
        margin-bottom: 10rem;
    }

    .productContainer {
        width: 30%;
        height: 29.5rem;
        border: 1px solid purple;
        margin-left: 2rem;
        margin-top: 2rem;
    }

    .productWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.563rem;
    }

    .productDescription {
        display: flex;
        align-items: center;
    }

    .productDescription > img {
        width: 5rem;
        height: 5rem;
        object-contain: fit;
        margin-left: 0.5rem;
    }

    .productTitle {
        margin-left: 0.7rem;
        font-size: 1.4rem;
    }

    .amount > h3 {
        font-size: 1.4rem;
        font-weight: 400;
        margin-right: 0.7rem;
    }

    .productPrice {
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        border-top: 2px solid purple;
    }

    .Fee {
        display: flex;
        justify-content: space-between;
        margin: 0.7rem;
    }

    .Fee > h3 {
        font-size: 1.3rem;
        font-weight: 300;
    }

    .heading {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 6rem;
        text-align: center;
    }

    .paymentSuccess {
        background: ;
    }

    .mobileOrder {
        display: none;
    }

    .mobileConfirmation {
        display: none;
    }

    @media only screen and (max-width: 750px) {
        .paymentContainer {
            display: flex;
            flex-direction: column-reverse;
        }

        .paymentWrapper {
            width: 100%;
        }

        .productContainer {
            width: 100%;
            margin-left: 0rem;
        }

        .paymentWrapper > h4 {
            margin-top: 0.8rem;
        }

        .actionArea {
            display: flex;
            flex-direction: column-reverse;
        }

        .actionBack > span {
            margin-top: 20px;
        }

        a > img {
            display: none;
        }

        .payNow > button {
            width: 25rem;
            height: 4rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        .mobileConfirmation {
            display: flex;
            flex-direction: column;
        }

        .track {
            margin-bottom: 1rem;
            background: orange;
            margin-top: 2rem;
            padding: 1rem;
            padding-left: 8rem;
            padding-right: 8rem;
            width: 100%;
            border-top-left-radius: 3rem;
            border-top-right-radius: 3rem;
            border-bottom-left-radius: 3rem;
            border-bottom-right-radius: 3rem;
        }

        .orderagain {
            color: orange;
            background: transparent !important;
            margin-bottom: 1rem;
            background: orange;
            margin-top: 2rem;
            padding: 1rem;
            padding-left: 8rem;
            padding-right: 8rem;
            width: 100%;
            border-top-left-radius: 3rem;
            border-top-right-radius: 3rem;
            border-bottom-left-radius: 3rem;
            border-bottom-right-radius: 3rem;
            border: 1.5px solid orange;
        }

        .paymentVerified > img {
            width: 7rem !important;
        }

        .paymentVerified > h4 {
            text-transform: uppercase;
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
        }

        .mobileOrder {
            display: block;
            font-size: 1rem;
            font-weight: 300;
        }

        .desktop {
            display: none;
        }
    }

    .paymentSuccess {
        background: #590a5b;
        height: 100vh;
    }

    .paymentVerified {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .paymentVerified > img {
        width: 15rem;
        margin-bottom: 2rem;
        margin-top: 10rem;
    }

    .paymentVerified {
        color: #ffffff;
    }

    .desktop {
        background: orange;
        margin-top: 2rem;
        padding: 1rem;
        margin-top: 10rem;
        padding-left: 3rem;
        padding-right: 3rem;
    }
`;
