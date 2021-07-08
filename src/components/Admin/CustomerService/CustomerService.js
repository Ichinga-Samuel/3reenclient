import React from 'react';
import Link from 'next/link';
import { MainContainer, CustomerServiceContainer } from '../PageBuilder/Styled';

function CustomerService() {
    return (
        <MainContainer>
            <CustomerServiceContainer>
                <div className="image-container">
                    <img src="../../img/contactUs.png" alt="contact us" />
                </div>
                <div className="text">
                    <h1>Communicating with your customers and vendors is important</h1>
                </div>
                <div className="callbuttons">
                    <Link href="/admin/emailContact">
                        <a>
                            <button style={{ padding: '10px', fontSize: '16px' }}>Email Contact List</button>
                        </a>
                    </Link>
                    <button style={{ padding: '10px', fontSize: '16px' }}>Phone Contact List</button>
                </div>
            </CustomerServiceContainer>
        </MainContainer>
    );
}

export default CustomerService;
