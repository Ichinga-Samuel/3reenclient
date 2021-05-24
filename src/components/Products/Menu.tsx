import React, { useState } from 'react';

import { First, Hamburger, ViewLink } from '@/components/Products/Menu.styled';
import { Span, Title, Ul, A1 } from './Categories.styled';
// import Categories from './Categories';
// import { Title, Ul, A1, Span } from '@/components/Products/Categories.styled';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <First>
            <span className="input">
                <div className="Input">
                    <input type="text" className="Search" placeholder='Try "watches"' />
                    <button className="SearchBtn">
                        <img src="/img/Vector.png" alt="search" />
                    </button>
                </div>
            </span>
            <div className="Cate">
                <Title>Categories</Title>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
            </div>
            <div className="Block">
                <div>
                    <p>Fashion</p>
                </div>
                <div>
                    <p className="Active">Computing</p>
                </div>
                <div>
                    <p>Phones</p>
                </div>
                <div>
                    <p>Tablets</p>
                </div>
            </div>
            <div className="Top">
                <div>
                    <p>Top Deals</p>
                </div>
                <div>
                    <ViewLink>
                        <a href="https://google.com">View all</a>
                    </ViewLink>
                </div>
            </div>
            <Span data-isOpen={isOpen}>
                <Title>Categories</Title>
                <Ul>
                    <li>
                        <A1 href="https://google.com">Computing</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Home &amp; Office</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Fashion</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Electronics</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Phones &amp; Tablet</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Health &amp; Beauty</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Gaming</A1>
                    </li>
                    <li>
                        <A1 href="https://google.com">Other Category</A1>
                    </li>
                </Ul>
            </Span>
        </First>
    );
};

export default Menu;
