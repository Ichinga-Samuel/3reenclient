import styled from 'styled-components';

export const CheckoutHeaderStyled = styled.div`
    .checkoutHeader {
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 4.5rem;
        justify-content: space-between;
    }

    .logo {
        margin-left: 4.875rem;
    }
    .form-group {
        display: flex;
        margin-left: 19.563rem;
    }

    .mobileNav {
        display: none;
    }
    .form-control {
        height: 3rem;
        width: 31.813rem;
    }

    .btn-primary {
        width: 7.313rem;
        height: 3rem;
        border-radius: 0px !important;
        background: #ffaf38;
        border: none;
        font-family: made tommy;
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    .actionUser {
        display: flex;
        margin-right: 2rem;
    }
    .cartBasket {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cartBasket > h2 {
        font-size: 1.5rem;
        color: #590a5b;
        margin-left: 0.8rem;
        display: flex;
        align-items: center;
    }

    .cartBasketIcon {
        width: 2.5rem;
        margin-left: 4rem;
    }
    .profileDetail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 4rem;
    }

    .UserIcon {
        width: 2.5rem;
    }

    .ArrowIcon {
        width: 0.8rem;
        margin-left: 1.4rem;
        display: flex;
        align-items: center;
    }

    .profileDetail > h2 {
        font-size: 1.5rem;
        color: #590a5b;
        margin-left: 0.8rem;
        display: flex;
        align-items: center;
    }

    .mobileCheckout {
        display: none;
    }
    .mobileIcon {
        width: 2rem;
        cursor: pointer;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .checkout-m {
        margin-right: 3rem;
    }
    @media only screen and (max-width: 1025px) {
        .actionUser {
            display: none;
        }

        .mobileCheckout {
            display: block;
        }

        .form-group {
            display: none;
        }

        .mobileLogo {
            display: none;
        }

        .mobileNav {
            display: block;
            cursor: pointer;
        }
    }
`;
