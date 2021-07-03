/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const UserInfo = styled.div`
    position: fixed;
    right: 50px;
    top: 25px;
    display: flex;

    & img {
        margin-right: 10px;
    }
`;

export const UserName = styled.div`
    font-size: 18px;
    color: #590a5b;
    font-weight: 600;
    margin-top: 5px;
    position: sticky;
    line-height: 15px;
`;

export const UserRep = styled.div`
    color: #590a5b;
    font-size: 16px;
`;

export const NotifyUserIcon = styled.div`
    width: 25px;
    height: 25px;
    margin-right: 40px;
    margin-top: 8px;
    position: fixed;
    right: 270px;
    top: 25px;
`;
