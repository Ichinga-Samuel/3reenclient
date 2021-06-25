import styled from 'styled-components';

export const CSTProductContainer = styled.div`
    position: relative;
    /* border: 1px solid #000; */
    transition: ease all 0.5s;
    width: 75%;
    margin: auto;
    @media (max-width: 499px) {
        width: 99%;
    }
`;

export const CSTProductHolder = styled.div`
    border-radius: 2px;
    font-family: 'MADE TOMMY', sans-serif;
    background: var(--white-color);
    overflow: hidden;
    margin-bottom: 20px;
    transition: ease all 0.5s;
    padding: 15px;
    position: relative;
    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        background: #ddd;
        left: 0;
        right: 0;
        bottom: -14px;
    }
    .imageholder {
        padding: 10px;
        width: 100px;
        height: 100px;
        background: #c4c4c4;
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
        @media (max-width: 499px) {
            width: 50px;
            height: 50px;
        }
    }
    .details {
        margin: 2rem;
        transition: ease all 0.5s;
        text-align: left;
        p {
            margin-bottom: 10px;
        }
        h4 {
            font-size: 1rem;
        }
    }
    .actbtn {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: ease all 0.5s;
        padding: 1rem;
        font-size: 1.2rem;
        color: var(--background-color);
        margin-top: 20%;
        transform: translateY(0);
        opacity: 0;
        &:hover {
            box-shadow: none;
            color: #000;
            font-weight: 500;
            transition: ease all 0.5s;
        }
        @media (max-width: 499px) {
            margin-top: 10%;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }
    &:hover {
        cursor: pointer;
        transition: ease all 0.5s;
        box-shadow: 0 4px 11px rgba(0, 0, 0, 0.3);
        .actbtn {
            opacity: 1;
            transform: translateY(10px);
            transition: transform opacity ease all 0.5s;
        }
    }
`;

export const CSTProductDetails = styled.div`
    position: relative;
    transition: ease all 0.5s;
    width: 80%;
    margin: 1rem auto 0;
    padding: 10px 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    a {
        &:hover {
            text-decoration: none;
        }
    }
    .ant-btn-dashed {
        display: flex;
        align-items: center;
        &:hover {
            border: 1px dashed var(--background-color);
            border-color: var(--background-color);
        }
    }
    .slideProduct {
        background: #ddd;
        width: 100%;
        height: 300px;
    }
    .basicDetails {
        display: flex;
        flex-direction: column;
        h3 {
            color: var(--background-color);
            font-weight: bold;
            font-size: 2.7rem;
            margin-bottom: 2rem;
        }
        p {
            margin-bottom: 1.6rem;
            font-size: 1.6rem;
            transition: ease all 0.5s;
            color: rgba(0, 0, 0, 0.7);
        }
        &__price {
            color: var(--secondary-color) !important;
        }
    }
    .fullDetails {
        position: relative;
        transition: ease all 0.5s;
        margin-bottom: 3rem;
        h4 {
            font-size: 2rem;
            color: var(--background-color);
            font-weight: bold;
            margin-bottom: 1.2rem;
        }
        p {
            line-height: 30px;
            font-size: 1.4rem;
        }
        .prodbtn {
            width: 100%;
            justify-content: center;
            height: 40px;
            display: flex;
            align-items: center;
            color: var(--secondary-color);
            border: 2px solid var(--secondary-color);
            font-size: 1.62rem;
            outline: none;
            cursor: pointer;
            &.active {
                background: var(--secondary-color);
                color: var(--white-color);
            }
        }
    }
    @media (max-width: 499px) {
        width: 99%;
        .slideProduct {
            height: 150px;
            margin-bottom: 15px;
        }
        .prodbtn {
            margin-bottom: 10px;
        }
    }
`;
