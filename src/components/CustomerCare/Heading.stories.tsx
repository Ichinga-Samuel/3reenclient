/* eslint-disable prettier/prettier */
import React from 'react';
import { BurgerIcon, Container, Heading } from './styled/HeadingStyled';
import logo from './Icons/logo.svg';
import cartIcon from './Icons/cart-icon.svg';
import avatar from './Icons/avatar.svg';
import { SearchButton } from './styled/Button/button';
import arrowdown from './Icons/arrow-down.svg';
import burgerIcon from './Icons/burger-icon.jpg';

// export default {
//     title: 'CustomerCare',
// };

export const Header = () => {
    return (
        <Heading>
            <Container>
                <div className="header-container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <BurgerIcon>
                        <img src={burgerIcon} alt="burger_menu" />
                    </BurgerIcon>
                    <div className="navigator">
                        <div className="search-data">
                            <input type="text" placeholder="search products" />
                            <SearchButton type="submit">Search</SearchButton>
                        </div>
                        <div className="cart">
                            <img src={cartIcon} alt="cart-icon" className="cart-img" />
                            <span>2</span>
                        </div>
                        <div className="user">
                            <img src={avatar} alt="user-avatar" className="user-img" />
                            <div className="user-id">
                                Hi Jack{' '}
                                <span>
                                    <img src={arrowdown} alt="dropdown-icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Heading>
    );
};
