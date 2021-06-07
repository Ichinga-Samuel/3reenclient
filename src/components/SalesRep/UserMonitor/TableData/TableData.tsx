import React from 'react';

import { TableDataStyled } from './TableData.styled';

const UserMonitor = ({ allUsers }) => {
    return (
        <TableDataStyled>
            <div className="container mt-5">
                <div className="order-product_content">
                    <table className="bottomBorder">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Email address</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>State</th>

                                <th>LGA</th>
                                <th>Phone No.</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                allUsers.map(user => (
                                    <tr key={user._id}>
                                    <td>19/20/2020</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        123 Lafemi Street, beside <br /> Mobil Oil
                                    </td>
                                    <td>Lagos</td>
                                    <td>Ikeja</td>
                                    <td>+234802345678</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td>19/20/2020</td>
                                <td>3reen@gmail.com</td>
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
                                <td>3reen@gmail.com</td>
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
                                <td>3reen@gmail.com</td>
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
                                <td>3reen@gmail.com</td>
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
                                <td>3reen@gmail.com</td>
                                <td>John Joe</td>
                                <td>
                                    123 Lafemi Street, beside <br /> Mobil Oil
                                </td>
                                <td>Lagos</td>
                                <td>Ikeja</td>
                                <td>+234802345678</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <div className="pagination">
                <button className="page current">1</button>
                <button className="page">2</button>
                <button className="page">3</button>
                <button className="next">{/* <img src={lineIcon} alt="" /> */}</button>
            </div>
        </TableDataStyled>
    );
};

export default UserMonitor;
