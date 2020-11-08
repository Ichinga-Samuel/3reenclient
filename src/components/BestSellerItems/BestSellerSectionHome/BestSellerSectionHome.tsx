import React from 'react';
import BestSellerItems from '../BestSellers';
import BestSellersNav from '../BestSellersNav';
import { BestSellerSectionHomeStyled, LoadMore } from './BestSellerSectionHome.styled';

const BestSellerSectionHome = () => {
    return (
        <BestSellerSectionHomeStyled>
            <div className="BestSeller" style={{ marginTop: '50px' }}>
                <h1 style={{ marginBottom: '20px' }}>Best Seller</h1>
                <BestSellersNav />

                <BestSellerItems />

                <LoadMore>
                    <div className="BestSellerLoadMoreBtn" style={{ marginTop: '50px' }}>
                        <button>Load More</button>
                    </div>
                </LoadMore>
            </div>
        </BestSellerSectionHomeStyled>
    );
};

export default BestSellerSectionHome;
