import React from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { HomeBannerContainer } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col, Button } from 'antd';
import { useRouter } from 'next/router';

const WelcomePage = () => {
    const router = useRouter();
    const StartShop = () => {
        router.push('/products');
    };
    return (
        <>
            <UserWebLayout webtitle="Welcome">
                <HomeBannerContainer>
                    <Row gutter={24}>
                        <Col xs={24} xl={12} lg={12}>
                            <div className="welcome">
                                <h3>Delivering</h3>
                                <h4>constant happiness</h4>

                                <Button onClick={StartShop} className="btn-shop">
                                    Shop Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </HomeBannerContainer>
            </UserWebLayout>
        </>
    );
};

export default WelcomePage;
