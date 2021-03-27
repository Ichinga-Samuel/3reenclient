import React, { useState } from 'react';
import DataviewLayout from '@/components/QualityAssusrance/layout/DataviewLayout';
import AllOrdersTable from '@/components/QualityAssusrance/components/dataTables/AllOrdersTable';
import StatusTable from '@/components/QualityAssusrance/components/dataTables/StatusTable';
// import CompletedTable from '@/components/QualityAssusrance/components/dataTables/CompletedTable';
// import PendingTable from '@/components/QualityAssusrance/components/dataTables/PendingTable';
// import OnHoldTable from '@/components/QualityAssusrance/components/dataTables/OnHold';
// import CancelledTable from '@/components/QualityAssusrance/components/dataTables/CancelledTable';
// import RefundedTable from '@/components/QualityAssusrance/components/dataTables/RefundedTable';
// import FailedTable from '@/components/QualityAssusrance/components/dataTables/FailedTable';

const QualityAssurance = () => {
    const [globalFilter, setGlobalFilter] = useState(null);
    const [renderedTable, setRenderedTable] = useState('all');
    const [products, setProoducts] = useState(null);

    // conditionally render data tables
    const renderTables = () => {
        let component = null;
        switch (renderedTable) {
            case 'all':
                component = <AllOrdersTable globalFilter={globalFilter} />;
                break;

            default:
                component = <StatusTable products={products} globalFilter={globalFilter} />;
                break;
        }

        return component;
    };

    return (
        <>
            <DataviewLayout
                setProducts={setProoducts}
                setGlobalFilter={setGlobalFilter}
                setRenderedTable={setRenderedTable}
            >
                {renderTables()}
            </DataviewLayout>
        </>
    );
};

export default QualityAssurance;
