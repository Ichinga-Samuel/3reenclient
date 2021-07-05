import React from 'react';
import { PlainQAHeader } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
import Link from 'next/link';
import { LogoIcon } from '@/utils/Icons';
import { useRouter } from 'next/router';

const PlainHeader = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <PlainQAHeader>
            <div className="plainlogo">
                <Link href="/admin/login">
                    <a>
                        <LogoIcon />
                    </a>
                </Link>
            </div>
            <div className="links">
                <Link href="/admin/login">
                    <a className={pathname === '/admin/login' ? 'active' : ''}>Login</a>
                </Link>
                <Link href="/admin/register">
                    <a className={pathname === '/admin/register' ? 'active' : ''}>Register</a>
                </Link>
            </div>
        </PlainQAHeader>
    );
};

export default PlainHeader;
