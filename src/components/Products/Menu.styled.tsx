import styled from 'styled-components';

export const First = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    gap: 20px;
    padding: 20px 10px;
`;

export const SearchHandle = styled.div`
    .Search {
        position: relative;
    }
    .Search input[type='text'] {
        box-sizing: border-box;
        width: 618px;
        height: 50px;
        padding: 0.5rem;
        border: 1px solid #716b72;
        border-radius: 8px;
        color: #bfb1c0;
        font-size: 15px;
        line-height: 19px;
        text-align: justify;
    }

    .Search input[placeholder] {
        font-size: 1.6rem;
        color: #878787;
        font-weight: bold;
        text-align: justify;
        padding-left: 50px;
    }

    .Search .SearchBtn {
        width: 50px;
        height: 50px;
        border-radius: 5rem;
        color: #878787;
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
    }
`;

export const Button = styled.button`
width: 100px;
height: 50px;
margin-left: 10px;
padding: 0.5rem;
color: #fff;
background-color: green;
border-radius 8px;
border: none; 
font-weight: 500;
font-size: 15px;
line-height: 19px;
`;

export const Image = styled.img`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
