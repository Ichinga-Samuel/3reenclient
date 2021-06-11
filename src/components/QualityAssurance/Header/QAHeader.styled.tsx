import styled from 'styled-components';

export const QAHeaderContainer = styled.header`
    display: flex;
    width: 100%;
    background: var(--white-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    height: 60px;
    align-items: center;
    position: sticky;
    .logoHolder {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 13px;
        .icon {
            margin-left: 5rem;
            cursor: pointer;
            span {
                font-size: 2rem;
            }
        }
    }
    .notification {
        position: relative;
        cursor: pointer;
        span {
            font-size: 3rem;
            color: var(--background-color);
            svg {
                fill: var(--background-color);
            }
        }
    }
    .profileDetails {
        display: flex;
        position: relative;
        justify-content: flex-end;
        width: 100%;
        margin: 0 20px;
        align-items: center;
        div {
            margin: 0 20px;
        }
        .profile {
            display: flex;
            align-items: center;
            .detail {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 0 0 10px;
                p {
                    font-weight: bold;
                    display: block;
                    font-size: 1.4rem;
                    margin-bottom: 0;
                }
                span {
                    font-size: 1.2rem;
                }
            }
        }
    }
    .brand {
        position: relative;
        // top: 0.4rem;
        // right: 0.5rem;
        // grid-column: 1/2;
        // margin-top: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
