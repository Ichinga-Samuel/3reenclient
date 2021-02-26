import styled from 'styled-components';

export const First = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    position:relative;
    width: 100%;
    .Cate, .input, .Block{
        display: none;
    }
    .Top{
        display:flex;
        align-items: center;
        justify-content:space-between;
        width: 100%;
        margin: 5px 15px:
    }
    .Top p{
            font-weight: 600;
            font-size: 2rem;
        }
     /* mobile */
     @media only screen and (max-width: 768px) {
         .Cate, .Top{
             display:flex;
             align-items: center;
             justify-content:space-between;
             margin:10px;
         }
         .Block{
             display: flex;
             align-items: center;
             justify-content: space-evenly;
             background-color: #ccc;
             height: 60px;
             box-shadow: 4px 4px 5px rgba(79, 0, 81, 0.1);
             width: 100%;
             margin: 25px 0;
         }
         .Block p{
             font-size: 2rem;
             font-weight: 400;
         }
         .Block .Active{
            background-color: #fff;
            padding: 18px;
            border-bottom: 1px solid #ccc;

         }
        .input {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
        }
        .Input {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            width: 90%;
        }
        .Search {
            width: 90%;
            border-radius: 20px;
            border-right: none;
            height: 4rem;
            padding: 1.5rem;
            font-weight: 500;
            background: #ffffff;
            box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
        }
        .Search input[placeholder] {
            font-size: 1.3rem;
            color: #878787;
            font-weight: 500;
        }
        .SearchBtn {
            position: absolute;
            right: -;
            border-left: none;
            width: 6rem;
            height: 3rem;
            background-color: #ffaf38;
            color: white;
            place-items: center;
            border-radius: 20px;
        }

    //medium screens
    @media (min-width: 601px) and (max-width: 1024px) {
        display: block;
    }
    p {
        font-weight: 700;
        font-size: 3rem;
    }
`;
export const ViewLink = styled.div`
    text-decoration: none;
    color: #ccc;
    font-size: 2rem;
    font-weight: 400;
    padding-right: 10px;
    &:hover {
        color: #ffaf38;
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
    }
/* medium */
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

export const Hamburger = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    span {
        width: 25px;
        height: 2px;
        background-color: #000;
        border-radius: 5px;
        margin-bottom: 4px;
    }
`;
