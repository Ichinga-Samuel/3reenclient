import styled from 'styled-components';

export const CustomerContainer = styled.div`
    font-family: 'Made Tommy', sans-serif;
`;

export const SideNav = styled.div`
    background: #590a5bf0;
    height: 400px;
    width: 250px;
    li {
        margin-top: 30px;
        text-align: left;
    }
    a {
        color: #fff;
        margin-left: 40px;
        cursor: pointer;
    }
    a:hover{
        background:#fff;
        color:#590a5bf0;
    }
`;

export const AccountInfo = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    .account-info {
        margin-left: 30px;
    }
    h3 {
        margin-top: 20px;
        font-weight: bolder;
        color: #590a5bf0;
    }
`;

export const PasswordForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    margin:0 auto;
    flex-direction:column;
`;

export const TableStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    width:100%;
    margin:0 auto;
    flex-direction:column;
`;
