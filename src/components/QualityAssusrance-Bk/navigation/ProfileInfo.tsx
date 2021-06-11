import React from 'react';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import layout from '@/components/QualityAssusrance/styles/layout.module.css';
import utilStyles from '@/components/QualityAssusrance/styles/util.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div
                id="profile-info"
                className={`${layout.profileInfo} p-5 d-flex justify-content-end align-items-center`}
            >
                <div className="d-flex justify-content-between align-items-center">
                    <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
                        <Badge className="p-badge-dot text-primary" severity="warning"></Badge>
                    </i>

                    <Avatar
                        icon="pi pi-user"
                        shape="circle"
                        size="large"
                        className="p-mr-2"
                        style={{ backgroundColor: '#320234', color: '#fff' }}
                    />

                    <div>
                        <p className={`${utilStyles.textNormal} text-primary m-0 mb-2`}>Jack Hanniel</p>
                        <p className={`${utilStyles.textSmall} text-primary m-0 mt-2`}>Q & A personnel</p>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    #profile-info {
                        width: calc(100% - 274px);
                        position: fixed;
                        top: 0;
                        left: 274px;
                        background-color: #fff;
                        z-index: 9999;
                    }

                    #profile-info > div {
                        width: 20%;
                    }
                `}
            </style>
        </>
    );
};

export default ProfileInfo;
