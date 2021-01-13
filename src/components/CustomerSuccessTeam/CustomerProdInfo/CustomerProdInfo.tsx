/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import lineIcon from '../Icons/Line.svg';
import boxImg from '../Images/Box-img.svg';
import viewDots from '../Icons/view-dots.svg';
import { NotifyUser, UserId } from '../User/User';
import { Dot, ProdInfo, ViewProdBtn } from './CustomerProdInfoStyled';
import { ViewProduct } from '../CustomerViewProduct/ViewProduct';

export const MainWrapper = () => {
    // 1. view product details by clicking view-product button
    const displayViewProduct = () => {
        setViewProducts(<ViewProduct />);
        setProdInfo(' ');
    };

    const [viewProducts, setViewProducts] = useState(' ');
    const [prodInfo, setProdInfo] = useState(
        <>
            <ProdInfo>
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
                        <div>
                            <Dot>
                                <img src={viewDots} alt="" />
                            </Dot>
                            <ViewProdBtn onClick={displayViewProduct}>
                                <li>View Product</li>
                            </ViewProdBtn>
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
                        <div>
                            <Dot>
                                <img src={viewDots} alt="" />
                            </Dot>
                            <ViewProdBtn onClick={displayViewProduct}>
                                <li>View Product</li>
                            </ViewProdBtn>
                        </div>
                    </div>
                </div>
            </ProdInfo>
            <div className="pagination">
                <button type="button" className="page current">
                    1
                </button>
                <button type="button" className="page">
                    2
                </button>
                <button type="button" className="page">
                    3
                </button>
                <button type="button" className="next">
                    <img src={lineIcon} alt="" />
                </button>
            </div>
        </>,
    );

    return (
        <>
            <UserId />
            <NotifyUser />
            {prodInfo}
            {viewProducts}
        </>
    );
};
