import React from 'react';
import { CheckoutContainerStyled } from './CheckoutContainer.styled';
import CheckoutFooter from './CheckoutFooter';
import data from './data';

export default function CheckoutContainer() {
    return (
        <CheckoutContainerStyled>
            <div className="container">
                <h2>Checkout</h2>
                <div className="checkoutWrapper">
                    <div className="checkoutForm">
                        <div className="input-name">
                            <input type="text" placeholder="* First Name" className="name" required />

                            <input type="text" placeholder="* Last Name" className="name last" />
                        </div>

                        <div className="input-name">
                            <input type="email" placeholder="Email Address" className="name" />
                        </div>

                        <div className="input-name">
                            <label htmlFor="lock" className="lock">
                                +234
                            </label>
                            <input type="text" placeholder="7012345678" className="text-name p" />
                        </div>

                        <div className="input-name">
                            <textarea
                                type="text"
                                placeholder="Address    | Street name apartment, suite, floor"
                                className="textarea"
                            />
                        </div>

                        <div className="input-name">
                            <select className="state">
                                <option>State / Region</option>
                                <option>Kogi</option>
                            </select>
                        </div>

                        <div className="input-name">
                            <select className="city">
                                <option>City</option>
                                <option>Abuja</option>
                                <option>Lagos</option>
                                <option>Ibadan</option>
                            </select>
                        </div>

                        <div className="arrow"></div>

                        <div className="input-name">
                            <input type="checkbox" id="cb1" className="chack-button" />
                            <label htmlFor="cb1" className="chack">
                                I agree I am over 18 years old
                            </label>
                        </div>

                        <div className="input-name">
                            <input type="checkbox" id="cb2" className="chack-button" />
                            <label htmlFor="cb2" className="chack">
                                Save the Address
                            </label>
                        </div>

                        <div className="submitButton">
                            <input type="submit" className="continueShipping" value="Continue Shipping" />
                            <input type="submit" className="continuePayment" value="Continue to Payment" />
                        </div>
                    </div>
                    <div className="checkoutProduct">
                        <div className="Products">
                            {data.products.map((product) => (
                                <div key={product.id} className="product">
                                    <div className="productDetail">
                                        <img src={product.image} className="productImage" alt="product" />
                                        <h4>{product.name}</h4>
                                    </div>

                                    <div className="price">&#8358; {product.price}</div>
                                </div>
                            ))}
                        </div>

                        <div className="shipping">
                            <div className="shippingFee">
                                <h4>Shipping Fee</h4>
                                <p> &#8358; 20.00</p>
                            </div>

                            <div className="shippingFee">
                                <h4>Sub Total:</h4>
                                <p> &#8358; 320.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CheckoutFooter />
        </CheckoutContainerStyled>
    );
}
