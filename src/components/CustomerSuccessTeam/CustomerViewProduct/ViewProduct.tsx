/* eslint-disable prettier/prettier */
import React from 'react';
import { UserId, NotifyUser } from '../User/User';
import { CustomerViewProduct, ItemName, ItemPrice, ItemDetails } from '../CustomerViewProduct/ViewProductStyled';
import { ExitButton } from '../Button/CustomerButtonStyled';
import { PrimaryBox } from '../Box/CustomerBoxStyled';
import exitViewProduct from '../Icons/exit-view-product.svg';
import boxImg from '../Images/Box-img.svg';
import { MainWrapper } from '../CustomerProdInfo/CustomerProdInfo';

export const ViewProduct = () => {
    return (
        <>
            <UserId />
            <NotifyUser />
            <CustomerViewProduct>
                <ExitButton onClick={() => <MainWrapper />}>
                    <img src={exitViewProduct} alt="" />
                </ExitButton>
                <div className="view-product_content">
                    <div className="column">
                        <PrimaryBox>
                            <img src={boxImg} alt="" />
                        </PrimaryBox>
                        <div className="view-product_columnB">
                            <div className="product-tags">
                                <ItemName>Fashion Bags</ItemName>
                                <ItemPrice>$150.00</ItemPrice>
                                <ItemDetails>#26289</ItemDetails>
                                <ItemDetails>Female Accessories</ItemDetails>
                                <ItemDetails>Abuja</ItemDetails>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="view-product_columnA">
                            <div className="view-product_description">
                                <h3 className="primary-color">Description</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc sem quisque
                                    libero eget cursus. Est in eget vitae congue fermentum eget tortor. Imperdiet quis
                                    turpis vel commodo tincidunt. Elit turpis quis amet morbi sed tristique non tellus
                                    nunc. Pharetra a lectus gravida elementum risus quam quam sodales. ed tristique non
                                    tellus nunc. Pharetra a lectus gravida elementum risus quam quam sodales. turpis vel
                                    commodo tincidunt. Elit turpis quis amet morbi sed tristique non tellus nunc.
                                    Pharetra a lectus gravida elementum risus quam quam sodales. ed tristique non tellus
                                    nunc. Pharetra a lectus gravida elementum risus quam quam sodales.
                                </p>
                            </div>
                        </div>
                        <div className="view-product_columnB">
                            <div className="view-product_description">
                                <h3 className="primary-color">Key Features</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc sem quisque
                                    libero eget cursus. Est in eget vitae congue fermentum eget tortor.
                                </p>

                                <h3 className="primary-color mgtop20">Specifications</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc sem quisque
                                    libero eget cursus. Est in eget vitae congue fermentum eget tortor. turpis vel
                                    commodo tincidunt. Elit turpis quis amet morbi sed tristique non tellus nunc.
                                    Pharetra a lectus gravida elementum risus quam quam sodales. ed tristique non tellus
                                    nunc. Pharetra a lectus gravida elementum risus quam quam sodales.
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
            </CustomerViewProduct>
        </>
    );
};
