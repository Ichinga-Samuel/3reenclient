/* eslint-disable prettier/prettier */
import React from 'react';
import { NotifyUser, UserId } from './User/User';
import LinkTo from '@storybook/addon-links/react';
import { Delivery } from './styles//DeliveryDetailsStyled';
import lineIcon from './Icons/Line.svg';
import lineIcons from './Icons/Line-1.svg';
import star from './Icons/Star 1.svg';
import star1 from './Icons/Star 2.svg';
import group1 from './Icons/Group-5.svg';
import group2 from './Icons/Group-4.svg';
import group3 from './Icons/Group-3.svg';
import group4 from './Icons/Group-2.svg';
import group5 from './Icons/Group-1.svg';
import boxImg from './Images/Box-img.svg';
import { Customerordersidebar } from './index.stories';
import { ProductDetailsContent } from './styles/ProductDetailsStyled';

export default {
    title: 'CustomerSuccessTeam',
};

export const Deliverydetails = () => {
    return (
        <>
            <UserId />
            <NotifyUser />
            <Delivery>
                <div className="order-info-content">Order Notification</div>
                <div className="col mgbtn20">
                    <div className="delivery-details current-button">
                        <button>Delivery Details</button>
                    </div>
                    <div className="customer-review">
                        <LinkTo story="Productdetails">
                            <button>Customer Reviews</button>
                        </LinkTo>
                    </div>
                </div>
                <div className="order-product_content">
                    <table className="bottomBorder">
                        <tr>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>LGA</th>
                            <th>Phone No.</th>
                        </tr>
                        <tr>
                            <td>19/20/2020</td>
                            <td>Macbook Air</td>
                            <td>1</td>
                            <td>John Joe</td>
                            <td>
                                123 Lafemi Street, beside <br /> Mobil Oil
                            </td>
                            <td>Lagos</td>
                            <td>Ikeja</td>
                            <td>+234802345678</td>
                        </tr>
                        <tr>
                            <td>19/20/2020</td>
                            <td>Macbook Air</td>
                            <td>1</td>
                            <td>John Joe</td>
                            <td>
                                123 Lafemi Street, beside <br /> Mobil Oil
                            </td>
                            <td>Lagos</td>
                            <td>Ikeja</td>
                            <td>+234802345678</td>
                        </tr>
                        <tr>
                            <td>19/20/2020</td>
                            <td>Macbook Air</td>
                            <td>1</td>
                            <td>John Joe</td>
                            <td>
                                123 Lafemi Street, beside <br /> Mobil Oil
                            </td>
                            <td>Lagos</td>
                            <td>Ikeja</td>
                            <td>+234802345678</td>
                        </tr>
                        <tr>
                            <td>19/20/2020</td>
                            <td>Macbook Air</td>
                            <td>1</td>
                            <td>John Joe</td>
                            <td>
                                123 Lafemi Street, beside <br /> Mobil Oil
                            </td>
                            <td>Lagos</td>
                            <td>Ikeja</td>
                            <td>+234802345678</td>
                        </tr>
                        <tr>
                            <td>19/20/2020</td>
                            <td>Macbook Air</td>
                            <td>1</td>
                            <td>John Joe</td>
                            <td>
                                123 Lafemi Street, beside <br /> Mobil Oil
                            </td>
                            <td>Lagos</td>
                            <td>Ikeja</td>
                            <td>+234802345678</td>
                        </tr>
                    </table>
                    <div className="pagination">
                        <button className="page current">1</button>
                        <button className="page">2</button>
                        <button className="page">3</button>
                        <button className="next">
                            <img src={lineIcon} alt="" />
                        </button>
                    </div>
                </div>
            </Delivery>
            <Customerordersidebar />
        </>
    );
};

export const Productdetails = () => {
    return (
        <>
            <UserId />
            <NotifyUser />
            <ProductDetailsContent>
                <div className="order-info-content">Order Notification</div>
                <div className="col mgbtn20">
                    <div className="delivery-details">
                        <LinkTo story="Deliverydetails">
                            <button>Delivery Details</button>
                        </LinkTo>
                    </div>
                    <div className="customer-review current-button">
                        <button>Customer Reviews</button>
                    </div>
                </div>
                <div className="customer-review_details">
                    <div className="col">
                        <img src={boxImg} alt="" className="customer-review_img" />
                        <div className="item_name">
                            <h3>Fashion Bag</h3>
                            <p>Product Rating & Review</p>
                        </div>
                    </div>
                    <div className="mgrt-20 mgtop20">
                        <img src={lineIcons} alt="" />
                    </div>
                    <div className="product-rating">
                        <h4>Product Ratings</h4>
                        <div className="col">
                            <div className="product-rating_col-1">
                                <div className="fnsz-23 fsw-600 secondary-color">4.0/5</div>
                                <div className="star-img col mgtop-4">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star1} alt="" />
                                </div>
                                <div className="fnsz-12 mgtop5">1223 Rating</div>
                            </div>
                            <div className="review-group">
                                <div>
                                    <img src={group1} alt="" />
                                </div>
                                <div>
                                    <img src={group2} alt="" />
                                </div>
                                <div>
                                    <img src={group3} alt="" />
                                </div>
                                <div>
                                    <img src={group4} alt="" />
                                </div>
                                <div>
                                    <img src={group5} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col mgtop15">
                            <h4>Product Review</h4>
                            <div className="prod-num">50</div>
                        </div>
                        <div className="prod-column">
                            <div className="product-review-desc">
                                <div className="column">
                                    <div className="star-img-1">
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star1} alt="" />
                                    </div>
                                    <div className="review-date">2020-12-31</div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sagittis elementum
                                    turpis eleifend pharetra, arcu, tempor in.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                placeholder="text message"
                                className="review-txt"
                            />
                            <button type="submit" className="review-submit">
                                Send Reply
                            </button>
                        </div>
                        <p className="review-read_more">Read More Reviews</p>
                    </div>
                </div>
                <div className="pagination">
                    <button className="page current">1</button>
                    <button className="page">2</button>
                    <button className="page">3</button>
                    <button className="next">
                        <img src={lineIcon} alt="" />
                    </button>
                </div>
            </ProductDetailsContent>
            <Customerordersidebar />
        </>
    );
};
