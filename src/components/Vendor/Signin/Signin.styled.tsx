import styled from 'styled-components';

export const SigninStyled = styled.div`
    background: #590a5b;
    height: auto;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: ease all 0.5s;

    .intro {
        position: relative;
        text-align: center;
        margin-top: 20px;
    }

    .intro p {
        font: MADE TOMMY;
        weight: 500px;
        display: flex;
        flex-direction: column;
        style: normal;
        font-size: 2rem;
        line-height: 25px;
        transition: ease all 0.5s;
    }

    @media (max-width: 500px) {
        height: 100vh;

        .intro {
            margin-top: 10px;
        }
    }
`;

export const LoginForm = styled.form`
        width: 60%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: rgba(0, 0, 0, 0.57);
        transition: ease all 0.5s;

        .logo-div{
            width: 103px;
            padding-top: 12px;
            height: 103px;
            border: 5px solid #590A5B;
            border-radius: 50px; 
            margin-top: 2rem;
            text-align: center;
            transition: ease all 0.5s;
        }

        .header-div{
            width: 50%;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #590A5B;
            margin-top: 50px;
            transition: ease all 0.5s;
            h4 {
                font-family: 'Montserrat', sans-serif;
                font-size: 3rem;
                font-style: normal;
                font-weight: 600;
            }
            p {
                margin-top: 3px;
                font-family: 'Montserrat', sans-serif;
                font-size: 1.2rem;
                font-style: normal;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.57);
            }
        }

        img{
            width: 57px;
        }

        .input-group{
            width: 50%;
            min-width: 300px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            input {
                height: 40px;
                padding: 5px 15px;
                border: 1px solid rgba(0, 0, 0, 0.38);
                box-sizing: border-box; 
            }
            label {
                font-family: MADE TOMMY;
                font-size: 1.1rem;
                font-style: normal;
                font-weight: 500;
                display: block;
            }
        }

        button{
            height: 50px;
            width: 40%;
            background: #FFAF38;
            border-color: transparent;
            color: #fff;
            font-size: 18px;
            margin-bottom: 10px;
            margin-top: 20px;
            min-width: 250px;
            &:hover {
                background: #FFAF38;
                border-color: var(--white-color);
            }
            &:focus {
                background: #FFAF38;
                border-color: var(--white-color);
            }
            &:active {
                background: #FFAF38;
                border-color: var(--white-color);
            }
        }
       p{
            font-size: 15px;
            color: #590A5B;
            font-weight: 400;
            margin-bottom: 50px;
        }

        p a{
            color: #FFAF38;
            margin-left: 10px;
            font-weight: 400;
        }
        a{
            margin-bottom: 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            color: #590A5B;
            font-family: 'Montserrat', sans-serif;
        }

        @media(max-width: 500px){
            width: 90%;
            height: 140vh;
            margin-top: 130px;

            .logo-div{
                width: 90px;
                padding-bottom: 10px;
                height: 90px;
                border: 5px solid #590A5B;
                border-radius: 45px; 
            
            }
    
    
            .header-div{            
                height: 80px;
                margin-top: 20px;
                margin-bottom: 20px;
                min-width: 200px;
                p {
                    margin-top: 0px;
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    text-transform: uppercase;
                    display: flex;
                    flex-direction: column;
                }
            }
    
            img{
                width: 50px;
            }
            
            .header-div h4{
                display: none;
            }

            .input-group {
                width: 95%;
                min-width: 100px;
                height: 100px;  
                input{
                    font-size: 14px;
                    height: 40px; 
                }
                label{
                    font-size: 13px;
                }     
            }

        button{
            height: 52px;
            width: 80%;
            font-size: 15px;
            border-radius: 50px;
            margin-top: 80px;
            padding: 10px;         
        }
        p{
            font-size: 13px;
            font-weight: 400;
      
        }

        p a{
            font-size: 13px;
            font-weight: 500;

        }
        a{
            font-size: 14px;
            color: #686868;
        } 
`;
