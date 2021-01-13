import React from 'react';
import SideNav from './navigation/SideNav';

const MainLayout = ({ children }) => {
    return (
        <>
            <SideNav />
            <main>{children}</main>

            <style jsx>
                {`
                    margin: 2rem 0rem 0rem 270px;
                `}
            </style>
        </>
    );
};

export default MainLayout;
