import React from 'react';
import Styled from 'styled-components';
const SpinnerLoading = () => {
    const Container = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    transform:translate(300%, -40%);
    min-height:100vh;
    img{
        margin-left:20px;
    }
    `;
    return (
        <Container>
            <h3>Loading</h3> <img src="/img/loading.svg" alt="treen" />
        </Container>
    );
};

export default SpinnerLoading;
