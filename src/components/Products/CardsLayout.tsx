import React from 'react';

import Link from 'next/link';
import fakeData from '@/components/Products/fakeData';
import Menu from './Menu';
import DropMenu from './DropMenu';

import {
    Card,
    A,
    Remain,
    ProductName,
    NewPrice,
    OldPrice,
    Div5,
    ProductImage,
    ProductCart,
} from '@/components/Products/CardsLayout.styled';

const CardsLayout = () => {
    const allItems = fakeData.map((items) => (
        <Card key={items.id}>
            <div>
                <Remain>{items.remainder}</Remain>
            </div>
            <ProductImage>
                <img src={items.thumb} alt={items.description} />
            </ProductImage>

            <div>
                <ProductName>{items.product_name}</ProductName>
            </div>
            <span>
                <img src={items.stars} alt="stars" />
            </span>
            <Div5>
                <NewPrice>
                    <span>{items.currency}</span> {items.slashPrices}
                </NewPrice>
                <OldPrice>
                    <span>{items.currency}</span> {items.price}
                </OldPrice>
                <ProductCart>
                    <img src={items.cart} alt="cart" />
                </ProductCart>
            </Div5>
        </Card>
    ));
    return (
        <div>
            <Menu />
            <Link href="/DetailsPage/ProductDetails">
                <A>{allItems}</A>
            </Link>
            <DropMenu title="Categories"  />
        </div>
    );
};

export default CardsLayout;
