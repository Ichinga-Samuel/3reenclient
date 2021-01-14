import styled from 'styled-components';

export const Page = styled.div`
    background-color: #fff;
`;

export const FooterDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 6rem;

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: none;
    }
`;

export const ImageHeader = styled.div`
    width: 100%;
`;

export const A = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
    gap: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 6rem;
    margin-right: 6rem;

    //medium screens

    @media (min-width: 601px) and (max-width: 1024px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 0.5rem;
        gap: 0.5rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        margin-left: 4rem;
        margin-right: 4rem;
    }
`;

export const Card = styled.div`
    margin-top: 6rem;
    padding-top: 0.5rem;
    border-radius: 0.5rem;
    width: 233px;
    height: 300px;
    transition-duration: 500ms;
    box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    border-radius: 4px;
    background-color: #fff;
    &:hover {
        transition: 0.7s ease-in;
        overflow: hidden;
        transform: translateY(10%);
    }
`;

export const Remain = styled.span`
    float: right;
    background-color: #eb5757;
    color: #ccc;
    margin: 10px;
    font-size: 10px;
    line-height: 22px;
    text-align: center;
    border-radius: 15px;
    width: 42px;
    height: 22px;
`;

export const ProductImage = styled.div`
    width: 197.61px;
    height: 121.47px;
    padding: 40px 30px;
`;

export const ProductName = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding: 20px;
    color: #716b72;
`;

export const Div5 = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const NewPrice = styled.p`
    font-size: 16px;
    line-height: 20px;
    color: #716b72;
    padding: 20px;
`;

export const OldPrice = styled.p`
    font-size: 16px;
    line-height: 20px;
    color: #e2dddd;
    padding: 20px;
`;

export const ProductCart = styled.div`
    padding: 20px;
`;
