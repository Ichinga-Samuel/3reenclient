import React from 'react';

import { First, Button, Image, SearchHandle } from '@/components/Products/Menu.styled';
const Menu = () => {
    return (
        <First>
            <Image src="/img/menu.png" alt="menu" />
            <SearchHandle>
                <div className="Search">
                    <div className="SearchBtn">
                        <img src="/img/Vector.png" alt="search" />
                    </div>
                    <input type="text" placeholder="Search Brands, Categories and other Products" />
                    <Button>Search</Button>
                </div>
            </SearchHandle>
        </First>
    );
};

export default Menu;
