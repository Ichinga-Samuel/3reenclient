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
        width: 228px;
        margin-top: 55px;
    }

    & li {
        margin-top: 10px;
        padding: 8px 0;
        line-height: 18px;
        font-weight: 600;
    }
    & .current {
        background-color: #ffffff;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
        border-left: 4px solid #590a5b;
        color: #590a5b;
    }

    & .message-inbox {
        margin-left: 40px;
        font-size: 27px;
        font-weight: 400;
        position: absolute;
    }

    & .messager-name {
        margin-left: 10px;
    }

    & .message-box {
        width: 100%;
        height: 400px;
        background: #ffffff;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
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
        width: 400px;
        font-weight: 100;
        line-height: 1.2;
        height: 66px;
        color: rgba(0, 0, 0, 0.67);
    }

    & .message-date {
        width: 200px;
        height: 30px;
        /* padding: 3px 10px; */
        font-size: 14px;
        margin-top: 20px;
        color: rgba(0, 0, 0, 0.38);
        background: #fafafa;
        text-align: center;
    }

    & .share-col {
        margin-top: 7px;
        width: 30px;
    }

    & .message-input input {
        width: 100%;
        outline: none;
        background-color: transparent;
        padding: 5px;
    }

    & .message-input {
        width: 100%;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin: 0 20px;
    }

    .send-message_col {
        margin-top: 10px;
    }
`;
