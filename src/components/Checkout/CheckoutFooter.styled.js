import styled from "styled-components";

export const CheckoutFooterStyled = styled.div` 

li{
    list-style:none;
}
a{
    font-size:1.5rem;
    text-decoration:none;
    color:#000000;
}

.heading{
    margin-bottom:1.5rem;
}
.footer{
    background:#fffffff;
}

.footerWrapper{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}

.icon{
    width:3rem
}.iconPayment{
    width:15rem;
}

.socialMedia{
    display:flex;
    align-items:center;
}
.footerLinks > li{
    margin-bottom:1rem;
}

.footerLinks > li > a:hover{
    color:#ffaf38;
}

.footerMobile{
    display:none;
}


@media only screen and (max-width: 580px){
.footer{
    display:none;
}


.footerMobile{
    display:flex;
    align-items:center;
    flex-direction:column;
}

.icon{
    width:4rem;
 
}

.footerMobileSocial{
    display:flex;
    margin-top:2rem;
    margin-bottom:4.791rem;
   
}


.footerMobileSocial > li {
    display:flex;
    align-items:center;
    margin-right:1.791rem;
}



.footerMobilePayment > img{
    margin:1rem;
}




}

`;