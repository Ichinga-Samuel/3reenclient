import styled from 'styled-components';

export const SigninStyled = styled.div`
    background: #590A5B;
     min-height: 230vh;
    width: 100%;
    display:  flex;
    flex-direction: column;
    align-items: center;

    

    .intro{
        position: absolute;
        text-align: center;
        margin-top: 190px;

    }

    .intro p{
        font: MADE TOMMY;
        weight: 500px;
        display: flex;
        flex-direction: column;
        style: normal;
        font-size: 3rem;
        line-height: 31px;  
        color: #ffffff;  
    }

    @media (max-width: 1100px) {
        min-height: 220vh;   
    }

    @media (max-width: 768px) {
        min-height: 110vh;

        .intro{
            margin-top: 50px;
        }
        .intro p{
            font-size: 2rem;
        }
    }

    @media (max-width: 403px) {
        .intro p{
            font-size: 1.5rem;
        }
    }
`

export const LoginForm = styled.form`
          width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 350px;
        position: absolute;
          background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .logo-div{
            padding: 20px;
            border: 5px solid #590A5B;
            border-radius: 60px; 
            margin-top: 100px;
        }


        .header-div{
            width: 50%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #590A5B;
            margin-top: 100px;
            margin-bottom: 100px
        }

        .header-div h4{
            height: 23px;
            font-family: Montserrat;
            font-size: 3rem;
            font-style: normal;
            font-weight: 600;
            line-height: 23px;
            letter-spacing: 0em;
            text-align: left;

        }
        .header-div p{
            height: 16px;
            margin-top: 30px;
            border-radius: nullpx;
            font-family: Montserrat;
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: left;
            color: #000000 87%;

        }

        .input-group{
            width: 50%;
            height: 100px;
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
           
        }

        .input-group input{
            font-size: 2rem;
            height: 50px;
            left: 478px;
            top: 1073px;
            border-radius: 0px;
            border: 1px solid rgba(0, 0, 0, 0.38);
            box-sizing: border-box;
            

        }

        .input-group label{
            height: 19px;
            border-radius: nullpx;
            font-family: MADE TOMMY;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 19px;
            letter-spacing: 0em;
          
        }

        button{
            height: 50px;
            width: 50%;
            background: #FFAF38;
            color: #fff;
            font-size: 15px;
            margin-bottom: 10px;
            margin-top: 20px;

        }
       p{
            font-size: 1.5rem;
            color: #590A5B;
            font-weight: 100;
            margin-bottom: 50px;
        }

        p a{
            color: #FFAF38;
            margin-left: 10px;
            font-weight: 400;

        }
        a{
            margin-bottom: 100px;
            font-size: 1.5rem;
            color: #590A5B;
            font-weight: 300;
        }

  

        @media (max-width: 1100px) {
            
            .header-div h4{
              font-size: 2.5rem
            }

            .header-div{
                width: 60%;
            }

            .input-group {
                width: 60%;
            }

                .header-div p{
                    font-size: 2rem
                }
            .input-group label{
                font-size: 1.5rem
            }
            p{
                font-size: 1rem;
            }
            a{
                font-size: 1rem;
            }
        }

        @media (max-width: 768px) {

            top: 160px;

            .logo-div{
                padding: 10px;
                border: 3px solid #590A5B;
                border-radius: 30px; 
                margin-top: 50px;
            }

            img{
                width: 30px;
            }


        
            .header-div{
                width: 80%;
                height: 40px;
                margin-top: 15px;
                margin-bottom: 10px;
                align-items: center;
            }
            .input-group{
                width:80%;
                height: 50px;
            }
            .input-group input{
                height: 25px;
                font-size: 1.3rem;
            }

            button{
                height: 25px;
                font-size: 10px;
                border-radius: 20px;
            }
            
            .header-div h4{
              font-size: 2rem
            }


                .header-div p{
                    font-size: 1.5rem;
                    margin-top: 0;            
                }

                .header-div h4{
                    display: none;
                }
            .input-group label{
                font-size: 1rem
            }
            p{
                font-size: 1rem;
                margin-bottom: 20px;
            }
            a{
                font-size: 1rem;
                margin-bottom: 70px;
            }
        }

        @media (max-width: 403px) {

            width: 90%;

            .header-div{
                margin-bottom: 50px;
            }
            
            .input-group{
                width: 90%;
            }

                .header-div p{
                    font-size: 1.5rem;
                    text-align: center;
                    width: 70%;
                }
            .input-group label{
                font-size: 1rem
            }
        }


    

    
` 