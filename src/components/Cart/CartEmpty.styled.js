import styled from 'styled-components';

export const CartEmptyStyled = styled.div`

.emptycartWrapper{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:10rem;
    margin-bottom:10rem;
    flex-wrap:wrap;
}


.circle{
    width:13rem;
    height:13rem;
    background:purple;
    border-radius:50%;
       justify-content:center;
       display:flex;
       align-items:center;
       margin-bottom:2rem;
       margin-top:5rem;
}


.shopper{

    width:7rem;
    display:flex;
    align-items:center;
    justify-content:center;
}

.emptycartWrapper > h3{
    font-size:2rem;
    font-weight:bold;
}


.emptycartWrapper > h5{
    font-weight:500;
    font-size:1.3rem;
}

button{
    margin-top:3rem;
    background:orange;
    color:#fff;
    padding:0.7rem;
}

.cartEmpty{
    background:#ffffff;
}

@media only screen and (max-width:480px){
    button{
        margin-top:3rem;
        background:#fff;
        color:orange;
        padding:0.7rem;
        border: 1px solid orange;
        border-radius:3rem;
        padding-right:1.5rem;
        padding-left:1.5rem;

    }
    
}

`;