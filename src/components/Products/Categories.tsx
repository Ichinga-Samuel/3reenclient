import React from 'react';

import { Title, Ul, A1 } from '@/components/Products/Categories.styled';
import { Hamburger } from './Menu.styled';

const Categories = () => {
    return (
        <div>
            <div className="Cate">
                <Title>Categories</Title>
                <Hamburger>
                    <span />
                    <span />
                    <span />
                </Hamburger>
            </div>
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
        </div>
    );
};

export default Categories;
