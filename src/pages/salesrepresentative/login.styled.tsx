import styled from 'styled-components';

export const LoginStyled = styled.div`
    .login {
    }

    .login h1 {
        font-size: 3.2rem;
        line-height: 1.2;

        text-align: center;

        font-size: 3rem;

        font-weight: 500;
    }

    .card {
        border-radius: none;
        border: none;
    }
    label {
        text-transform: uppercase;
        font-size: 15px;
        margin: 0;
    }

    input[type='email'],
    input[type='password'],
    input[type='text'] {
        border-radius: none;
        padding: 10px;
        border: 0.5px solid black;
        display: block;
        width: 100%;
        outline: none;
        font-size: 14px;
    }

    .forget-password {
        text-align: center;
        color: #590a5b;
        font-size: 14px;
        margin-bottom: 20px;
        text-transform: lowercase;
    }

    .login-button {
        display: block;
        background-color: #590a5b;
        color: #fff;
        width: 100%;
        padding: 10px;
        font-size: 18px;
        border-radius: none;
        outline: none;
        margin: auto;
    }

    .login-card {
        background-color: #fff;
        margin: auto;
    }

    .login-card-body {
        padding: 20px;
    }
`;
