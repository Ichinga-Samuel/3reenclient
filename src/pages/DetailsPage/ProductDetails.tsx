import React from 'react';
import Header from '@/components/Header/Header';

const ProductDetails = () => {
    return (
        <div>
            <Header />

            <div className="left">
                <img src="/img/phone.png" alt="phone" />
                <img src="/img/slider-btns.png" alt="sliders" />
            </div>
            <div className="right">
                <p>
                    UMIDIGI A7 Pro 6.3-Inch (4GB
                    <br /> RAM,64GB ROM) Android
                    <br /> 10.0,(16MP+16MP+5MP+5MP)+16MP
                    <br /> Dual 4G LTE+SD Smartphone -Cosmic
                    <br /> Black
                </p>
                <p>
                    Brand: <span>UMIDIGI | Similar products from UMIDIGI</span>
                </p>
                <span>N 39,990</span>
                <br />
                <span>
                    <a href="https://google.com">
                        <img src="/img/cart.png" alt="cart" />
                    </a>
                </span>
                <button type="submit">Add to cart</button>
            </div>

            <div className="par-2 left">
                <h3>
                    Products
                    <br /> Details
                </h3>
                <p>
                    OS:Stock Android 10.0
                    <br /> SIM Card: Dual Nano
                    <br /> SIM Display: 6.3 &quot;FHD+ 19.5:9 Waterdrop Display
                    <br />
                    RAM:4GB LPDDR4X
                    <br /> Front camera: 16MP
                    <br /> ROM:64GB
                    <br /> Rear camera: 16MP+16MP+5MP+5MP
                    <br /> Battery: 4150 mAh
                    <br /> CPU:MediaTek, Helio P23, 4xCortex-A53, 2.0GHz &amp; 4xCortex-A53,
                    <br /> 1.5GHz
                    <br />
                    Other features:Quad Rear Camera, Global Version, Type-C, Dual 4G Network, 2+1 Cart Slots, Octa-Core
                    Processor
                    <br />
                    Network: 4G,3G, WCDMA,TD-SCDMA, 2G GSM.
                </p>
                <span className="right">
                    <img src="/img/phone.png" alt="umgidi" />
                </span>
            </div>

            <div className="par-3 left">
                <div className="left">
                    <img src="/img/matrix.png" alt="matrix" />
                </div>
                <div className="right">
                    <img src="/img/metal.png" alt="metal" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
