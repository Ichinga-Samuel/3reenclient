import * as React from 'react';
import styles from 'styled-components';

const Nav = styles.nav`
display:flex;
justify-content:space-between;
align-items:center;
width:100vw;
height:70px;
//
position:fixed;
top:0;
left:0;
z-index:5;
background:white;
`;
const Stl = { padding: '2em' };
const LogoText = { height: '30px' };

const TopNav = () => {
    return (
        <div id="nav-wrap">
            <Nav id="nav-cover">
                <div id="cart" style={Stl}>
                    <img src="./img/cart.png" alt="cart icon" />
                </div>
                <div id="logo" style={Stl}>
                    <img src="./icons/favicon-32x32.png" alt="logo icon" />
                    <img src="./img/name-png-format-01-1.png" style={LogoText} alt="logo icon" />
                </div>
                <div id="hamburger" style={Stl}>
                    <img src="./img/hamburger.png" alt=" hamburger menu" />
                </div>
            </Nav>
        </div>
    );
};

export default TopNav;
