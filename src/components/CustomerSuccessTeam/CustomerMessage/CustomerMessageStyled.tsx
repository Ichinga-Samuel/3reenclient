/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const MessageContent = styled.div`
    position: relative;
    margin-left: 300px;
    max-width: 920px;

    & .message-title {
        margin-top: 70px;
        font-size: 36px;
        font-weight: 500;
    }

    & ul {
        position: fixed;
        width: 228px;
        height: 79px;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    }

    & .message-box {
        position: relative;
        width: 100%;
        height: 400px;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
        margin-left: 136.4px;
        z-index: 999;
        padding: 20px 40px;
    }

    & .message-box_content {
        display: flex;
        margin-bottom: 15px;
    }
    & .message-box_content:last-child {
        justify-content: flex-end;
        text-align: end;
        right: 0;
    }

    & .message-text {
        font-weight: 100;
        line-height: 1.2;
        width: 400px;
        height: 66px;
        color: rgba(0, 0, 0, 0.67);
    }

    & .message-date {
        height: 30px;
        padding: 3px 10px;
        font-size: 14px;
        margin-top: 20px;
        color: rgba(0, 0, 0, 0.38);
        background: #fafafa;
        margin-left: 20px;
    }
`;
