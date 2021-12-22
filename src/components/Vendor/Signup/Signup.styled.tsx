import styled from 'styled-components';

export const SignupStyled = styled.div`
    background: #590a5b;
    width: 100%;
    min-width: 650px;
    height: auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .intro {
        position: relative;
        text-align: center;
        margin-top: 10px;
        p {
            font: MADE TOMMY;
            weight: 500px;
            display: flex;
            flex-direction: column;
            style: normal;
            font-size: 2rem;
            line-height: 25px;
        }
    }

    @media (max-width: 500px) {
        height: 200vh;
        min-width: 380px;
        .intro {
            margin-top: 60px;
            p{
                font-size:1.5rem;
            }
        }
    }

    .form-details {
        padding: 0 4rem;
        .form-group {
            margin-bottom: 2rem;
            label {
                font-size: 1.2rem;
                text-transform: uppercase;
            }
        }
        .ant-radio-group {
            display: flex;
        }
        textarea.ant-input {
            resize: none;
            height: 150px;
        }
        .new-account-info {
            color: #590a5b;
            font-size: 1rem;
            font-weight: 400;
            margin: 30px 0 40px 0;
            transition: ease all 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
                font-size: 1rem;
                font-weight: bolder;
                color: #ffaf38;
                padding-left: 5px;
            }
        }
    }
`;

export const SignupForm = styled.form`
    width: 60%;
    max-width: 1000px;
    background: #fff;
    margin: 3rem 0;
    padding: 2rem;
    transition: ease all 0.5s;
    color: rgba(0, 0, 0, 0.57);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .logo-div {
        width: 103px;
        padding: 10px;
        height: 103px;
        border: 5px solid #590a5b;
        border-radius: 50px;
        margin-top: 20px;
        text-align: center;
    }
    img {
        width: 57px;
    }
    .new-account-info, a{
            font-size:20px !important;
    }
    .header-div p {
        margin-top: 40px;
        margin-bottom: 40px;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.57);
        font-style: normal;
        text-align:center;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        height: 40px;
        width: 100%;
        background: #ffaf38;
        border-color: #ffaf38;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin-top: 20px;
        &:hover {
            background: #f59507;
            border-color: #f59507;
        }
        &:focus {
            background: #f59507;
            border-color: #f59507;
        }
        &:active {
            background: #f59507;
            border-color: #f59507;
        }
    }

    @media (max-width: 685px) {
        width: 90%;
        height: 160vh;
        margin-top: 20px;

        .logo-div {
            width: 90px;
            margin-top: 20px;
            height: 90px;
            border: 5px solid #590a5b;
            border-radius: 45px;
        }
        img {
            width: 50px;
        }
        .header-div p {
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
        }
        .new-account-info, a{
            font-size:15px !important;
    }
        button {
            height: 40px;
            width: 100%;
            border-radius: 0px;
            font-size: 14px;
            font-weight: 600;
        }

        p {
            font-size: 20px;
            color: #590a5b;
            font-weight: 400;
            margin-bottom: 0;
            margin-top: 30px;
        }

        p a {
            color: #ffaf38;
            margin-left: 0px;
            font-weight: 500;
        }
    }
    @media(max-width:380px){
        height: 180vh;
        .new-account-info, a{
            font-size:13px !important;
    }
    }
`;
