import styled from 'styled-components';

export const SignupStyled = styled.div`
    background: #590a5b;
    width: 100%;
    min-width: 650px;
    height: 230vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .intro {
        position: absolute;
        text-align: center;
        margin-top: 80px;
    }

    .intro p {
        font: MADE TOMMY;
        weight: 500px;
        display: flex;
        flex-direction: column;
        style: normal;
        font-size: 2rem;
        line-height: 25px;
    }

    @media (max-width: 500px) {
        height: 200vh;
        min-width: 380px;

        .intro {
            margin-top: 60px;
        }
    }
`;

export const SignupForm = styled.form`


width: 70%;
max-width: 1000px;
height: ;
background: #fff;
margin-top: 200px;
color: rgba(0, 0, 0, 0.57);
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

.logo-div{
    width: 103px;
    padding: 10px;
    height: 103px;
    border: 5px solid #590A5B;
    border-radius: 50px; 
    margin-top: 100px;
    text-align: center;
}
img{
    width: 57px;
}
.header-div p{
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: Montserrat;
    text-transform: uppercase;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.57);
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.parent-input-group{
    display: flex;
    width: 80%;
    margin-bottom: 20px;
    justify-content: space-between;
}



.input-group{
    width: 45%;
    display: flex;
    flex-direction: column;
}


.input-group input{
    
    font-size: 12px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    box-sizing: border-box;
    color: #590A5B;
    padding: 10px;
}

.input-group label{
    font-family: MADE TOMMY;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
  
}
.parent-input-radio{
    display: flex;
}

.input-radio{
    display: flex; 
    margin-right: 15px;
}

.input-radio input{
    margin-right: 5px;
    height: 20px;
}
.input-radio label{
    font-size: 15px;
    font-weight: 400;
}

.g-parent-input-radio label{
    font-size: 15px;
    font-weight: 500;
}
.g-parent-input-radio{
    width: 80%; 
}
.input-description{
    font-size: 18px;
    font-weight: 500;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 30px;

}

.input-description textarea{
    border: 1px solid rgba(0, 0, 0, 0.38);
    height: 160px;
    padding: 10px;
}

button{
    height: 50px;
    width: 35%;
    background: #FFAF38;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;

}

p{
    font-size: 15x;
    font-weight: 700;
    margin-bottom: 40px;
    margin-top: 50px;
}

p a{
    font-size: 15x;
    font-weight: 700;
    color: #FFAF38;
    margin-left: 10px;
    font-weight: 400;

}

@media(max-width: 500px){
width: 90%;
height: 160vh;
margin-top: 130px;

.logo-div{
    width: 90px;
    margin-top: 20px;
    height: 90px;
    border: 5px solid #590A5B;
    border-radius: 45px; 

}
img{
    width: 50px;
}
.header-div p{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 15px;
    font-weight: 500;

}

.parent-input-group{
    flex-direction: column;
    width: 95%;
    margin-bottom: 0;
}



.input-group{
    width: 100%;
    margin-bottom: 10px;
}

.input-group label{
    font-size: 13px;
    font-weight: 500;
}
.input-group input{
    height: 40px;
}

.g-parent-input-radio label{
    font-size: 14px;
    font-weight: 500;
}
.g-parent-input-radio{
    width: 95%; 
}

.input-radio input{
    margin-top: 3px;
}
.input-radio label{
    font-size: 16px;
}
.input-description{
    width: 95%;
    margin-bottom: 0px;

}

.input-description textarea{
    height: 83px;
}
.input-description label{
    line-height: 5px;
    font-size: 14px;
}

button{
    height: 52px;
    width: 70%;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;

}

p{
    font-size: 14px;
    color: #590A5B;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 30px;
}

p a{
    color: #FFAF38;
    margin-left: 10px;
    font-weight: 500;

}
`;
