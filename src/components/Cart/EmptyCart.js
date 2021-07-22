import React from 'react';
import { CartEmptyStyled } from './CartEmpty.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { Button } from 'antd';
import { useRouter } from 'next/router';

export default function EmptyCart() {
    const router = useRouter();
    const StartShop = () => {
        router.push('/products');
    };
    return (
        <>
            <UserWebLayout webtitle="Cart">
                <CartEmptyStyled>
                    <div className="emptycartWrapper">
                        <h3>Your Shopping Cart</h3>

                        <div className="circle">
                            <img src="/img/shopper.png" className="shopper" alt="shopper" />
                        </div>

                        <h5>Your cart is empty</h5>
                        <p>Goto your Market place and add an item to your cart</p>

                        <Button onClick={StartShop} type="primary">
                            Continue Shopping
                        </Button>
                    </div>
                </CartEmptyStyled>
            </UserWebLayout>
        </>
    );
}
