import React from 'react';
import { FeaturedProductsStyled } from './FeaturedProducts.styled';
import FeaturedProduct from './FeaturedProduct';

const FeaturedProducts = () => {
    const FeaturedProductsInfo = [
        {
            product1: {
                price: 599,
                discount: 499,
                name: 'Beats Solo 2 Ear',
                type: 'Headphones - Black',
                img: '/img/headphone3x.png',
            },
        },

        {
            product2: {
                price: 599,
                discount: 499,
                name: 'H-Squared tvTray',
                type: '',
                img: '/img/tvTray3x.png',
            },
        },

        {
            product3: {
                price: 599,
                discount: 499,
                name: 'Rain gauge',
                type: '',
                img: '/img/gauge3x.png',
            },
        },
    ];

    return (
        <FeaturedProductsStyled>
            <h2 style={{ marginBottom: '50px' }}>Featured Products</h2>
            <div className="FeaturedProductsItems">
                <FeaturedProduct featuredProduct={FeaturedProductsInfo[0].product1} />
                <FeaturedProduct featuredProduct={FeaturedProductsInfo[1].product2} />
                <FeaturedProduct featuredProduct={FeaturedProductsInfo[2].product3} />
            </div>
        </FeaturedProductsStyled>
    );
};

export default FeaturedProducts;
