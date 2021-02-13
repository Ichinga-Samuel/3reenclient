import styled from 'styled-components';

export const SigninStyled = styled.div`
    background: #590A5B;
     height: 180vh;
    width: 100%;
    color: #fff;
    display:  flex;
    flex-direction: column;
    align-items: center;

    

    .intro{
        position: absolute;
        text-align: center;
        margin-top: 80px;

    }

    .intro p{
        font: MADE TOMMY;
        weight: 500px;
        display: flex;
        flex-direction: column;
        style: normal;
        font-size: 2rem;
        line-height: 25px;    
    }

    @media(max-width: 500px){
        height: 150vh;
        
        .intro{
            margin-top: 60px;
            
        }
    }
    
    // //for medium screen

    // @media (max-width: 1100px) {
    //     min-height: 220vh;   
    // }

    // @media (max-width: 768px) {
    //     min-height: 110vh;

    //     .intro{
    //         margin-top: 50px;
    //     }
    //     .intro p{
    //         font-size: 2rem;
    //     }
    // }

    
    // //for mobile screen
    // @media (max-width: 403px) {
    //     .intro p{
    //         font-size: 1.5rem;
    //     }
    // }
`

export const LoginForm = styled.form`
          width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 200px;
          background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: rgba(0, 0, 0, 0.57);

        .logo-div{
            width: 103px;
            padding-top: 12px;
            height: 103px;
            border: 5px solid #590A5B;
            border-radius: 50px; 
            margin-top: 100px;
            text-align: center;
        }


        .header-div{
            width: 50%;
            min-width: 300px;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #590A5B;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        img{
            width: 57px;
        }

        .header-div h4{
            height: 23px;
            font-family: Montserrat;
            font-size: 3rem;
            font-style: normal;
            font-weight: 600;
            line-height: 90.9%;
            text-align: left;

        }
        .header-div p{
            margin-top: 30px;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(0, 0, 0, 0.57);

        }

        .input-group{
            width: 50%;
            min-width: 300px;
            height: 100px;
            display: flex;
            flex-direction: column;
           
        }

        .input-group input{
            font-size: 18px;
            height: 50px;
            border: 1px solid rgba(0, 0, 0, 0.38);
            box-sizing: border-box;
            

        }

        .input-group label{
            font-family: MADE TOMMY;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 19px;
          
        }

        button{
            height: 50px;
            width: 40%;
            background: #FFAF38;
            color: #fff;
            font-size: 18px;
            margin-bottom: 10px;
            margin-top: 20px;
            min-width: 250px;

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
            margin-bottom: 100px;
            font-size: 15px;
            font-weight: 600;
            color: #590A5B;
        }

        @media(max-width: 500px){
            width: 90%;
            height: 120vh;
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
            }
    
            img{
                width: 50px;
            }
            
            .header-div h4{
                display: none;
            }

            .header-div p{
                margin-top: 0px;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                text-transform: uppercase;
                display: flex;
                flex-direction: column;
                
    
            }
    
            .input-group{
                width: 95%;
                min-width: 100px;
                height: 100px;
             
               
            }

            
        .input-group input{
            font-size: 14px;
            height: 40px;
        
        }

        .input-group label{
            font-size: 13px;
          
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

        
        // //for medium screen

        // @media (max-width: 1100px) {
            
        //     .header-div h4{
        //       font-size: 2.5rem
        //     }

        //     .header-div{
        //         width: 60%;
        //     }

        //     .input-group {
        //         width: 60%;
        //     }

        //         .header-div p{
        //             font-size: 2rem
        //         }
        //     .input-group label{
        //         font-size: 1.5rem
        //     }
        //     p{
        //         font-size: 1rem;
        //     }
        //     a{
        //         font-size: 1rem;
        //     }
        // }

        
        // @media (max-width: 768px) {

        //     top: 160px;

        //     .logo-div{
        //         padding: 10px;
        //         border: 3px solid #590A5B;
        //         border-radius: 30px; 
        //         margin-top: 50px;
        //     }

        //     img{
        //         width: 30px;
        //     }


        
        //     .header-div{
        //         width: 80%;
        //         height: 40px;
        //         margin-top: 15px;
        //         margin-bottom: 10px;
        //         align-items: center;
        //     }
        //     .input-group{
        //         width:80%;
        //         height: 50px;
        //     }
        //     .input-group input{
        //         height: 25px;
        //         font-size: 1.3rem;
        //     }

        //     button{
        //         height: 25px;
        //         font-size: 10px;
        //         border-radius: 20px;
        //     }
            
        //     .header-div h4{
        //       font-size: 2rem
        //     }


        //         .header-div p{
        //             font-size: 1.5rem;
        //             margin-top: 0;            
        //         }

        //         .header-div h4{
        //             display: none;
        //         }
        //     .input-group label{
        //         font-size: 1rem
        //     }
        //     p{
        //         font-size: 1rem;
        //         margin-bottom: 20px;
        //     }
        //     a{
        //         font-size: 1rem;
        //         margin-bottom: 70px;
        //     }
        // }

        
        // //for mobile screen

        // @media (max-width: 403px) {

        //     width: 90%;

        //     .header-div{
        //         margin-bottom: 50px;
        //     }
            
        //     .input-group{
        //         width: 90%;
        //     }

        //         .header-div p{
        //             font-size: 1.5rem;
        //             text-align: center;
        //             width: 70%;
        //         }
        //     .input-group label{
        //         font-size: 1rem
        //     }
        // }


    

    
` 