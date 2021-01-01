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
                    {/* <img src={} alt="" /> */}
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

export const CustomerSuccessTeam = () => {
    return (
        <>
            <CustomerSuccessTeamSidebar />
            <UserId />
            {/* <MainWrapper /> */}
            {/* <ViewProduct /> */}
            <div className="cst-details_view-product">
                <div className="order-info-content">Order Notification</div>
                <div className="column">
                    <p>Delivery Details</p>
                    <p>Customer Review</p>
                </div>
                <div className="order-product_content">
                    <table>
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
                            <th>19/20/2020</th>
                            <th>Macbook Air</th>
                            <th>1</th>
                            <th>John Joe</th>
                            <th>123 Lafemi Street, beside Mobil Oil</th>
                            <th>Lagos</th>
                            <th>Ikeja</th>
                            <th>+234802345678</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};
