/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React from 'react';
import './CustomerSuccessTeam.css';
// import { action } from '@storybook/addon-actions';
import './Utils.css';
import cstLogo from './Icons/CST-logo.svg';
import clipBoard from './Icons/clipboard.svg';
import logOut from './Icons/Log out.svg';
import avatar from './Icons/Avatar.svg';
import boxImg from './Images/Box-img.svg';
import viewDots from './Icons/view-dots.svg';
import exitViewProduct from './Icons/exit-view-product.svg';
import notifyIcon from './Icons/notify.png';
import lineIcon from './Icons/Line.svg';
import lineIcons from './Icons/Line-1.svg';
import star from './Icons/Star 1.svg';
import star1 from './Icons/Star 2.svg';
import group1 from './Icons/Group-5.svg';
import group2 from './Icons/Group-4.svg';
import group3 from './Icons/Group-3.svg';
import group4 from './Icons/Group-2.svg';
import group5 from './Icons/Group-1.svg';

export default {
    title: 'img',
};

const image = {
    cstLogo: cstLogo,
};

export const CustomerSuccessTeamSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-logo">
                    <img src={image.cstLogo} alt="" />
                </div>
                <button className="btn-primary">
                    <img src={clipBoard} alt="" />
                    <span>Production Information</span>
                </button>
                <button className="btn-secondary">
                    <img src={notifyIcon} alt="" />
                    <span>Order Notification</span>
                </button>
                <button className="btn-tertiary">REGISTER CUSTOMERS</button>
                <button className="log-out">
                    <img src={logOut} alt="" />
                </button>
            </div>
        </div>
    );
};

export const UserId = () => {
    return (
        <div className="user-id">
            <img src={avatar} alt="userPhoto" />
            <div className="user-details">
                <div className="user-name">Jack Hanniel</div>
                <div className="sales-rep">Customer Success Team</div>
            </div>
        </div>
    );
};

export const MainWrapper = () => {
    return (
        <div className="cst-details">
            <div className="prod-info-content">Product Information</div>
            <div className="prod-info-box">
                <div className="column">
                    <div className="prod-items">
                        <img src={boxImg} alt="" />
                        <div>
                            <h4>Fashion Bags</h4>
                            <p>#739339</p>
                        </div>
                    </div>
                    <div className="prod-view-dots">
                        <img src={viewDots} alt="" />
                        <ul className="view-prod-btn">
                            <li>View Product</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="prod-info-box">
                <div className="column">
                    <div className="prod-items">
                        <img src={boxImg} alt="" />
                        <div>
                            <h4>Fashion Bags</h4>
                            <p>#739339</p>
                        </div>
                    </div>
                    <div className="prod-view-dots">
                        <img src={viewDots} alt="" />
                        <ul className="view-prod-btn">
                            <li>View Product</li>
                        </ul>
                    </div>
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
        </div>
    );
};

export const ViewProduct = () => {
    return (
        <div className="cst-details_view-product">
            <button className="exit-view_product">
                <img src={exitViewProduct} alt="" />
            </button>
            <div className="view-product_content">
                <div className="column">
                    <div className="view-product_columnA">
                        <img src={boxImg} alt="" />
                    </div>
                    <div className="view-product_columnB">
                        <div className="product-tags">
                            <div className="product-tag_name">Fashion Bags</div>
                            <div className="product-tag_price">$150.00</div>
                            <div className="product-tag_id">#26289</div>
                            <div className="product-tag_type">Female Accessories</div>
                            <div className="product-tag_location">Abuja</div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="view-product_columnA">
                        <div className="view-product_description">
                            <h3 className="primary-color">Description</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc sem quisque libero
                                eget cursus. Est in eget vitae congue fermentum eget tortor. Imperdiet quis turpis vel
                                commodo tincidunt. Elit turpis quis amet morbi sed tristique non tellus nunc. Pharetra a
                                lectus gravida elementum risus quam quam sodales. ed tristique non tellus nunc. Pharetra
                                a lectus gravida elementum risus quam quam sodales. turpis vel commodo tincidunt. Elit
                                turpis quis amet morbi sed tristique non tellus nunc. Pharetra a lectus gravida
                                elementum risus quam quam sodales. ed tristique non tellus nunc. Pharetra a lectus
                                gravida elementum risus quam quam sodales.
                            </p>
                        </div>
                    </div>
                    <div className="view-product_columnB">
                        <div className="view-product_description">
                            <h3 className="primary-color">Key Features</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc sem quisque libero
                                eget cursus. Est in eget vitae congue fermentum eget tortor.
                            </p>

                            <h3 className="primary-color mgtop20">Specifications</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc sem quisque libero
                                eget cursus. Est in eget vitae congue fermentum eget tortor. turpis vel commodo
                                tincidunt. Elit turpis quis amet morbi sed tristique non tellus nunc. Pharetra a lectus
                                gravida elementum risus quam quam sodales. ed tristique non tellus nunc. Pharetra a
                                lectus gravida elementum risus quam quam sodales.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="view-availability">
                    <h3 className="primary-color">Availability</h3>
                    <div className="col">
                        <p>Is this product available</p>
                        <button className="view-btn-yes">Yes</button>
                        <button className="view-btn-no">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const DeliveryDetails = () => {
    return (
        <div className="cst-details_view-product">
            <div className="order-info-content">Order Notification</div>
            <div className="col mgbtn20">
                <div className="delivery-details current-button">
                    <button>Delivery Details</button>
                </div>
                <div className="customer-review">
                    <button>Customer Reviews</button>
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
        </div>
    );
};

export const CustomerSuccessTeam = () => {
    return (
        <>
            <CustomerSuccessTeamSidebar />
            <UserId />
            {/* <MainWrapper /> */}
            {/* <ViewProduct /> */}
            {/* <DeliveryDetails /> */}
            <div className="cst-details_view-product">
                <div className="order-info-content">Order Notification</div>
                <div className="col mgbtn20">
                    <div className="delivery-details">
                        <button>Delivery Details</button>
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
                                <div className="fnsz-30 fsw-600 secondary-color">4.0/5</div>
                                <div className="star-img col mgtop-4">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star1} alt="" />
                                </div>
                                <div className="fnsz-14">1223 Rating</div>
                            </div>
                            <div className="review-group">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                                <img src={group5} alt="" />
                            </div>
                        </div>
                        <div>Product Review</div>
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
            </div>
        </>
    );
};
