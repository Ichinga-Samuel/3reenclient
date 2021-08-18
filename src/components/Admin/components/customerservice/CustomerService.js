import React from 'react';
import Link from 'next/link';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { CustomerContainer } from '@/components/Admin/styles/AdminStyle.styled';
import { Button } from 'antd';

function CustomerService() {
    const title = 'Customer Service';
    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <CustomerContainer>
                <div className="image-container">
                    <img src="/img/contactUs.png" alt="contact us" />
                </div>
                <div className="text">
                    <h1>
                        Communicating with your customers <br /> and vendors is important
                    </h1>
                </div>
                <div className="callbuttons">
                    <Link href='/admin/customer-email-list'>
                    <Button type="primary">Email Contact List</Button>
                    </Link>
                    <Button type="primary">Phone Contact List</Button>
                </div>
            </CustomerContainer>
        </DefaultLayout>
    );
}

export default CustomerService;
