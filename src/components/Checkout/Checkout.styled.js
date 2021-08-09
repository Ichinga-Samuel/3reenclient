import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    position: relative;
    transition: ease all 0.5s;
    margin: 2rem 13rem;
    h3 {
        font-size: 2.63rem;
        font-family: 'MADE TOMMY', sans-serif;
    }
    .sumaryheader {
        padding: 10px 0;
        font-weight: 400;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        svg {
            font-size: 2rem;
            margin-right: 10px;
        }
    }
    .detailsInner {
        padding: 5px 0 5px 3rem;
    }
    .checkoutPage {
        margin-top: 2rem;
        .checkout__card {
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.09);
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
            .carthead {
                padding: 15px;
                border-bottom: 1px solid #ddd;
                display: flex;
                justify-content: space-between;
                h4 {
                    font-size: 1.5rem;
                    position: relative;
                    margin-bottom: 0;
                }
                a {
                    color: var(--background-color);
                    text-decoration: underline;
                }
            }
            .cartitems {
                //padding: 15px;
            }
            .carttotal {
                padding: 10px 8px;
                .pb {
                    padding-bottom: 1rem;
                }
                span {
                    font-size: 1.5rem;
                    font-weight: lighter;
                }
                p {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 0;
                    &.discount {
                        color: rgb(100, 40, 30);
                    }
                    &.total {
                        font-weight: bold;
                        font-size: 1.7rem;
                    }
                }
            }
        }
        .cartops {
            form {
                border: 1px solid var(--secondary-color);
                transition: ease all 0.5s;
                border-radius: 4px;
                overflow: hidden;
                .ant-input {
                    height: 40px;
                    border: none;
                }
                .ant-btn-primary {
                    border: none;
                    height: 40px;
                    border-radius: 0;
                }
            }
        }
        .no-pad {
            padding: 0 !important;
        }
    }
`;

export const CartItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    //justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    > div {
        margin-right: 10px;
    }
    .image {
        width: 70px;
        height: 70px;
        background: #ddd;
        img {
            object-fit: contain;
        }
    }
    .c-name {
        font-size: 1.6rem;
        p {
            word-break: break-word;
        }
    }
    .p-item {
        font-weight: bold;
        position: absolute;
        right: 0;
        top: 30px;
    }
`;
