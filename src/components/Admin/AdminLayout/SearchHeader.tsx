import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { HeaderStyled } from './SearchHeader.styled';
// import Search from '@/components/Products/Search';
// import fakedata from '@/components/Products/fakeData';

const SearchHeader = () => {
    /*const router = useRouter();
    const cartPage = () => {
        router.push('/cart');
    };*/
    return (
        <HeaderStyled>
            <div className="Header">
                
                <div className="Input">
                    <input type="text" className="Search" placeholder="Search products..." />
                    <button className="SearchBtn">Search</button>
                </div>
            </div>
        </HeaderStyled>
    );
};

export default SearchHeader;
