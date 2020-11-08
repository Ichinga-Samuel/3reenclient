import React from 'react';
import Link from 'next/link';
import { BestSellerNavStyled } from './BestSellersNav.styled';

const BestSellersNav = () => {
    return (
        <BestSellerNavStyled>
            <ul className="BestSellerNav">
                <li>
                    <Link href="/">
                        <a className="active">All</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Mac</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>IPhone</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>IPad</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>IPod</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Accessories</a>
                    </Link>
                </li>
            </ul>
        </BestSellerNavStyled>
    );
};

export default BestSellersNav;
