import styled from 'styled-components';

export const First = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    padding: 20px 10px;

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: block;
    }
`;

export const SearchHandle = styled.div`
    grid-column: 2/11;
    margin-left: 30px;

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
        color: #000;
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
    }

    @media (min-width: 601px) and (max-width: 1024px) {
        .Search {
            position: relative;
            padding-left: 20px;
        }

        .Search input[type='text'] {
            width: 90%;
            height: 4.8rem;
            padding: 1.5rem;
            font-weight: 500;
            border-radius: 8rem;
            background: #ffffff;
            box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        }

        .Search input[placeholder] {
            font-size: 1.4rem;
            color: #878787;
            font-weight: 500;
        }

        .Search .SearchBtn {
            width: 6.2rem;
            height: 4.8rem;
            background-color: #000;
            border-radius: 5rem;
            color: white;
            position: absolute;
            left: 500px;
            top: 0;
            display: grid;
            place-items: center;
        }
    }
`;

export const Button = styled.button`
width: 100px;
height: 50px;
margin-left: 10px;
padding: 0.5rem;
color: #fff;
background-color: #FFAF38;
border-radius 8px;
border: none; 
font-weight: 500;
font-size: 15px;
line-height: 19px;

//medium screens
@media (min-width: 601px) and (max-width: 1024px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: none;
    }
`;
