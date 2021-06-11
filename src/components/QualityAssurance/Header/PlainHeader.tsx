import React from 'react';
import { PlainQAHeader } from '@/components/QualityAssurance/Header/QAHeader.styled';
import Link from 'next/link';
import { LogoIcon } from '@/utils/Icons';
import { useRouter } from 'next/router';

const PlainHeader = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <PlainQAHeader>
            <div className="plainlogo">
                <Link href="/qualityassurance/login">
                    <LogoIcon />
                </Link>
            </div>
            <div className="links">
                <Link href="/qualityassurance/login">
                    <a className={pathname === '/qualityassurance/login' ? 'active' : ''}>Login</a>
                </Link>
                <Link href="/qualityassurance/register">
                    <a className={pathname === '/qualityassurance/register' ? 'active' : ''}>Register</a>
                </Link>
            </div>
        </PlainQAHeader>
    );
};

export default PlainHeader;
