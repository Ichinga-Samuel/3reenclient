import styled from 'styled-components';

export const FormStyled = styled.div`
    form {
    }

    .form h1 {
        font-size: 36px;
        line-height: 1.2;

        text-align: center;

        font-weight: 600;
        margin: 20px 0 10px 0;
    }

    .form h2 {
        color: #590a5b;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
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

    .form-button {
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
    .password-reset-button {
        background-color: gold;
    }

    .form-card {
        background-color: #fff;
        margin: auto;
    }

    .form-card-body {
        padding: 20px;
    }

    a {
        color: #590a5b;
    }

    a:hover {
        text-decoration: none;
    }

    .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 70px 0 20px 0;
    }

    #reset {
        width: 83%;
        height: 77px;
        font-size: 64px;
        text-align: center;
        border: none;
        background-color: #e6e2e2;
    }

    .passowrd-reset {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
`;
