import React from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/utils/Icons';
// import { useRouter } from 'next/router';
import { PlainAdminHeader } from '@/components/Admin/Layout/AdminLayout.styled';

const AdminPlainHeader = () => {
    // const router = useRouter();
    // const { pathname } = router;
    return (
        <PlainAdminHeader>
            <div className="plainlogo">
                <Link href="/admin/login">
                    <a>
                        <LogoIcon />
                    </a>
                </Link>
            </div>
            {/*<div className="links">*/}
            {/*    <Link href="/admin/login">*/}
            {/*        <a className={pathname === '/qualityassurance/login' ? 'active' : ''}>Login</a>*/}
            {/*    </Link>*/}
            {/*    <Link href="/admin/register">*/}
            {/*        <a className={pathname === '/qualityassurance/register' ? 'active' : ''}>Register</a>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </PlainAdminHeader>
    );
};

export default AdminPlainHeader;
