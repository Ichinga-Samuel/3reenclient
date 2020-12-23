import React from 'react';

const Menu = () => {
    return (
        <div>
            <div className="left">
                <img src="/img/menu.png" alt="menu" />
            </div>

            <div className="right">
                <span>
                    <img src="/img/Vector.png" alt="search" />
                </span>
                <input type="search" name="Search" placeholder="Search Products, Brands and Categories" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Menu;
