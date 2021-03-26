import styled from 'styled-components';

export const Par1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 30px;
    //mobile
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: block;
    }
`;

export const Par2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 30px;
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: block;
    }
`;
export const Div2 = styled.div`
    padding-left: 15rem;
    margin: 0;
    width: 50%;
    //mobile
    @media only screen and (max-width: 768px) {
        padding: 10px;
    }
`;
export const Par3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 30px;
    //mobile
    @media only screen and (max-width: 768px) {
        display: none;
    }
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: block;
    }
`;
export const Div3 = styled.div`
    margin: 0;
    width: 50%;
    @media only screen and (max-width: 768px) {
        border: 1px solid #ccc;
        width: 100%;
        border-radius: 10px;
    }
`;
export const ImageDiv1 = styled.div`
    padding-bottom: 10px;
    width: 40%;
`;

export const ImageDiv2 = styled.div`
    padding-left: 25px;
    margin-top: 20px;
    width: 40%;
`;

export const SliderSpace = styled.div`
    width: 400px;
    height: 600px;
    //mobile
    @media only screen and (max-width: 768px) {
        height: 200px;
        width: 200px;
    }
`;
export const RightImage = styled.div`
    //mobile
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const ProductDets = styled.div`
    font-size: 28px;
    color: #000;
    padding-bottom: 20px;
    //mobile
    @media only screen and (max-width: 768px) {
        padding-top: 70px;
        font-size: 15px;
        display: block;
    }
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 20px;
    }
`;
export const Span = styled.span`
    display: none;
    //mobile
    @media only screen and (max-width: 768px) {
        color: red;
        display: inline-block;
        font-size: 2rem;
    }
    span {
        color: #000;
    }
`;
export const ProductDets2 = styled.div`
    font-size: 25px;
    color: #000;
    padding-bottom: 20px;
    //mobile
    @media only screen and (max-width: 768px) {
        font-size: 10px;
        padding-left: 20px;
        text-align: justify;
    }
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 20px;
    }
`;
export const BrandName = styled.div`
    font-size: 15px;
    color: #000;
    padding-bottom: 20px;
    //mobile
    @media only screen and (max-width: 768px) {
        color: purple;
    }
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 15px;
    }
`;

export const ProductPrice = styled.span`
    font-size: 25px;
    color: #000;
    padding-bottom: 20px;
    //mobile
    @media only screen and (max-width: 768px) {
        padding-left: 5px;
        font-size: 2rem;
        color: #ccc;
    }
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 40px;
        line-height: 30px;
        font-weight: 400;
        padding-bottom: 20px;
    }
`;
export const Rate = styled.div`
    display: none;
    //mobile
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export const Btn = styled.button`
    color: #fef5ff;
    padding: 14.5px 24px;
    background: #ffaf38;
    font-size: 18px;
    line-height: 23px;
    margin-top: 20px;
    //mobile
    @media only screen and (max-width: 768px) {
        width: 100%;
        border-radius: 30px;
    }

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 15px;
        line-height: 20px;
        margin-top: 20px;
    }
`;

export const ProductDetail = styled.h3`
    font-size: 48px;
    line-height: 60px;
    color: #000;
    padding: 10px;
    //mobile
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        padding-bottom: 0;
        border-bottom: 1px solid #ccc;
        width: 100%;
        padding-left: 20px;
        text-align: justify;
    }
    span {
        padding-right: 5px;
        float: right;
    }
`;
