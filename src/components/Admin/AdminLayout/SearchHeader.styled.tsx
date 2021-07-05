import styled from 'styled-components';

export const HeaderStyled = styled.header`
    .Header {
        align-items: center;
        position: relative;
        background:#C4C4C4;
    }
    .Input {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 294px;
        height: 40px;
        left: 918px;
        border: 1px solid rgba(0, 0, 0, 0.38);
        box-sizing: border-box;
    }
    .Search {
        width: 80%;
        display: flex;
        align-items: center;
        height: 4rem;
        padding: 0.5rem 1.5rem;
        font-weight: 500;
        background: #FAFAFA;
        // box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    }
    .Search input[placeholder] {
        font-size: 1.3rem;
        color: #878787;
        font-weight: 500;
    }
    .SearchBtn {
        width: 187px;
        height: 40px;
        background-color: #ffaf38;
        color: white;
        place-items: center;

    }

    // medium screens

    @media only screen and (max-width: 768px) {
        .Header{
            padding: 20px;
            
        }
    }
   

    // large screens

    @media (min-width: 1025px) {
        
    }
`;
