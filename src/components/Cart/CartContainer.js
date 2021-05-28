import React from 'react';
import { CartContainerStyled } from './CartContainer.styled';

export default function CartContainer() {
    return (
        <CartContainerStyled>
            <div className="product-cart">
                <h4 className="desktopHeading">Your Shopping Cart</h4>
                <h4 className="mobileHeading">Trolley</h4>
                <div className="wrapper">
                    <div className="cart-collection">
                        <div className="cart-header">
                            <p>Item</p>
                            <p>Quantity</p>
                            <p>Unit Price</p>
                            <p>Sub Total</p>
                        </div>
                        <div className="cart-item">
                            <form action="">
                                <div className="cart-productSystem">
                                    <div className="cart-image">
                                        <img src="img/phone.png" alt="crt" />
                                    </div>
                                    <div className="cart-product-info">
                                        <p className="cart-product-name">Product Name</p>

                                        <div className="actionDelete">
                                            <div className="deleteIcon">
                                                <img src="icons/delete.png" className="deletebutton" alt="cart" />{' '}
                                            </div>
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-quantity-md">
                                    <div className="cart-quantity-controls">
                                        <button>-</button>
                                        <input type="number" value="1" readOnly />
                                        <button>+</button>
                                    </div>
                                </div>

                                <div className="cart-unit-price">
                                    <h4>$1,250</h4>
                                </div>

                                <div className="cart-product-total">
                                    <h4>$1,250</h4>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="cart-total-holder">
                    <div className="actionPrice">
                        <div className="cart-total">
                            <p>Shipping Fee:</p>
                            <p>$1,200</p>
                        </div>

                        <div className="cart-total">
                            <p>Sub Total:</p>
                            <p>$1,200</p>
                        </div>
                    </div>
                    <div className="cart-action-button">
                        <a href="#" className="btn-main">
                            Continue Shopping
                        </a>
                        <a href="#" className="btn-main fill">
                            Checkout
                        </a>
                    </div>
                </div>
            </div>

            {/***********************Cart Mobile Display ************************/}
            <div className="cartMobile">
                <div className="cartMobileWrapper">
                    <div className="mobileImage">
                        <img src="img/headset.png" className="sm-cartImage" alt="product" />
                    </div>

                    <div className="cartmobileDetail">
                        <div className="detail">
                            <div className="sectionOne">
                                <div className="sectionOneDetails">
                                    <h5 className="productname">Beats Solo 2 Ear Headphones - Black</h5>
                                </div>
                                <div className="sectionOneCat">
                                    <p className="cat">Vendor</p>
                                    <p className="reducedPrice">N700</p>
                                </div>
                            </div>
                            <div className="sectionTwo">
                                <img src="img/MobileDelete.png" alt="ing" />
                            </div>
                        </div>

                        <div className="downPart">
                            <div className="amount">
                                <h4 className="normalPrice">N700</h4>
                            </div>

                            <div className="cartSelect">
                                <button>-</button>
                                <input type="number" value="1" readOnly />
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Total">
                    <h4>Total</h4>
                    <h4 className="">N22,500</h4>
                </div>

                <div className="Button">
                    <input type="button" value="Checkout" className="checkout" />

                    <input type="button" value="Continue Shopping" className="continueShopping" />
                </div>
            </div>
        </CartContainerStyled>
    );
}
