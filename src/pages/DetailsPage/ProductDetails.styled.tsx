import styled from 'styled-components';

export const Par1 = styled.div`
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

export const Par3 = styled.div`
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

export const ImageDiv1 = styled.div`
    padding-bottom: 10px;
    width: 70%;
    display: flex;
    align-items: center;
`;

export const ImageDiv2 = styled.div`
    padding-left: 25px;
    margin-top: 20px;
    width: 65%;
    display: flex;
    align-items: center;
`;

export const SliderSpace = styled.div`
    width: 400px;
    height: 600px;
`;

export const ProductDets = styled.div`
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
    color: #000;
    padding-bottom: 10px;
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 27px;
        line-height: 35px;
        font-weight: 400;
    }
`;

export const ProductDets2 = styled.div`
    font-weight: 500;
    font-size: 36px;
    line-height: 35px;
    color: #000;
    padding: 10px;
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 25px;
        line-height: 30px;
        font-weight: 400;
    }
`;
export const BrandName = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000;
    padding-bottom: 10px;
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 15px;
    }
`;

export const ProductPrice = styled.span`
    font-weight: 500;
    font-size: 56px;
    line-height: 70px;
    color: #000;
    padding-top: 10px;
    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 40px;
        line-height: 30px;
        font-weight: 400;
        padding-bottom: 20px;
    }
`;

export const Btn = styled.button`
    color: #fef5ff;
    padding: 14.5px 24px;
    background: #ffaf38;
    border-radius: 50px;
    font-size: 18px;
    line-height: 23px;
    margin-left: 20px;

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
`;
