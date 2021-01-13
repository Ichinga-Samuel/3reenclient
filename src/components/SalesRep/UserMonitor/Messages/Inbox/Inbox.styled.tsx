import styled from 'styled-components';

export const InboxStyled = styled.div`
    background-color: #fff;

    .user__details {
        display: flex;
        align-items: center;

        margin-top: 30px;
        flex-basis: 1 1;
        padding: 20px;
        width: 30%;
    }

    .user__details:nth-child(1) {
        box-shadow: 0px 7px 21px rgba(79, 0, 98, 0.1);
        border-left: 10px solid #590a5b;
    }

    .user__name {
        color: #590a5b;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contain {
        padding: 20px;
        margin-top: 10px;
        width: 100%;
    }
    .contain h2 {
        font-size: 36px;
        font-weight: 600;
    }
`;
