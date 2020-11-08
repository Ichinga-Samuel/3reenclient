import React from 'react';
import { FeaturedProductStyled } from './FeaturedProduct.styled';

const FeaturedProduct = ({ featuredProduct }) => {
    return (
        <FeaturedProductStyled>
            <div className="FeaturedProductsItem">
                <div className="image" style={{ marginRight: '30px' }}>
                    <img src={featuredProduct.img} alt={featuredProduct.name + featuredProduct.type} />
                </div>
                <div className="FeaturedProductsItemsDescription">
                    <h4>
                        {featuredProduct.name}
                        <br />
                        {featuredProduct.type}
                    </h4>
                    <img src="/img/rating.png" width="150px" height="30px" alt="Rating for Beats solo" />
                    <p>
                        <span>${featuredProduct.discount}</span> ${featuredProduct.price}
                    </p>
                </div>
            </div>
        </FeaturedProductStyled>
    );
};

export default FeaturedProduct;
