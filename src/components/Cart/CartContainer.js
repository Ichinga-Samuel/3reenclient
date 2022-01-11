import React, { useState } from 'react';
import Link from 'next/link';
import { CartContainerStyled } from './CartContainer.styled';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import {
    MinusCircleFilled,
    MinusCircleOutlined,
    MinusCircleTwoTone,
    PlusCircleFilled,
    PlusCircleOutlined,
    PlusCircleTwoTone,
} from '@ant-design/icons';
import { Delete } from '@material-ui/icons';
import { notification, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { getFromLocalStorage } from '@/utils/browserStorage';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';

export default function CartContainer({ usersCart, id, addToCart, removeFromCart, delFromCart }) {
    const totalPrice = usersCart ? usersCart.reduce((a, b) => a + b.product.price * b.quantity, 0) : 0;
    
    console.log(id)
    const [qty, setQty] = useState(0);
    const token = getFromLocalStorage('usertoken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    // const usesrCartt = usersCart.map((product) => {
    //     console.log(product.quantity);
    // });
    const onAdd = async (product) => {
        const body = JSON.stringify({
            quantity: product.quantity,
        });
        product.quantity++;
        try {
            window.location.reload();
            const updateQty = await axios.patch(
                `${APP_BASE}/cart/update/?id=${product.productId}&quantity=${product.quantity}`,
                body,
                config,
            );
            console.log(body);
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Error',
                description: 'Something went very wrong Try Refreshing',
            });
        }
    };
    const onMinus = async (product) => {
        const body = JSON.stringify({
            quantity: product.quantity,
        });
        product.quantity--;
        try {
            window.location.reload();
            const updateQty = await axios.patch(
                `${APP_BASE}/cart/update/?id=${product.productId}&quantity=${product.quantity}`,
                body,
                config,
            );
            console.log(body);
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'Something went very wrong Try Refreshing',
            });
            console.log(error);
        }
    };
    return (
        <CartContainerStyled>
            <div className="product-cart">
                <h2 className="desktopHeading">Your Shopping Cart</h2>
                <h4 className="mobileHeading">Trolley</h4>
                <div className="wrapper">
                    <div className="cart-collection">
                        <div className="cart-header">
                            <p>Item</p>
                            <p>Qty</p>
                            <p>Unit Price</p>
                            <p>Sub Total</p>
                            <p>Remove</p>
                        </div>
                        {usersCart?.map((product) => (
                            <div className="cart-item" key={product.productId}>
                                <form action="" onSubmit={(e) => e.preventDefault()}>
                                    <div className="cart-productSystemm">
                                        <div className="cart-image">
                                            <img src={product.product.images} alt="crt" />
                                        </div>
                                        <div className="cart-product-info">
                                            <p className="cart-product-name">{product.product.name}</p>

                                            <div className="actionDelete"></div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="cart-increment">
                                            <button className='plus' onClick={() => onAdd(product)}>
                                                <PlusCircleOutlined style={{color:'#ffaf38'}} color='#ffaf38' />
                                            </button>
                                            {product.quantity}
                                            <button onClick={() => onMinus(product)}>
                                                <MinusCircleOutlined style={{color:'#ffaf38'}} color='#ffaf38' />
                                            </button>
                                        </div>
                                    </div>
                                    {console.log(product.productId)}
                                    <div className="cart-unit-price">
                                        <h4>
                                            {CURRENCY}
                                            {formatAmount(product.product.price)}
                                            {/* <p>{product.product.description}</p>
                                             <p>{product.product.specification}</p>
                                        <p>{product.product.keyFeatures}</p> */}
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
                                        <Delete className="deletebutton" />
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
                                <img src={product.product.images} className="sm-cartImage" alt="product" />
                                <div>
                                    <h5 className="productname">{product.product.name}</h5>
                                    {/* <p>{product.product.description}</p> */}
                                    <p>Product description</p>
                                </div>
                            </div>
                            <div className="cartSelect">
                                <h3>Quantity</h3>
                                <div className="cart-increment">
                                    <button  onClick={() => onAdd(product)}>
                                        <PlusCircleOutlined />
                                    </button>
                                    {product.quantity}
                                    <button onClick={() => onMinus(product)}>
                                        <MinusCircleOutlined />
                                    </button>
                                </div>
                            </div>
                            <div className="amount">
                                <h3>Price</h3>
                                <h4 className="normalPrice">{product.product.price}</h4>
                            </div>
                            <div className="sectionTwo">
                                <h3>Delete</h3>
                                <div
                                    className="deleteIcon"
                                    onClick={() => delFromCart(product)}
                                    onKeyDown={() => delFromCart(product)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <Delete className="deletebutton" />
                                </div>
                            </div>
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
