import React from 'react';
import Header from '@/components/Header/Header';
// import Slider from '@/pages/DetailsPage/Slider'

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
} from '@/pages/DetailsPage/ProductDetails.styled';

const ProductDetails = () => {
    return (
        <Page>
            <Header />
            <Par1>
                <SliderSpace>
                    <img src="/img/phone.png" alt="phone" />
                    <img src="/img/slider-btns.png" alt="sliders" />
                </SliderSpace>
                <div>
                    <ProductDets>
                        UMIDIGI A7 Pro 6.3-Inch (4GB
                        <br /> RAM,64GB ROM) Android
                        <br /> 10.0,(16MP+16MP+5MP+5MP)+16MP
                        <br /> Dual 4G LTE+SD Smartphone
                        <br /> -Cosmic Black
                    </ProductDets>
                    <BrandName>
                        Brand: <span>UMIDIGI | Similar products from UMIDIGI</span>
                    </BrandName>
                    <ProductPrice>N 39,990</ProductPrice>
                    <br />
                    <span>
                        <a href="https://google.com">
                            <img src="/img/cart.png" alt="cart" />
                        </a>
                    </span>
                    <Btn type="submit">Add to cart</Btn>
                </div>
            </Par1>

            <Par2>
                <div>
                    <ProductDetail>
                        Products
                        <br /> Details
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
                        CPU:MediaTek, Helio P23, 4xCortex-A53, 2.0GHz &amp; 4xCortex-A53,
                        <br /> 1.5GHz
                        <br />
                        Other features:Quad Rear Camera, Global Version, Type-C, Dual 4G Network, 2+1 Cart Slots,
                        Octa-Core Processor
                        <br />
                        Network: 4G,3G, WCDMA,TD-SCDMA, 2G GSM.
                    </ProductDets2>
                </div>

                <SliderSpace>
                    <img src="/img/phone.png" alt="umgidi" />
                </SliderSpace>
            </Par2>

            <Par3>
                <div>
                    <img src="/img/matrix.png" alt="matrix" />
                </div>
                <div>
                    <img src="/img/metal.png" alt="metal" />
                </div>
            </Par3>
        </Page>
    );
};

export default ProductDetails;
