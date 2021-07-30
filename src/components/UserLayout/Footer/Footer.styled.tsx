import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: relative;
    transition: ease all 0.5s;
    height: 100%;
    background: var(--white-color);
    margin-top: 4rem;
    padding: 3rem 5rem 0;
    border-top: 1px solid #ddd;
    .upperfooter {
        position: relative;
        transition: ease all 0.5s;
        .foothead {
            font-size: 1.4rem;
            font-weight: bold;
            text-align: left;
            margin-bottom: 12px;
        }
        .footerPayment {
            width: 150px;
            object-fit: contain;
        }
    }
    .innerfooter {
        border-top: 1px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
`;

export const FooterList = styled.ul`
    position: relative;
    transition: ease all 0.5s;
    list-style: none;
    li a {
        padding: 6px 0;
        color: #000;
        display: flex;
        font-size: 1.1rem;
        align-items: center;
        &:hover {
            font-weight: bold;
        }
    }
    img {
        width: 21px;
        object-fit: contain;
        margin-right: 10px;
    }
    svg {
        font-size: 2.2rem;
        margin-right: 10px;
    }
`;

export const SocialMediaList = styled.ul`
    transition: ease all 0.5s;
    list-style: none;
    display: flex;
    margin: 0;
    li a {
        display: flex;
        flex-direction: row;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background: var(--white-color);
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        transition: ease all 0.5s;
        &:hover {
            box-shadow: none;
            transition: ease all 0.5s;
            border: 1px solid var(--background-color-color);
        }
    }
`;
