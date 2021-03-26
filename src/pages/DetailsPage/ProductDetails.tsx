import React from 'react';
import Header from '@/components/Header/Header';

import { Page } from '@/components/Products/CardsLayout.styled';
import {
    Par1,
    Par2,
    Par3,
    SliderSpace,
    ProductDets,
    ProductDets2,
    BrandName,
    ProductPrice,
    Btn,
    ProductDetail,
    ImageDiv1,
    ImageDiv2,
    Div2,
    Div3,
    Span,
    RightImage,
    Rate,
} from '@/components/Products/ProductDetails.styled';

import Carousel1 from '@/pages/DetailsPage/Carousel1';
import Footer from '@/components/Footer/Footer';

const ProductDetails = () => {
    return (
        <Page>
            <Header />
            <Par1>
                <SliderSpace>
                    <Carousel1 />
                </SliderSpace>
                <Div2>
                    <ProductDets>
                        UMIDIGI A7 Pro 6.3-Inch (4GB RAM,64GB ROM) Android 10.0,(16MP+16MP+5MP+5MP)+16MP Dual 4G LTE+SD
                        Smartphone -Cosmic Black
                    </ProductDets>
                    <BrandName>
                        Brand: <span>UMIDIGI | Similar products from UMIDIGI</span>
                    </BrandName>
                    <Span>
                        N49,900 <span>||</span>
                    </Span>
                    <ProductPrice>N 39,990</ProductPrice>
                    <br />
                    <Rate>
                        <div>
                            <img src="/img/star1.png" alt="filled start"/>
                            <img src="/img/star1.png" alt="filled start"/>
                            <img src="/img/star1.png" alt="filled start"/>
                            <img src="/img/star1.png" alt="filled start"/>
                            <img src="/img/stars.png" alt="filled start"/>
                        </div>
                        <div>
                            <img src="/img/heart.png" alt="heart"/>
                        </div>
                    </Rate>
                    <Btn type="submit">Add to cart</Btn>
                </Div2>
            </Par1>

            <Par2>
                <Div3>
                    <ProductDetail>
                        Description
                        <span>
                            <img src="/img/down-arrow.png" alt="down arrow"/>
                        </span>
                    </ProductDetail>
                    <ProductDets2>
                        OS:Stock Android 10.0
                        <br /> SIM Card: Dual Nano
                        <br /> SIM Display: 6.3 &quot;FHD+ 19.5:9 Waterdrop Display
                        <br />
                        RAM:4GB LPDDR4X
                        <br /> Front camera: 16MP
                        <br /> ROM:64GB
                        <br /> Rear camera: 16MP+16MP+5MP+5MP
                        <br /> Battery: 4150 mAh
                    </ProductDets2>
                    <ProductDets2>
                        <p>SIM Card: Dual</p>
                        <p>RAM:4GB</p>
                        <p>ROM:64GB</p>
                        <p>Battery: 4150mAh</p>
                    </ProductDets2>
                </Div3>

                <RightImage>
                    <img src="/img/phone.png" alt="umgidi" />
                </RightImage>
            </Par2>

            <Par3>
                <ImageDiv1>
                    <img src="/img/matrix.png" alt="matrix" />
                </ImageDiv1>
                <ImageDiv2>
                    <img src="/img/metal.png" alt="metal" />
                </ImageDiv2>
            </Par3>
            <Footer />
        </Page>
    );
};

export default ProductDetails;
