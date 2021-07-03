import React from 'react';
import { PlainCSTHeader } from '@/components/CustomerSuccessTeam/CSTLayout/CSTGeneral.styled';
import Link from 'next/link';
import { LogoIcon } from '@/utils/Icons';
import { useRouter } from 'next/router';

const PlainHeader = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <PlainCSTHeader>
            <div className="plainlogo">
                <Link href="/cst/login">
                    <a>
                        <LogoIcon />
                    </a>
                </Link>
            </div>
            <div className="links">
                <Link href="/cst/login">
                    <a className={pathname === '/cst/login' ? 'active' : ''}>Login</a>
                </Link>
                <Link href="/cst/register">
                    <a className={pathname === '/cst/register' ? 'active' : ''}>Register</a>
                </Link>
            </div>
        </PlainCSTHeader>
    );
};

export default PlainHeader;
