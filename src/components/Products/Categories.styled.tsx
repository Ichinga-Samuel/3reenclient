import styled from 'styled-components';

export const Ul = styled.div`
    text-decoration: none;
    color: #000;
    font-size: 16px;
    text-align: justify;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 2.5;
    list-style-type: none;
    @media only screen and (max-width: 768px){
        display: none;
    }
`;

export const Span = styled.span`
    display: none;
    max-height: '300px';
    transition: max-height 0.3s ease-in;
`;
// ${({ isOpen }) => (isOpen ? '300px' : '0')};

export const Title = styled.div`
    padding: 5px 0;
    font-weight: 500;
    font-size: 36px;
    text-align: right;
    line-height: 45px;
    color: inherit;
`;

export const A1 = styled.a`
    text-decoration: none;
    color: #000;
    &:hover {
        color: #590a5b;
    }
`;
