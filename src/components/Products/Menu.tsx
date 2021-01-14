import React, { Component } from 'react';

import { First, Button, Image, SearchHandle } from '@/components/Products/Menu.styled';
import { Title, Ul, A1, Span } from '@/components/Products/Categories.styled';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    showMenu(e) {
        e.preventDefault();
        console.log('clicked')
        this.setState({ isToggleOn: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu() {
        this.setState({ isToggleOn: false }, () => {
            document.removeEventListener('click', this.hideMenu);
        });
    }

    render() {
        return (
            <First>
                <div>
                    <span >
                        <Image src="/img/menu.png" alt="menu" onClick={this.showMenu} />
                    </span>
                    {this.state.isToggleOn ? (
                        <Span>
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
                    ) : null}
                </div>

                <SearchHandle>
                    <div className="Search">
                        <div className="SearchBtn">
                            <span>searchbtn</span>
                        </div>
                        <input type="text" placeholder="Search Brands, Categories and other Products" />
                        <Button>Search</Button>
                    </div>
                </SearchHandle>
            </First>
        );
    }
}

export default Menu;
