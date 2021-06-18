import React, { useState, useEffect } from 'react';
import CheckoutFooter from '../Checkout/CheckoutFooter';
import CheckoutHeader from '../Checkout/CheckoutHeader';
import { CartStyled } from './Cart.styled';
import CartContainer from './CartContainer';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';
import EmptyCart from './EmptyCart';
import { getFromLocalStorage } from '@/utils/browserStorage';

export default function Cart({}) {
    // if cart exists in local set state else state is empty array
    const [userCart, setUserCart] = useState([]);
    // const [userCart, setUserCart] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : usersCart);
    const [validMsg, setValidMsg] = useState('');

    const token = getFromLocalStorage('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        const getUserCart = async () => {
            try {
                const { data } = await axios.get(`${APP_BASE}/cart/myCart`, config);
                const usersCart = data.doc;
                setUserCart(usersCart);
                localStorage.setItem('cartItems', JSON.stringify(usersCart));
            } catch (err) {
                console.log(`Error: ${err}`);
                setValidMsg('No cart');
            }
        };
        getUserCart();
        // return () => {
        //     cleanup
        // }
    }, [userCart]);

    const addToCart = async (product) => {
        let inCart = false;
        //get particular product's id
        const productId = product._id;
        // duplicate of existing usercart
        const cartItems = userCart.slice();
        // loop through items and check if product to add already exist
        cartItems.forEach((item) => {
            if (item.productId === productId) {
                //increment count and update user cart endpoint
                const { data } = axios.patch(`${APP_BASE}/cart/${item.productId}`, config);
                console.log(data);
                item.count++;
                inCart = true;
            }
        });

        // if new product
        if (!inCart) {
            //add it to cart endpoint
            const { data } = await axios.post(`${APP_BASE}/cart/${productId}`, { productId }, config);
            //add to usercart duplicate array
            console.log('cart', data);
            cartItems.push({ ...product, count: 1 });
        }

        setUserCart(cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const removeFromCart = async (product) => {
        //get particular product's id
        const productId = product._id;
        // duplicate of existing usercart
        const cartItems = userCart.slice();
        // loop through items and check if product to add already exist
        cartItems.forEach((item) => {
            if (item.productId === productId) {
                //decrement item count
                item.count--;
            }
        });
    };

    const delFromCart = async (product) => {
        //get particular product's id
        const productId = product._id;
        // duplicate of existing usercart
        const cartItems = userCart.slice();
        // delete cart with filter
        const filteredCart = cartItems.filter((item) => item.productId !== productId);
        //delete particular product from db
        const res = axios.delete(`${APP_BASE}/cart/${item.productId}`, config);
        console.log(res.status);
        //delete from state and localstorage
        setUserCart(filteredCart);
        localStorage.setItem('cartItems', JSON.stringify(filteredCart));
    };

    return userCart.length ? (
        <div className="cart">
            <CartStyled>
                <CheckoutHeader />
                <CartContainer
                    usersCart={userCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    delFromCart={delFromCart}
                    validMsg={validMsg}
                />
                <CheckoutFooter />
            </CartStyled>
        </div>
    ) : (
        <EmptyCart />
    );
}
