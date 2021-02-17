import React, { Component } from 'react';
import Product from './Product';
import Styled from 'styled-components';

export class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    productName: 'Full Product Name',
                    imgUrl: '/img/Product-img.png',
                    description: ' Short and precise product description not going more than 2 or 3 lines',
                    key: 1,
                },
                {
                    productName: 'Full Product Name',
                    imgUrl: '/img/Product-img.png',
                    description: ' Short and precise product description not going more than 2 or 3 lines',
                    key: 2,
                },
                {
                    productName: 'Full Product Name',
                    imgUrl: '/img/Product-img.png',
                    description: ' Short and precise product description not going more than 2 or 3 lines',
                    key: 3,
                },
                {
                    productName: 'Full Product Name',
                    imgUrl: '/img/Product-img.png',
                    description: ' Short and precise product description not going more than 2 or 3 lines',
                    key: 4,
                },
                {
                    productName: 'Full Product Name',
                    imgUrl: '/img/Product-img.png',
                    description: ' Short and precise product description not going more than 2 or 3 lines',
                    key: 5,
                },
                {
                    productName: 'Full Product Name',
                    imgUrl: '/img/Product-img.png',
                    description: ' Short and precise product description not going more than 2 or 3 lines',
                    key: 6,
                },
            ],
        };
    }
    render() {
        const { products } = this.state;
        const Container = Styled.div`
    display:flex;
    flex-wrap:wrap;
    width:1140px;
    margin: 2px;

    `;
        return (
            <Container>
                {products.map((product) => {
                    return (
                        <Product
                            productName={product.productName}
                            imgUrl={product.imgUrl}
                            description={product.description}
                        />
                    );
                })}
            </Container>
        );
    }
}

export default Products;
