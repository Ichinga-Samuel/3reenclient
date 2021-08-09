import React, { useState } from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { CheckoutContainer } from '@/components/Checkout/Checkout.styled';
import { Row, Col, Input, Button } from 'antd';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import CheckoutCarts from '@/components/Checkout/CheckoutCarts';
import OrderPaymentSummary from '@/components/Checkout/OrderPaymentSummary';
import { Home, PaymentOutlined } from '@material-ui/icons';
import { CarFilled, PlusCircleFilled } from '@ant-design/icons';

export default function Checkout() {
    const [applying, setApplying] = useState(false);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const ApplyNewCoupon = (data) => {
        setApplying(true);
        console.log(data, 'coupon');
        setTimeout(() => {
            setApplying(false);
            reset();
        }, 1000);
    };

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
                                            <Col xs={24} xl={9} lg={9}>
                                                <label htmlFor="address1" className="addressInput">
                                                    <input type="radio" name="delivery_address" id="address1" />
                                                    <div>
                                                        <div className="selected">selected</div>
                                                        <h3>Falua Temitope</h3>
                                                        <p>No 3, Ijare Street, Port Harcourt. River State</p>
                                                        <p>07075978490</p>
                                                    </div>
                                                </label>
                                            </Col>
                                            <Col xs={24} xl={9} lg={9}>
                                                <label htmlFor="address2" className="addressInput">
                                                    <input type="radio" name="delivery_address" id="address2" />
                                                    <div>
                                                        <div className="selected">selected</div>
                                                        <h3>Falua Oyewole</h3>
                                                        <p>No 3, Ijare Street, Moduloore Road, Akure. Ondo State</p>
                                                        <p>07045974849</p>
                                                    </div>
                                                </label>
                                            </Col>
                                            <Col xs={24} xl={5} lg={5}>
                                                <div className="addNewAddress">
                                                    <PlusCircleFilled />
                                                    <small>Add New</small>
                                                </div>
                                            </Col>
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
                                        <span>Do you have a coupon code?</span>
                                        <form autoComplete="off" autoCorrect="off" autoCapitalize="off">
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
                                        </form>
                                        {errors.coupon && <small className="error">Please, Enter a valid coupon</small>}
                                    </div>
                                    <OrderPaymentSummary />
                                </div>
                                <Button type="primary" block size="large">
                                    CONFIRM ORDER
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} xl={8} lg={8}>
                            <div className="checkout__card no-pad">
                                <div className="carthead">
                                    <h4>Your Orders (3 Items)</h4>
                                    <Link href="/cart">Modify Cart?</Link>
                                </div>
                                <div style={{ padding: '15px' }}>
                                    <div className="cartitems">
                                        <CheckoutCarts
                                            qty="3"
                                            productName="White Small Sneakers for women"
                                            price="10000"
                                        />
                                        <CheckoutCarts qty="1" productName="Las Vegas Cloth" price="14000" />
                                    </div>
                                    <OrderPaymentSummary />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </CheckoutContainer>
        </UserWebLayout>
    );
}
