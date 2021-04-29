import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import TableLayout from '@/components/QualityAssusrance/styles/tableLayout.module.css';
import utilStyles from '@/components/QualityAssusrance/styles/util.module.css';

const Table = ({ globalFilter }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const dt = useRef(null);

    const filterDate = (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    };

    const formatDate = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }
        return `${day}/${month}/${date.getFullYear().toString().slice(2)}`;
    };

    const onDateChange = (e) => {
        dt.current.filter(e.value, 'date', 'custom');
        setSelectedDate(e.value);
    };

    const dateFilter = (
        <Calendar
            value={selectedDate}
            onChange={onDateChange}
            dateFormat="dd/mm/yy"
            panelClassName={` ${TableLayout.datePicker} p-column-filter`}
            inputClassName={`${utilStyles.textSmall} p-3`}
            placeholder="Date"
            id="date-input"
        />
    );

    const currenyMatcher = [
        {
            name: 'dollar',
            value: '$',
        },
        {
            name: 'naira',
            value: '#',
        },
    ];

    const onCurrencyChange = (e) => {
        dt.current.filter(e.value, 'amount.currency', 'in');
        setSelectedCurrency(e.value);
    };

    const currencyItemTemplate = (option) => {
        return (
            <div className="p-multiselect-currency-option">
                <span className="">{option.name}</span>
            </div>
        );
    };

    const currencyFilter = (
        <MultiSelect
            value={selectedCurrency}
            options={currenyMatcher}
            itemTemplate={currencyItemTemplate}
            onChange={onCurrencyChange}
            optionLabel="name"
            optionValue="name"
            placeholder="Currency"
            className="p-column-filter"
            id="currency-select"
        />
    );

    return (
        <div className="position-relative table-wrapper">
            <DataTable
                ref={dt}
                value={products}
                className="p-datatable-lg"
                tableClassName={TableLayout.dataTable}
                paginator
                globalFilter={globalFilter}
                emptyMessage="product not found"
                alwaysShowPaginator={false}
                paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{currentPage} of {totalPages}"
                rows={10}
            >
                <Column
                    field="date"
                    header="date"
                    filter
                    filterElement={dateFilter}
                    filterFunction={filterDate}
                ></Column>
                <Column field="product" header="product"></Column>
                <Column field="quantity" header="qty"></Column>
                <Column field="id" header="item ID"></Column>
                <Column
                    field="amount.cost"
                    filterField="amount.currency"
                    header="Amount"
                    filter
                    filterElement={currencyFilter}
                ></Column>
                <Column field="action" header="action"></Column>
            </DataTable>

            <style jsx>
                {`
                    .table-wrapper {
                        margin-top: 8rem;
                    }
                `}
            </style>
        </div>
    );
};

export default Table;

const products = [
    {
        date: '18/08/20',
        product: 'macbook pro',
        quantity: 2,
        id: 20695,
        amount: {
            cost: '$350.00',
            currency: 'dollar',
        },
        action: 'approved',
    },
    {
        date: '18/08/20',
        product: 'xbox',
        quantity: 1,
        id: 20334,
        amount: {
            cost: '$150.00',
            currency: 'dollar',
        },
        action: 'pending',
    },
    {
        date: '18/08/20',
        product: 'iPad air',
        quantity: 2,
        id: 20565,
        amount: {
            cost: '#350.00',
            currency: 'naira',
        },
        action: 'cancelled',
    },
];