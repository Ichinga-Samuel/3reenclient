import React from 'react';
import { BannerProduct, TBHolder } from '@/components/UserLayout/UserWebLayout.styled';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';

const TopBannerProductHolder = () => {
    const router = useRouter();

    const gotoEachProduct = (cat) => {
        router.push(`/products/${cat}`);
    };
    return (
        <BannerProduct data-aos="flip-left" data-aos-delay="800">
            <Row gutter={0}>
                <Col xs={12} xl={8} lg={8}>
                    <TBHolder onClick={() => gotoEachProduct('vintage')}>
                        <img src="/img/vintage3x.png" alt="vintage" />
                    </TBHolder>
                    <h4> Vintage Shirt</h4>
                </Col>
                <Col xs={12} xl={8} lg={8}>
                    <TBHolder onClick={() => gotoEachProduct('laptop')}>
                        <img src="/img/laptop3x.png" alt="laptop" />
                    </TBHolder>
                    <h4>Laptop</h4>
                </Col>
                <Col xs={12} xl={8} lg={8}>
                    <TBHolder onClick={() => gotoEachProduct('scarf')}>
                        <img src="/img/scarf3x.png" alt="scarf" />
                    </TBHolder>
                    <h4>Scarf</h4>
                </Col>
            </Row>
        </BannerProduct>
    );
};

export default TopBannerProductHolder;
