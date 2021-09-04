import React from 'react';
import { Spin } from 'antd';
import Table from 'antd/lib/table';

const CustomerVendors = (props) => {
    const { fetching, vendorRecord, columns } = props;

    return (
        <>
            {fetching ? (
                <div className="fetchingloading">
                    <Spin />
                    <small>Fetching Details...</small>
                </div>
            ) : (
                <div>
                    <Table rowKey="id" loading={fetching} dataSource={vendorRecord} columns={columns} />
                </div>
            )}
        </>
    );
};

export default CustomerVendors;
