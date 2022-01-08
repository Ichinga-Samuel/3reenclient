import React from 'react';
import Link from 'next/link';
import { CartContainerStyled } from './CartContainer.styled';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import { MinusCircleFilled, MinusCircleTwoTone, PlusCircleFilled, PlusCircleTwoTone } from '@ant-design/icons';
import { Delete } from '@material-ui/icons';
import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { getFromLocalStorage } from '@/utils/browserStorage';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';

export default function CartContainer({ usersCart, id, addToCart, removeFromCart, delFromCart }) {
    const totalPrice = usersCart ? usersCart.reduce((a, b) => a + b.product.price * b.quantity, 0) : 0;
    const [qyt, setQty] = useState({
        quantity: 1,
    });
    const token = getFromLocalStorage('usertoken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const onChange = async (e) => {
        setQty({ ...qty, [e.target.name]: e.target.value });
        try {
            const updateQty = await axios.patch(`${APP_BASE}/cart/${id}`, config)
            console.log(updateQty.data);
        } catch (error) {
         console.log(error)   
        }
    };
    const { quantity } = qty;
    console.log(quantity);
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

                                    <div className="cart-quantity-md">
                                        <div className="cart-quantity-controls">
                                            <Select value={quantity}  onChange={(e) => onChange(e)} style={{ width: 70 }}>
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                                <Option value="3">3</Option>
                                                <Option value="4">4</Option>
                                                <Option value="5">5</Option>
                                            </Select>
                                        </div>
                                    </div>

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
                                <div className="cartSelectInfo">
                                    <button className="plus" onClick={(e) => removeFromCart(product, e)}>
                                        <MinusCircleFilled style={{ color: '#ffaf38' }} />
                                    </button>
                                    <p>{product.quantity}</p>
                                    <button onClick={(e) => addToCart(product, e)}>
                                        <PlusCircleFilled style={{ color: '#ffaf38' }} />
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
