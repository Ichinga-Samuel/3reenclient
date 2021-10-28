import React, { useState, useEffect } from 'react';
import { CartStyled } from './Cart.styled';
import CartContainer from './CartContainer';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';
import EmptyCart from './EmptyCart';
import { getFromLocalStorage } from '@/utils/browserStorage';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { notification, Spin } from 'antd';

export default function Cart({}) {
    // if cart exists in local set state else state is empty array
    const [userCart, setUserCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = getFromLocalStorage('usertoken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const fetchUserCart = async () => {
        if (!token) {
            return;
        }
        try {
            const { data } = await axios.get(`${APP_BASE}/cart/myCart`, config);
            const usersCart = data.cart;
            setUserCart(usersCart);
            localStorage.setItem('cartItems', JSON.stringify(usersCart));
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err?.response?.data?.message,
            });
        }
    };

    useEffect(() => {
        const getUserCart = async () => {
            if (!token) {
                return;
            }
            try {
                setLoading(true)
                const { data } = await axios.get(`${APP_BASE}/cart/myCart`, config);
                const usersCart = data.cart;
                setUserCart(usersCart);
                localStorage.setItem('cartItems', JSON.stringify(usersCart));
                console.log(userCart)
                setLoading(false)
                if(userCart.length === 0){
                    setLoading(false)
                }
            } catch (err) {
                notification.error({
                    message: 'Error',
                    description: err?.response?.data?.message,
                });
            }
        };
        getUserCart();
    }, []);

    const addToCart = async (product, e) => {
        e.preventDefault();
        try {
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
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err?.response?.data?.message,
            });
        }
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
        try {
            // duplicate of existing usercart
            const cartItems = userCart.slice();
            // delete cart with filter
            const filteredCart = cartItems.filter((item) => item.productId !== productId);
            //delete particular product from db
            const res = axios.delete(`${APP_BASE}/cart/${productId}`, config);
            console.log('delete', res.status);
            notification.success({
                message: 'Error',
                description: 'Item removed from your cart',
                duration: 10,
            });
            //delete from state and localstorage
            setUserCart(filteredCart);
            localStorage.setItem('cartItems', JSON.stringify(filteredCart));
            setTimeout(() => {
                fetchUserCart();
            }, 500);
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err?.response?.data?.message,
                duration: 10,
            });
        }
    };
    return userCart.length ? (
        <UserWebLayout webtitle="Cart">
            <div className="cart">
                <CartStyled>
                    <CartContainer
                        usersCart={userCart}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        delFromCart={delFromCart}
                    />
                </CartStyled>
            </div>
        </UserWebLayout>
    ) : (
       loading ?  <div style={{display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'center', minHeight:'80vh'}}>
       <Spin />
       <h3>Fetching Cart Details...</h3>
   </div> : <EmptyCart/>
    );
}
