/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const BaseButton = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 0;
    font-size: 18px;
    text-align: start;

    & img {
        position: absolute;
        left: 30px;
        width: 30px;
        height: 30px;
    }

    & span {
        margin-left: 60px;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: transparent;
    color: #ffffff;
`;

export const CurrentButton = styled(BaseButton)`
    background-color: #ffffff;
    color: #590a5b;
`;

export const SecondaryButton = styled(BaseButton)`
    background-color: transparent;
    color: #ffffff;
    margin-top: 5px;

    & img {
        position: absolute;
        left: 30px;
        width: 25px;
        height: 25px;
    }
`;

export const TertiaryButton = styled(BaseButton)`
    background-color: #ffaf38;
    color: #ffffff;
    padding-left: 30px;
`;

export const LogOutButton = styled.button`
    position: fixed;
    bottom: 0;
    left: 10px;
    background-color: transparent;
    font-size: 16px;
`;

export const ExitButton = styled.button`
    margin-top: 90px;
    margin-bottom: 10px;
    background-color: transparent;
`;
