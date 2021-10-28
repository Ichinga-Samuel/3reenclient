import React from 'react';
import Link from 'next/link';
import { CartContainerStyled } from './CartContainer.styled';
import { CURRENCY, formatAmount } from '@/utils/helpers';

export default function CartContainer({ usersCart, addToCart, removeFromCart, delFromCart }) {
    const totalPrice = usersCart ? usersCart.reduce((a, b) => a + b.product.price * b.quantity, 0) : 0;
    return (
        <CartContainerStyled>
            <div className="product-cart">
                <h2 className="desktopHeading">Your Shopping Cart</h2>
                <h4 className="mobileHeading">Trolley</h4>
                <div className="wrapper">
                    <div className="cart-collection">
                        <div className="cart-header">
                            <p>Item</p>
                            <p>Quantity</p>
                            <p>Unit Price</p>
                            <p>Sub Total</p>
                            <p>Remove</p>
                        </div>
                        {usersCart?.map((product) => (
                            <div className="cart-item" key={product.productId}>
                                <form action="">
                                    <div className="cart-productSystemm">
                                        <div className="cart-image">
                                            <img src={product.product.images} alt="crt" />
                                        </div>
                                        <div className="cart-product-info">
                                            <p className="cart-product-name">{product.product.name}</p>

                                            <div className="actionDelete"></div>
                                        </div>
                                    </div>

                                    <div className="cart-quantity-md">
                                        <div className="cart-quantity-controls">
                                            <button onClick={(e) => removeFromCart(product, e)}>-</button>
                                            <input type="number" value={product.quantity} readOnly />
                                            <button onClick={(e) => addToCart(product, e)}>+</button>
                                        </div>
                                    </div>

                                    <div className="cart-unit-price">
                                        <h4>
                                            {CURRENCY}
                                            {formatAmount(product.product.price)}
                                        </h4>
                                    </div>

                                    <div className="cart-product-total">
                                        <h4>
                                            {CURRENCY}
                                            {formatAmount(product.product.price * product.quantity)}
                                        </h4>
                                    </div>
                                    <div
                                        className="deleteIcon"
                                        onClick={() => delFromCart(product)}
                                        onKeyDown={() => delFromCart(product)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <img src="icons/delete.png" className="deletebuttons" alt="cart" />
                                    </div>
                                </form>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cart-total-holder">
                    {usersCart.length && (
                        <div className="actionPrice">
                            <div className="cart-total">
                                <p>Shipping Fee:</p>
                                <p>
                                    {CURRENCY}
                                    {formatAmount(0)}
                                </p>
                            </div>

                            <div className="cart-total">
                                <p>Total:</p>
                                <p>
                                    {CURRENCY}
                                    {formatAmount(totalPrice)}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="cart-action-button">
                        <Link href="/">
                            <a className="btn-main">Continue Shopping</a>
                        </Link>
                        <Link href={`/checkout?${totalPrice}`}>
                            <a className="btn-main fill">Checkout</a>
                        </Link>
                    </div>
                </div>
            </div>

            {/***********************Cart Mobile Display ************************/}
            <div className="cartMobile">
                {usersCart?.map((product) => (
                    <div key={product.productId}>
                        <div className="cartMobileWrapper">
                            <div className="mobileImage">
                                <h5 className="productname">{product.product.name}</h5>
                                <img src={product.product.images} className="sm-cartImage" alt="product" />
                            </div>
                            <div className="cartSelect">
                                <h5>Quantity</h5>
                                <div className="cartSelectInfo">
                                    <button onClick={() => removeFromCart(product)}>-</button>
                                    <button onClick={() => addToCart(product)}>+</button>
                                </div>
                            </div>
                            <div className="amount">
                                <h4>Price</h4>
                                <h4 className="normalPrice">{product.product.price}</h4>
                            </div>
                            <div className="sectionTwo">
                                <h5>Delete</h5>
                                <div
                                        className="deleteIcon"
                                        onClick={() => delFromCart(product)}
                                        onKeyDown={() => delFromCart(product)}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <img src="icons/delete.png" className="deletebuttons" alt="cart" />
                                    </div>
                            </div>

                            {/* <div className="cartmobileDetail">
                                <div className="detail">
                                    <div className="sectionOne">
                                         <div className="sectionOneDetails">
                                            <h5 className="productname">{product.product.name}</h5>
                                        </div> *
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
                                        <h4>Price</h4>
                                        <h4 className="normalPrice">{product.product.price}</h4>
                                    </div>

                                     <div className="cartSelect">
                                        <button onClick={() => removeFromCart(product)}>-</button>
                                        <input type="number" value={product.count} readOnly />
                                        <input type="number" value="2" readOnly />
                                        <button onClick={() => addToCart(product)}>+</button>
                                    </div> 
                                </div>
                            </div> */}
                        </div>
                    </div>
                ))}

                {usersCart?.length && (
                    <div>
                        <div className="Total">
                            <h4>Total</h4>
                            <h4 className="">N{totalPrice}</h4>
                        </div>

                        <div className="Button">
                            <Link href="/checkout">
                                <input type="button" value="Checkout" className="checkout" />
                            </Link>

                            <Link href="/">
                                <input type="button" value="Continue Shopping" className="continueShopping" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </CartContainerStyled>
    );
}
