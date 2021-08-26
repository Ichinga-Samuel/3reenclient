import React from 'react';
import { Spin } from 'antd';
import Table from 'antd/lib/table';

const CustomerUsers = (props) => {
    const { fetching, userRecord, columns } = props;

    return (
        <>
            {fetching ? (
                <div className="fetchingloading">
                    <Spin />
                    <small>Fetching...</small>
                </div>
            ) : (
                <div>
                    <Table rowKey="id" columns={columns} dataSource={userRecord} />
                </div>
            )}
        </>
    );
};

export default CustomerUsers;
