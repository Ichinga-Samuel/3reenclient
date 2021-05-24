import styled from 'styled-components';

export const CartContainerStyled = styled.div`
    .product-cart {
        margin-top: 4.5rem;
        padding: 1rem;
    }

    .cart-collection {
        margin-top: 0rem;
    }


    .cart-productSystem {
        display: grid;
        grid-template-columns: 80px auto;
        grid-gap: 0rem 1.3rem;
        padding: 1rem 1rem;

    }

    .cart-image {
        width:50px;
        height: 50px;
        border-radius: 7px;
        background-size: cover;
    }

.cart-collection{
    margin-top:1rem;
    width:72.125rem;
    margin:auto;
}


.cart-header{
    display:flex;
    padding:1rem 0rem;
}


.cart-header p{
    font-weight:bold;
    color:#333;
    width:17.1%;
    margin-left:-.3rem;

}

.desktopHeading{
    text-align:center;
    margin-bottom:3rem;
}

.mobileHeading{
    display:none;
}


.actionDelete {
   margin-top:2.5rem;
   display:flex;
   align-items:center;

}

.actionDelete  > p{
    display:flex;
    align-items:center;
    margin-top:.5rem;
}

.deletebutton{
    width:10px;
    display:flex;
    align-items:center;
    margin-right:.5rem;
    margin-bottom:.6rem;
}

.cart-header p:first-child{
    width:auto;
    flex:1;
    text-align:left;
    margin-left:2.5rem

}

    }


    .cart-controls-sm {
        display: flex;
        justify-content: space-between;
        padding-top: .5rem 0.8rem;

    }

    .cart-quantity-controls-sm {
        display: flex;
    }

    .cart-quantity-controls button,
    .cart-quantity-controls input {
        height: 20px;
        width: 20px;
        border: none;
        outline: none;
        text-align:center;
        font-weight:bold;
        font-size:1.1rem;
    }

.cartMobile{
    display:none;
}




.cart-product-name{
font-weight:400;
color:#590A5B;
font-size:1.5rem;
margin-bottom:.3rem;
}

.cart-price-sm{
    color:#590a5b;
    font-weight:bold;
    margin-bottom:.3rem;
}



.checkout{
    width:100%;
    height:3.25rem;
    border: 1px solid #FFAF38;
    background:#ffffff;
    color:#FFAF38;
    font-size:1rem;
    margin-bottom:2.125rem;
}

@media only screen and (min-width:650px){

    .cart-total{
        justify-content:flex-end;
    }

   .cart-action-button{
        justify-content:flex-end;
        flex-direction:column;
    }

    .cart-total > p:first-child{
        margin-right:1rem;
    }

    .cart-action-button a{
        padding-left:1rem;
        padding-right:1rem;
    }
    .cart-action-button a:first-child{
        margin-right:1rem;

    }

.cart-collection{
    padding-top:2rem
}

.actionPrice{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    margin-top:3rem;
}

.cart-total{
    display:flex;
}

a{
    text-decoration:none;
}
.btn-main{
    border:1px solid #FFAF38;
    padding:5px;
    color:#FFAF38;

}

.fill{
    background:#FFAF38;
    color:#ffffff;
}

.cart-action-button{
    display:flex;
    align-items:flex-end;
    flex-direction:row;
    margin-top:3rem;
    margin-bottom:10rem;
}






    .cart-quantity-md,
    .cart-unit-price,
    .cart-product-total {
        display: flex;
        align-items:center;
        justify-content:center;
        width:10rem;
    }


    .cart-quantity-md{
        margin-right:3rem;
    }

    .cart-item form {
     border:1px solid #590A5B;
     display:flex;
     flex-wrap:wrap;
    }


    .cart-quantity-md,
    .cart-unit-price,
    .cart-product-total {
        display: block;
    }


.cart-productSystem{
    margin-right:16.25rem;
}

    .cart-productSystem{
        display:flex;
        flex:0.8;
        align-items:center;

    }

    .cart-quantity-controls{
       margin-top:2.2rem
    }

    .cart-unit-price{
        margin-top:2.7rem
     }

     .cart-product-total{
        margin-top:2.7rem
     }

     .cart-quantity-controls > button{
         background:#ffffff;
     }

     .cart-quantity-controls input{
         border:1px solid #590A5B;
         width:3rem;
     }


.cart-collection{
flex-wrap:wrap;
}




.cart-total-holder{
    width:72.125rem;
    margin:auto;
}

}
    @media only screen and (max-width: 750px){

.wrapper{
    display:none;
}
        .cart-total-holder{
            display:none;
        }
    .cart-productSystem{
        display:none;
    }

    .cartMobileWrapper{
        display:flex;
        box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        margin-bottom:3rem;
    }

    .cart-quantity-controls{
        display:flex;

    }

    .cartMobile{
        width:90%;
        margin:auto;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
    }

    .detail{
        display:flex;
        justify-content:space-between;

    }

    .sectionTwo{
    margin-left:1rem;
    margin-right:0.5rem;
    }

    .cartmobileDetail{
        margin-left:2rem;

    }

    .cartSelect{
        margin-right:0.5rem;
    }

    .downPart{
        display:flex;
        justify-content:space-between;
    }

    input{
        height: 30px;
        width: 30px;
        border: none;
        outline: none;
        text-align:center;
        font-weight:bold;
        font-size:1.1rem;
        margin-left:.4rem;
        margin-right:.4rem;
    }

    button{
        height: 24px;
        width: 21px;
        border-radius: 50%;
        border: 1px solid #590A5B;
        font-size:1.6rem;
        color: #590A5B;
        background:#ffff;
        font-weight:bold;

    }

    .desktopHeading{
        display:none;
    }

    .mobileHeading{
        text-align:center;
        font-weight:bold;
        font-size:2rem;
        margin-bottom:3rem;
        display:block;
    }
    .cart-header{
        display:none;
    }

    .cart-quantity-md{
        display:none;
    }

    .cart-unit-price , .cart-product-total{
        display:none;
    }

    .Button{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
    }


    .checkout{
        width:21.438rem;
        height:3.25rem;
        background:#FFAF38;
        border-radius: 50px;
        color:#ffffff;
        font-size:1.3rem;
        margin-bottom:2.125rem;
    }

    .continueShopping{
        width:21.438rem;
        height:3.25rem;
        border: 1px solid #FFAF38;
        border-radius: 50px;
        background:#ffffff;
        color:#FFAF38;
        font-size:1.3rem;
        margin-bottom:2.125rem;
    }


    .Total{
        margin-bottom:3rem;
        display:flex;
        justify-content:space-between;
    }

    .Total > h4{
        color:#716B72;
    }

    .productname{
        color:#590A5B;
    }

    .sectionTwo > img{
        width:1.2rem;
    }

    .reducedPrice{
        font-family: MADE TOMMY;
        font-style: normal;
        font-weight: 250;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: line-through;

        color: #590A5B;
    }

    .normalPrice{
font-weight: bold;
font-size: 1.6rem;
line-height: 17px;
display: flex;
align-items: center;
color: #590A5B;
    }


    .cat{
        color: #BFB1C0;
        font-size:1.2rem;
    }
}



















`;
