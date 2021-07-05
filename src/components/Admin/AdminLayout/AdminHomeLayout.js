import React, {useEffect} from 'react';
import AOS from 'aos';
import Head from 'next/head';
import AdminSideMenu from './AdminSideMenu';
function AdminHomeLayout({ pageTitle, children }) {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <div style={{background: 'white' }}>
        
            <Head>
                    {' '}
                    <title>{pageTitle} | Admin Dashboard</title>
            </Head>
            <AdminSideMenu/>
            <div className="mainContainer" >
                <div className='minicontainer'>

                        <h2 >
                            {pageTitle}
                        </h2>
                        <div className='count'> 
                             <span>50</span>         
                        </div>         
                </div>
                {children}
            </div>
                
            
        </div>
    );
}

export default AdminHomeLayout;
