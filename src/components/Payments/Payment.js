import React from 'react';
import data from '../Checkout/data';
import { PaymentStyled } from './Payment.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';

export default function Payment() {
    return (
        <>
            <UserWebLayout webtitle="Payment">
                <PaymentStyled>
                    <div className="container">
                        <h2 className="heading">Payment Options</h2>
                        <div className="paymentContainer">
                            <div className="paymentWrapper">
                                <h4>Payment</h4>
                                <p>All transactions are secured</p>
                                <div className="paymentBox">
                                    <div className="paymentHeader">
                                        <div className="circleBorder" /> <h3>Pay with Card</h3>
                                    </div>
                                    <div className="paymentContainerArea">
                                        <div className="icons">
                                            <img src="img/master.png" alt="master" />
                                            <img src="img/paypal.png" alt="master" />
                                            <img src="img/visa.png" alt="master" />
                                            <img src="img/paystack.png" className="paystack" alt="master" />
                                        </div>

                                        <p>Choose Your Bank</p>

                                        <select className="gray">
                                            <option>Bank Name</option>
                                            <option>UBA</option>
                                            <option>First bank</option>
                                            <option>Access Bank</option>
                                        </select>
                                    </div>
                                    <div className="paymentFooter">
                                        <input type="radio" className="grayR" /> <h3>Payment on Delivery</h3>
                                    </div>
                                </div>

                                <div className="actionArea">
                                    <div className="actionBack">
                                        <a href="/">
                                            <img src="img/leftArrow.png" alt="arrow" />{' '}
                                        </a>
                                        <span className="back">Go back</span>
                                    </div>
                                    <div className="payNow">
                                        <button> Pay Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="productContainer">
                                {data.products.map((product) => (
                                    <div key={product._id} className="productWrapper">
                                        <div className="productDescription">
                                            <img src={product.image} alt="phone" />
                                            <div className="productTitle">{product.name}</div>
                                        </div>
                                        <div className="amount">
                                            <h3>&#8358;{product.price}</h3>
                                        </div>
                                    </div>
                                ))}

                                <div className="productPrice">
                                    <div className="Fee">
                                        <h3>Shipping: </h3>
                                        <h3>&#8358; 1,280</h3>
                                    </div>

                                    <div className="Fee">
                                        <h3>Sub Total Fee:</h3>
                                        <h3>&#8358; 1,280</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PaymentStyled>
            </UserWebLayout>
        </>
    );
}
