/* eslint-disable prettier/prettier */
import React from 'react';
import { NotifyUser, UserId } from '../User/User';
import { Delivery } from './DeliveryDetailsStyled';

export const DeliveryDetails = () => {
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
                    {/* <div className="paginate">
                    <button className="page current">1</button>
                    <button className="page">2</button>
                    <button className="page">3</button>
                    <button className="next">
                        <img src={lineIcon} alt="" />
                    </button>
                </div> */}
                </div>
            </Delivery>
        </>
    );
};
