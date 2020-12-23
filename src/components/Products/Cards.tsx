import React from 'react';

import Link from 'next/link';
import fakeData from '@/pages/DetailsPage/fakeData';
import Menu from './Menu';

const Card = () => {
    const allItems = fakeData.map((items) => (
        <div key={items.id}>
            <div>
                <span>{items.remainder}</span>
            </div>
            <div>
                <img src={items.thumb} alt={items.description} />
            </div>

            <div>
                <h2>{items.product_name}</h2>
            </div>
            <div>
                <span>
                    <img src={items.stars} alt="stars" />
                </span>
                <p>
                    <span>{items.currency}</span> {items.slashPrices}
                </p>
                <p>
                    <span>{items.currency}</span> {items.price}
                </p>
            </div>
            <div>
                <img src={items.cart} alt="cart" />
            </div>
        </div>
    ));
    return (
        <div>
            <Menu />
            <Link href="/DetailsPage/ProductDetails">
                <a>{allItems}</a>
            </Link>
        </div>
    );
};

export default Card;
