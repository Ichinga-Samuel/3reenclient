import React from 'react';
import { SubHeroStyled } from './SubHero.styled';

const SubHero = () => {
    return (
        <SubHeroStyled>
            <div className="SubHero" style={{ marginTop: '32px' }}>
                <div className="Card">
                    <img src="/img/vintage3x.png" width="300px" height="200px" alt="vintage" />
                    <h4 className="CardTitle">Vintage Shirt</h4>
                </div>
                <div className="Card">
                    <img src="/img/laptop3x.png" width="300px" height="200px" alt="laptop" />
                    <h4 className="CardTitle">Laptop</h4>
                </div>
                <div className="Card">
                    <img src="/img/scarf3x.png" width="300px" height="200px" alt="scarf" />
                    <h4 className="CardTitle">Scarf</h4>
                </div>
                <div className="Card">
                    <img src="/img/vintage3x.png" width="300px" height="200px" alt="vintage" />
                    <h4 className="CardTitle">Vintage Shirt</h4>
                </div>
            </div>
        </SubHeroStyled>
    );
};

export default SubHero;
