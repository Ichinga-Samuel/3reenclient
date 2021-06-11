import React from 'react';
import layout from '../styles/layout.module.css';
import utilStyles from '../styles/util.module.css';
import Link from '../components/CustomLink';

const Header = () => {
    return (
        <>
            <header className={layout.header}>
                <nav className="d-flex justify-content-between align-items-center px-5">
                    <div className="brand">
                        <Link href="/">
                            <img src="/img/logo.svg" alt="3reenshop logo" />
                        </Link>
                    </div>
                    <ul className="m-0">
                        <Link href="/qualityassurance/login">
                            <a className={`${utilStyles.textNormal} mx-4 px-1 pb-2 text-uppercase`}>Login</a>
                        </Link>
                        <Link href="/qualityassurance/register">
                            <a className={`${utilStyles.textNormal} mx-4 px-1 pb-2 text-uppercase`}>register</a>
                        </Link>
                    </ul>
                </nav>
            </header>

            <style jsx>{`
                .active {
                    color: #590a5b;
                    border-bottom: 2px solid #590a5b;
                }
            `}</style>
        </>
    );
};

export default Header;
