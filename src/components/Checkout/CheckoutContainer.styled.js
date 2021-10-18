import styled from 'styled-components';

export const CheckoutContainerStyled = styled.div`
    .container > h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5.3rem;
    }

    .checkoutWrapper {
        display: flex;
        width: 100%;
        margin: auto;
        justify-content: center;
        margin-top: 6.688rem;
        flex-wrap:wrap;
    }

    .checkoutForm {
        width: 42.625rem;
    }

    .checkoutProduct {
        width: 26.375rem;
        margin-left: 3.2rem;
        height: 29.5rem;
        border: 1px solid #590a5b;
        margin-top:19px;
    }



   

    .textarea {
        width: 100%;
        height: 11.438rem;
    }

    .formCheckbox {
        display: flex;
        justify-content:space-around
        align-items:center;
        margin-top:-20px;
    }


    .input-name{
        width:100%;
        position:relative;
        margin:20px auto;
    }

  span{
        margin-left:35px;
    }

.lock{
    padding:8px;
    position:absolute;
    font-size:1.2rem;
    color:gray;
    border-right:1px solid #590a5b;
}

input , textarea, select{
    border: 1px solid #590a5b;
    outline:none;
}

.name{
    width:49%;
    padding:8px 0 8px 40px;
   
}

.last{
    margin-left:0.8rem;
}

.text-name{
    width:100%;
    padding:8px 0 8px 40px;
}

select{
    width:100%;
    padding:8px;
}

input::placeholder{
    font-size:1.2rem;
    padding:0.5rem;
}

.textarea::placeholder{
    font-size:1.2rem;
    padding:1rem;
}


.state, .city{
    font-size:1.2rem;
    color:gray;
}


.state, .city{
    display:inline-block;
    width:100%;
    height:35px;
    padding:0px 15px;
    cursor:pointer;
    color:#7b7b7b;
    border-radius:0;
    border:1px solid #590a5b;
    appearance:none;
    -webkit-appearance:none;
}

.state::-ms-expand{
    display:none;
}

.arrow{
    position:absolute;
    top:calc(50% -4px);
    right:15px;
    width:0;
    height:0;
    pointer-events:none;
    border-width:8px 5px 0 5px;
    border-style:solid;
    border-color:#590a5b transparent transparent 
}

.chack{
    margin-right:16px;
    position:relative;
}

.chack::before{
    content: "";
    display:inline-block;
    width:12px;
    height:12px;
    margin-right:8px;
    vertical-align:-2px;
    border:1px solid #590a5b;
    padding:2.5px;
    background:transparent;
    background-clip:content-box; 
}


.chack::after{
    border-right: 2px solid #590a5b;
    border-top:2px solid #590a5b;
    content: "";
    height:14px;
    left:1px;
    position:absolute;
    top:5px;
    transform:scaleX(-1) rotate(135deg);
    transform-origin:left top;
    width:7px;
    display:none;
}


.chack-button{
    border:0;
    clip: rect(0 0 0 0);
    height:1px;
    margin:1px;
    overflow:hidden;
    padding:0;
    position:absolute;
    width: 1px;

}

.chack-button:hover +.chack::before{
    border-color: #000;
}

.chack-button:checked +.chack::before{

    border-color: #000000;
}
  
.chack-button:checked +.chack::after{
    -moz-animination: check 0.8s ease 0s running;
-webkit-animination: check 0.8s ease 0s running;
animation:check 0.8s ease 0s running;
display:block;
width:7px;
height:20px;
border-color:#000;
}

@-webkit-keyframes check{
    0%{height: 0; width: 0;}
    25%{height: 0; width: 7px;}
    50%{height: 20px; width: 7px;}
}

.chack{
    font-size: 1.2rem;
    color:gray;
}


    .submitButton {
        display: flex;
        margin-bottom: 6.563rem;
        margin-top:4rem;
    }

    .continueShipping {
        width: 14rem;
        height: 3.188rem;
        border: 1px solid #ffaf38;
        color: #ffaf38;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2.188rem;
        background: #ffffff;
        font-size:1.2rem;
    }

    .continuePayment {
        width: 14rem;
        height: 3.188rem;
        border: 1px solid #ffaf38;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffaf38;
        font-size:1.2rem;
    }

    .continueShipping:hover {
        color: #ffffff;
        background: #ffaf38;
    }
    .continuePayment:hover {
        background: #ffffff;
        color: #ffaf38;
    }

    .Products {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.563rem;
    }

    .product {
        display: flex;
        justify-content: space-between;
        margin-right: 1.75rem;
        margin-left: 1.75rem;
        align-items: center;
        margin-top: 1.563rem;
    }

    .productImage {
        width: 5rem;
    }

    .productDetail {
        display: flex;
        align-items: center;
    }

    .productDetail > h4 {
        font-size: 1.1rem;
        margin-left: 0.875rem;
        font-weight: 500;
        style: normal;
    }

    .price {
        font-size: 1.1rem;
        margin-left: 0.875rem;
        font-weight: 500;
        style: normal;
    }

 
    .shipping {
        display: grid;
        border-top: 1px solid #590A5B;
    }

    .shippingFee {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 1.75rem;
        margin-right: 0.438rem;
    }

    .shippingFee > h4,
    p {
        font-size: 1.1rem;
    }



   

    @media only screen and (max-width: 950px){

        .checkoutWrapper{
            display:flex;
            flex-direction:column-reverse
        
        }
        .checkoutProduct{
            width:100%;
     margin:auto;
        }

        .name{
            width:100%;
            margin-bottom:1rem;
        }

        .last{
            margin-left:-0.1rem;
            margin-top:0.7rem;
        }

        .checkoutForm{
            width:100%;
        }

        .arrow{
            display:none;
        }
    }


    @media only screen and (max-width: 580px){

        .submitButton{
            display:flex;
            flex-direction:column;
        }
        .continueShipping{
            width:90%;
            margin:auto;
            border-radius:4.5rem;
        }

.continuePayment{
    width:90%;
    margin:auto;
    border-radius:4.5rem;
}

.submitButton > input{
    margin-top:1.5rem;
}





    }

`;
