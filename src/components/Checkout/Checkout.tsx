import React, { useEffect, useState } from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { CheckoutContainer } from '@/components/Checkout/Checkout.styled';
import { Row, Col,  notification } from 'antd';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import CheckoutCarts from '@/components/Checkout/CheckoutCarts';
import OrderPaymentSummary from '@/components/Checkout/OrderPaymentSummary';
import { Home, PaymentOutlined } from '@material-ui/icons';
import { CarFilled } from '@ant-design/icons';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { UserAddress } from '@/components/Checkout/fakeData';
import UserPayment from '../FlutterPayment/UserPayment';

export default function Checkout() {
    // const [applying, setApplying] = useState(false);
    const [userCart, setUserCart] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);

    const token = getFromLocalStorage('usertoken');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const {
        // register,
        // reset,
        // handleSubmit,
        // formState: { errors },
    } = useForm();

    // const ApplyNewCoupon = (data) => {
    //     setApplying(true);
    //     console.log(data, 'coupon');
    //     setTimeout(() => {
    //         setApplying(false);
    //         reset();
    //     }, 1000);
    // };

    useEffect(() => {
        const getUserCart = async () => {
            if (!token) {
                return;
            }
            try {
                const { data } = await axios.get(`${APP_BASE}/cart/myCart`, config);
                const usersCart = data.cart;
                if (usersCart.length === 1) {
                    usersCart.map((total) => setcartTotal(total.totalPrice));
                } else {
                    setcartTotal(data?.total);
                    console.log(cartTotal);
                    setUserCart(usersCart);
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

    return (
        <UserWebLayout webtitle="Checkout">
            <CheckoutContainer>
                <h3>Checkout</h3>
                <div className="checkoutPage">
                    <Row gutter={28}>
                        <Col xs={24} xl={16} lg={16}>
                            <div className="checkout__card">
                                <h4 className="sumaryheader">
                                    <Home /> Address
                                </h4>
                                <div className="detailsInner">
                                    <div className="delAddress">
                                        <Row gutter={40}>
                                            {UserAddress?.map((addr) => {
                                                return (
                                                    <Col key={addr.id} xs={24} xl={9} lg={9}>
                                                        <label htmlFor={`address` + addr?.id} className="addressInput">
                                                            <input
                                                                type="radio"
                                                                name="delivery_address"
                                                                id={`address` + addr?.id}
                                                                value={addr?.id}
                                                                // checked={addr?.selected}
                                                            />
                                                            <div className="select">
                                                                <div className="selected">
                                                                    {addr.selected ? 'selected' : ''}
                                                                </div>
                                                                <h3>{addr?.name}</h3>
                                                                <p>
                                                                    {addr?.address}, {addr?.city}. {addr?.state}
                                                                </p>
                                                                <p>{addr?.phoneNumber}</p>
                                                            </div>
                                                        </label>
                                                    </Col>
                                                );
                                            })}
                                            {/* <Col xs={24} xl={5} lg={5}>
                                                <div className="addNewAddress">
                                                    <PlusCircleFilled />
                                                    <small>Add New</small>
                                                </div>
                                            </Col> */}
                                        </Row>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout__card">
                                <h4 className="sumaryheader">
                                    <CarFilled /> Delivery Details
                                </h4>
                                <div className="detailsInner">Home Delivery or</div>
                            </div>
                            <div className="checkout__card">
                                <h4 className="sumaryheader">
                                    <PaymentOutlined /> Order Summary & Payment
                                </h4>
                                <div className="detailsInner">
                                    <div className="cartops">
                                        {/* <span>Do you have a coupon code?</span> */}
                                        {/* <form autoComplete="off" autoCorrect="off" autoCapitalize="off">
                                            <Row>
                                                <Col xs={17} xl={17} lg={17}>
                                                    <Input
                                                        {...register('coupon', { required: true })}
                                                        placeholder="Enter Coupon"
                                                    />
                                                </Col>
                                                <Col xs={7} xl={7} lg={7}>
                                                    <Button
                                                        loading={applying}
                                                        onClick={handleSubmit(ApplyNewCoupon)}
                                                        block
                                                        type="primary"
                                                    >
                                                        {applying ? 'Validating...' : 'Apply'}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </form> */}
                                        {/* {errors.coupon && <small className="error">Please, Enter a valid coupon</small>} */}
                                    </div>
                                    <OrderPaymentSummary total={cartTotal} shipping="500" discount="0" />
                                </div>
                                {/* <Button type="primary" block size="large">
                                    CONFIRM ORDER
                                </Button> */}
                                <div>
                                    <UserPayment cartTotal={cartTotal} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} xl={8} lg={8}>
                            <div className="checkout__card no-pad">
                                <div className="carthead">
                                    <h4>Your Orders ({userCart.length} Items)</h4>
                                    <Link href="/cart">Modify Cart?</Link>
                                </div>
                                <div style={{ padding: '15px' }}>
                                    <div className="cartitems">
                                        {userCart &&
                                            userCart?.map((cart) => {
                                                return (
                                                    <CheckoutCarts
                                                        key={cart?.id}
                                                        image={cart?.product.images}
                                                        qty={cart?.quantity}
                                                        productName={cart?.product.name}
                                                        price={cart?.product.price * cart?.quantity}
                                                    />
                                                );
                                            })}
                                    </div>
                                    <OrderPaymentSummary total={cartTotal} shipping="500" discount="0" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </CheckoutContainer>
        </UserWebLayout>
    );
}
