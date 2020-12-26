import styled from 'styled-components';

export const TermsStyled = styled.div`
    .Terms {
        margin-left: 7rem;
        margin-top: 7rem;
    }

    .Terms h1 {
        font-size: 3.2rem;
        line-height: 1.2;
        margin-left: 7rem;
        width: 40%;

        color: #590a5b;

        font-size: 4rem;

        font-weight: 600;
    }

    .Terms p {
        font-size: 16px;
        font-weight: 500;
        margin-left: 7rem;
        margin-right: 7rem;
    }
    .acceptanceofterms {
        color: #fff;
        background-color: #590a5b;
        border-radius: 100px;
        margin: 15px auto;
        width: 30%;
        padding: 10px 5px;
    }
    .acceptanceofterms h2 {
        font-size: 1.8rem;
        text-transform: uppercase;
        align-items: center;
    }

    @media (max-width: 768px) {
        .Terms {
            margin: 10px 10px;
        }

        .Terms h1 {
            margin: 10px;
            width: 100%;
        }

        .Terms p {
            margin-left: 1rem;
        }

        .acceptanceofterms {
            width: 100%;
        }
    }
`;
