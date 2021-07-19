import styled from 'styled-components';
import { media } from './device';

export const ProfileWrap = styled.div`
    background-color: #ededed;
    position: relative;
    left: 0;
    right: 0;
    padding: 20px 80px;

    ${media.mobileL} {
        width: 100%;
        padding: 100px 0;
    }

    & .mglf158 {
        margin-left: 158px;
    }

    & .col-green {
        color: green;
    }

    & .mgtop15 {
        margin-top: 15px;
    }

    & .primary-color {
        color: #590a5b;
    }

    & .profile-title {
        font-size: 25px;
    }

    & .profile-box {
        width: 100%;
        height: 100%;
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        margin-top: 20px;
        padding: 30px 60px;

        .edit-text {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.87);
            font-weight: 200;
        }

        .upload-pic {
            display: flex;
            margin-top: 50px;
        }
        .pic-upload {
            width: 200px;
            height: 200px;
            clip-path: circle();
            background: #fafafa;
            border: 1px solid rgba(0, 0, 0, 0.25);
        }
        .pic-details {
            margin-left: 30px;
            margin-top: 20px;
        }
        .upload {
            background: #fafafa;
            color: #590a5b;
            text-align: center;
            padding: 15px;
            font-size: 15px;

            ${media.mobileL} {
                padding: 4px;
                font-size: 13px;
                height: 30px;
            }
        }
    }

    ${media.mobileL} {
        & .profile-box {
            padding: 10px;
        }
    }

    ${media.tablet} {
        .mglf158 {
            margin-left: 0px;
        }
    }

    & .user-form {
        margin-top: 50px;

        label {
            color: rgba(0, 0, 0, 0.57);
        }

        input {
            width: 380px;
            height: 40px;
            margin-left: 30px;
            padding: 5px 20px;
            border: 1px solid rgba(0, 0, 0, 0.38);

            ${media.tablet} {
                width: 85%;
                flex-direction: column;
                margin-left: 0;
            }
        }
        button {
            height: 40px;
            position: absolute;
            background-color: #590a5b;
            margin-left: 5px;
            border: none;
        }

        span {
            color: rgba(0, 0, 0, 0.38);
            margin-left: 15px;

            button {
                position: relative;
                background-color: transparent;
                margin: 0;
                font-size: 15px;
            }
        }
        .city {
            width: 232px;
            margin-left: 10px;
        }
        .email {
            width: 475px;
        }
    }

    & .second {
        width: 250px;
        height: 35px;
        margin: 40px 0;
        background: #ffaf38;
        color: #ffffff;
        text-align: center;
        border: none;
        outline: none;
        font-size: 18px;
    }

    ${media.mobileL} {
        .upload {
            width: 100px;
            height: 20px;
        }
    }

    ${media.tablet} {
        .city {
            width: 85% !important;
            flex-direction: column;
            margin-top: 15px;
            margin-left: -1px !important;
        }
        .email {
            width: 85% !important;
            margin: 0;
        }
        .mgtop15 {
            margin-top: 0;
        }
    }
`;
