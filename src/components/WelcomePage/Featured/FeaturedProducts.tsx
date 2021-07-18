import React from 'react';
import { FeaturedProductHolder } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col } from 'antd';
import FeaturedCard from '@/components/WelcomePage/Featured/FeaturedCard';

const FeaturedProducts = () => {
    const FeaturedData = [
        {
            id: 1,
            price: 600,
            discount: 499,
            name: 'Beats Solo 2 Ear',
            type: 'Headphones - Black',
            img: '/img/headphone3x.png',
            rating: 4,
        },
        {
            id: 2,
            price: 759,
            discount: 599,
            name: 'H-Squared tvTray',
            type: '',
            img: '/img/tvTray3x.png',
            rating: 5,
        },
        {
            id: 3,
            price: 499,
            discount: 399,
            name: 'Rain gauge',
            type: '',
            img: '/img/gauge3x.png',
            rating: 3,
        },
    ];
    return (
        <FeaturedProductHolder>
            <div style={{ marginBottom: '3rem' }}>
                <h3 className="pageTitle">Featured Products</h3>
            </div>
            <Row gutter={58}>
                {FeaturedData?.map((product) => {
                    return (
                        <>
                            <Col xs={12} xl={8} lg={8} key={product.id}>
                                <FeaturedCard featuredProduct={product} />
                            </Col>
                        </>
                    );
                })}
            </Row>
        </FeaturedProductHolder>
    );
};

export default FeaturedProducts;
