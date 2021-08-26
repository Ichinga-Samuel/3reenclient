import React from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { EmptyDiv, HomeBannerContainer, LowerBannerSection } from '@/components/UserLayout/UserWebLayout.styled';
import { Row, Col, Button } from 'antd';
import { useRouter } from 'next/router';
import TopBannerProductHolder from '@/components/WelcomePage/TopBannerProductHolder';
import FeaturedProducts from '@/components/WelcomePage/Featured/FeaturedProducts';
import BestSectionProducts from '@/components/WelcomePage/BestSeller/BestSectionProducts';

const WelcomePage = () => {
    const router = useRouter();
    const StartShop = () => {
        router.push('/products');
    };
    return (
        <>
            <UserWebLayout webtitle="Welcome">
                <HomeBannerContainer data-aos="zoom-in">
                    <Row gutter={24}>
                        <Col xs={24} xl={12} lg={12}>
                            <div className="welcome">
                                <h3>Delivering Constant</h3>
                                <h3>Happiness</h3>

                                <Button
                                    data-aos="flip-down"
                                    data-aos-delay="800"
                                    data-aos-duration="500"
                                    onClick={StartShop}
                                    className="btn-shop"
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </HomeBannerContainer>
                <TopBannerProductHolder />
                <EmptyDiv />
                <FeaturedProducts />
                <BestSectionProducts />
                <LowerBannerSection>
                    <Row gutter={24} data-aos="zoom-in-right">
                        <Col xs={24} xl={12} lg={12}>
                            <div className="welcomelower">
                                {/*<h3>iPhone 13</h3>
                                <h4>
                                    Performance and design. <br /> At its peak
                                </h4>*/}

                                <Button onClick={StartShop} className="btn-shop">
                                    Shop Now
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} xl={12} lg={12}>
                            <div className="lowerbanner" />
                        </Col>
                    </Row>
                </LowerBannerSection>
            </UserWebLayout>
        </>
    );
};

export default WelcomePage;
