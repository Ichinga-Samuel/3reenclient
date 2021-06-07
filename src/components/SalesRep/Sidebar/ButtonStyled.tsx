/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const BaseButton = styled.button`
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 18px;
    text-align: start;
    outline: none;

    & img {
        position: absolute;
        left: 30px;
        width: 30px;
        height: 30px;
    }

    & span {
        margin-left: 50px;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: #ffffff;
    color: #590a5b;
    outline: none;
`;

export const SecondaryButton = styled(BaseButton)`
    background-color: transparent;
    color: #ffffff;
    margin: 5px 0;
    outline: none;

    &:hover, &:active, &:visited {
        background-color: #ffffff;
        color: #590a5b;
    }

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
    outline: none;
`;

export const LogOutButton = styled.button`
    position: fixed;
    bottom: 0;
    left: 10px;
    background-color: transparent;
    font-size: 16px;
`;
