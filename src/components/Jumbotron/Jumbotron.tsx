import React from 'react';
import { JumbotronStyled } from './Jumbotron.styled';

const Jumbotron = () => {
    return (
        <JumbotronStyled>
            <section className="Container">
                <h1>
                    Delivering<span>Constant Happiness</span>
                </h1>
                <button className="CTA">Shop Now</button>
                {/* <div className="Headphone">
                    <img src="/img/headphones.png" alt="headphones"  />
                </div> */}
            </section>
        </JumbotronStyled>
    );
};

export default Jumbotron;
