import styled from 'styled-components';

export const CartContainerStyled = styled.div`
    .product-cart {
        margin-top: 4.5rem;
        padding: 1rem;
    }
    select{
        background:#f4f4f4;
    }
    select:focus{
        outline:none;
    }
    .cart-collection {
        width: 85%;
        transition: ease all 0.5s;
        margin: 1rem auto;
    }
    button{
        background:#fff;
    }
    .cart-productSystem {
        display: grid;
        grid-template-columns: 80px auto;
        grid-gap: 0 1.3rem;
        padding: 1rem 1rem;
    }
    .cart-image {
        width: 50px;
        height: 50px;
        border-radius: 7px;
        background-size: cover;
    }
    .cart-header {
        display: flex;
        align-items:center;
        justify-content:space-around;
        p {
            font-weight: bold;
            color: #333;
            font-size: large;
            // width: 14.1%;
            // margin-left: -0.3rem;
            // &:first-child {
            //     width: auto;
            //     flex: 1;
            //     text-align: left;
            //     margin-left: 5.5rem;
            }
        }
    }
    .desktopHeading {
        text-align: center;
        margin-bottom: 3rem;
    }

    .mobileHeading {
        display: none;
    }
    .actionDelete {
        margin-top: 2.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        > p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 0.5rem;
        }
    }
    .deletebutton {
        font-size:30px;
        display: flex;
        color:#ffaf38;
        align-items: center;
        margin-top:10px;
        justify-content:center;
        margin-bottom: 0.6rem;
    }

    .cart-controls-sm {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0.8rem;
    }

    .cart-quantity-controls-sm {
        display: flex;
    }

    // .cart-quantity-controls input {
    //     // height: 20px;
    //     // width: 20px;
    //     // border: none;
    //     // outline: none;
    //     // text-align: center;
    //     // font-weight: bold;
    //     // font-size: 1.1rem;
    // }
    .cart-quantity-controls button{
        clip-path:circle();
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
    .cart-quantity-controls .minus{
        font-size:23px;
    }
    .cartMobile {
        display: none;
    }

    .cart-product-name {
        font-weight: 400;
        color: #590a5b;
        font-size: 1.5rem;
        margin-bottom: 0.3rem;
    }

    .cart-price-sm {
        color: #590a5b;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    .checkout {
        width: 100%;
        height: 3.25rem;
        border: 1px solid #ffaf38;
        background: #ffffff;
        color: #ffaf38;
        font-size: 1rem;
        margin-bottom: 2.125rem;
    }

    @media only screen and (min-width: 650px) {
        .cart-total {
            justify-content: flex-end;
            font-weight: bold;
        }

        .cart-action-button {
            justify-content: flex-end;
            flex-direction: column;
        }

        .cart-total > p:first-child {
            margin-right: 1rem;
        }

        .cart-action-button a {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .cart-action-button a:first-child {
            margin-right: 1rem;
        }

        .cart-collection {
            padding-top: 2rem;
        }

        .actionPrice {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 3rem;
        }

        .cart-total {
            display: flex;
        }

        a {
            text-decoration: none;
        }
        .btn-main {
            border: 1px solid #ffaf38;
            padding: 5px;
            color: #ffaf38;
        }

        .fill {
            background: #ffaf38;
            color: #ffffff;
        }

        .cart-action-button {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            margin-top: 3rem;
            margin-bottom: 10rem;
        }

        .cart-quantity-md,
        .cart-unit-price,
        .cart-product-total {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10rem;
            margin-left:20px;
        }
        .deleteIcon{
            display: flex;
            align-items: center;
            justify-content: center;
            cursor:pointer;
        }

        // .cart-quantity-md {
        //     text-align:center;
        // }

        .cart-item form {
            display: flex;
            transition: ease all 0.5s;
            flex-wrap: wrap;
            align-items:center;
            justify-content:space-around;
            margin-bottom: 10px;
            background: var(--white-color);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
            padding: 13px;
        }
        .cart-increment{
            display:flex;
            align-items:center;
            justify-content:center;
            width:50px;
            margin-top:15px;
            transform:translate(-12px, 5px);
            button{
                padding-left:5px;
            }
            .plus{
                padding-right:5px;
            }
        }
        .cart-unit-price,
        .deleteIcon,
        .cart-product-total {
            display: block;
        }

        .cart-productSystem {
            //margin-right: 5.25rem;
            display: flex;
            align-items: center;
        }
        .cart-quantity-controls {
            margin-top: 2.2rem;
            display:flex;
            align-items:center;
            justify-content:space-around;
            width:85px;
            .plus{
                transform:translateX(10px);
            }
            p{


                transform:translate(5px, 5px);
            }
            // > button {
            //     background: #ffffff;
            // }
            // input {
            //     border: 1px solid #590a5b;
            //     width: 3rem;
            // }
        }

        .cart-unit-price{
            margin-top: 2.7rem;
            margin-right: 2rem;
        }
        .deleteIcon{
            margin-top: 2.7rem;
            transform:translate(-10px, -10px);
        }
        .cart-product-total{
            margin-top: 2.7rem;
            transform:translate(-25px);
        }
        .cart-collection {
            flex-wrap: wrap;
        }

        .cart-total-holder {
            width: 72.125rem;
            margin: auto;
        }
    }
    @media only screen and (max-width: 750px) {
        .wrapper {
            display: none;
        }
        .cart-total-holder {
            display: none;
        }
        .deleteIcon{
            margin-top: 2rem;
            transform:translate(-10px, -10px);
        }
        .cart-productSystem {
            display: none;
        }
        .cart-increment{
            margin-top:0px;
            transform:translate(-20px, 0px);
            button{
                padding-left:3px;
            }
            .plus{
                padding-right:0px;
            }
        }

        .cartMobileWrapper {
            display: flex;
            box-shadow: 0 4px 5px rgba(79, 0, 81, 0.1);
            justify-content:space-around;
            text-align:center;
            flex-direction:column;
            padding:5px;
            width: 100%;
            margin-right: 5px;
            margin-left: 5px;
            padding-bottom:15px;
            margin-bottom: 3rem;
            .mobileImage, .cartSelect,.amount, .sectionTwo {
                img{
                    width:100px;

                }
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            .amount{
                .normalPrice{
                    margin-right:25px;
                    text-align:center;
                }
            }
            .deletebutton{
                margin-right:15px;
                font-size:25px;
            }
        }

        .cart-quantity-controls {
            display: flex;
        }

        .cartMobile {
            width: 70%;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }

        .detail {
            display: flex;
            justify-content: space-between;
        }

        .sectionTwo {
            // margin-left: 1rem;
            margin-right: 0.5rem;
        }

        .cartmobileDetail {
            margin-left: 2rem;
        }

        .cartSelect {
            margin-right: 0.5rem;
           
            .cartSelectInfo{
                display:flex;
                justify-content:space-around;
                align-items:center;
                text-align:center;
                p{
                    font-size:15px;
                    text-align:center;
                    color: #590a5b;
                     transform:translate(0px, 7px);
                    
                }
               
            }
        }

        .downPart {
            display: flex;
            justify-content: space-between;
        }
        input {
            height: 30px;
            width: 20px;
            // #display: flex;
            // justify-content: center;
            // border: none;
            // outline: none;
            // text-align: center;
            // font-weight: bold;
            // font-size: 1.1rem;
            // margin-left: 0.4rem;
            // margin-right: 0.4rem;
        }
        button {
            width: 30px;
            text-align:center;
            color: #590a5b;
            background: #ffff;
            font-weight: bold;
        }

        .desktopHeading {
            display: none;
        }

        .mobileHeading {
            text-align: center;
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 3rem;
            display: block;
        }
        .cart-header {
            display: none;
        }

        .cart-quantity-md {
            display: none;
        }

        .cart-unit-price,
        .cart-product-total {
            display: none;
        }

        .Button {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .checkout {
            width: 21.438rem;
            height: 3.25rem;
            background: #ffaf38;
            border-radius: 50px;
            color: #ffffff;
            font-size: 1.3rem;
            margin-bottom: 2.125rem;
        }

        .continueShopping {
            width: 21.438rem;
            height: 3.25rem;
            border: 1px solid #ffaf38;
            border-radius: 50px;
            background: #ffffff;
            color: #ffaf38;
            font-size: 1.3rem;
            margin-bottom: 2.125rem;
        }

        .Total {
            margin-bottom: 3rem;
            display: flex;
            justify-content: space-between;
            font-weight:bold;
            font-size:large;
        }

        .Total > h4 {
            color: #716b72;
            font-weight:bold;

        }

        .productname {
            color: #590a5b;
            font-weight: bold;
            font-size: large;
        }

        .sectionTwo > img {
            width: 1.2rem;
        }

        .reducedPrice {
            font-family: 'Made Tommy', sans-serif;
            font-style: normal;
            font-weight: 250;
            font-size: 14px;
            line-height: 17px;
            text-decoration-line: line-through;
            color: #590a5b;
        }

        .normalPrice {
            font-weight: bold;
            font-size: 1.6rem;
            line-height: 17px;
            display: flex;
            align-items: center;
            color: #590a5b;
        }

        .cat {
            color: #bfb1c0;
            font-size: 1.2rem;
        }
        @media(max-width:500px){
            .cart-increment{
                transform:translate(-7px, 5px);
            }
        }
    
`
;

