import React, { useState } from 'react';
import MainLayout from './MainLayout';
import { Products } from '@/components/QualityAssusrance-Bk/services/TableData';
import utilStyles from '@/components/QualityAssusrance/styles/util.module.css';
import CX from 'classnames';

const DataviewLayout = ({ children, setGlobalFilter, setRenderedTable, setProducts }) => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <>
            <MainLayout>
                <div>
                    <div className="header d-flex justify-content-between align-items-center pb-5">
                        <h3 className={`${utilStyles.textCaption} text-capitalize`}>orders</h3>
                        <div className="table-header d-flex justify-content-end align-items-center w-50">
                            <span className="w-50">
                                <input
                                    className={`${utilStyles.textSmall} search-input w-100 p-3`}
                                    type="search"
                                    onChange={(e) => setGlobalFilter(e.target.value)}
                                    placeholder="Global Search"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="my-3 px-3">
                        <ul className="data-links w-100 d-flex justify-content-between align-items-center">
                            <button
                                className={CX({ active: activeTab === 'all' })}
                                onClick={() => {
                                    setRenderedTable('all');
                                    setActiveTab('all');
                                }}
                            >
                                All orders
                            </button>

                            <button
                                className={CX({ active: activeTab === 'completed' })}
                                onClick={() => {
                                    setProducts(Products.completed);
                                    setRenderedTable('statusTable');
                                    setActiveTab('completed');
                                }}
                            >
                                {`completed (${Products.completed.length})`}
                            </button>

                            <button
                                className={CX({ active: activeTab === 'pending' })}
                                onClick={() => {
                                    setProducts(Products.pending);
                                    setRenderedTable('statusTable');
                                    setActiveTab('pending');
                                }}
                            >
                                {`pending payment (${Products.pending.length})`}
                            </button>

                            <button
                                className={CX({ active: activeTab === 'onhold' })}
                                onClick={() => {
                                    setProducts(Products.onhold);
                                    setRenderedTable('statusTable');
                                    setActiveTab('onhold');
                                }}
                            >
                                {` onhold (${Products.onhold.length})`}
                            </button>

                            <button
                                className={CX({ active: activeTab === 'cancelled' })}
                                onClick={() => {
                                    setProducts(Products.cancelled);
                                    setRenderedTable('statusTable');
                                    setActiveTab('cancelled');
                                }}
                            >
                                {`cancelled (${Products.cancelled.length})`}
                            </button>

                            <button
                                className={CX({ active: activeTab === 'refunded' })}
                                onClick={() => {
                                    setProducts(Products.refunded);
                                    setRenderedTable('statusTable');
                                    setActiveTab('refunded');
                                }}
                            >
                                {`refunded (${Products.refunded.length})`}
                            </button>

                            <button
                                className={CX({ active: activeTab === 'failed' })}
                                onClick={() => {
                                    setProducts(Products.failed);
                                    setRenderedTable('statusTable');
                                    setActiveTab('failed');
                                }}
                            >
                                {`failed (${Products.failed.length})`}
                            </button>
                        </ul>
                    </div>
                    <div className="table-container">{children}</div>
                </div>

                <style jsx>
                    {`
                        .data-links button {
                            font-size: 1.4rem;
                            line-height: 0.9em;
                            color: rgba(0, 0, 0, 0.25);
                            padding-bottom: 0.5rem;
                            text-transform: capitalize;
                            transition: color 0.1s 0.1s ease-in-out;
                            outline: none;
                            border: 0;
                            cursor: pointer;
                            background-color: inherit;
                        }

                        .data-links button.active {
                            color: #590a5b;
                            outline: none;
                            border: 0;
                        }

                        .data-links button:hover,
                        .data-links li:focus {
                            color: #590a5b;
                            text-decoration: none;
                            outline: none;
                            border: 0;
                        }

                        input.search-input {
                            color: #495057;
                            background: #ffffff;
                            border: 1px solid #ced4da;
                            transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s,
                                -moz-box-shadow 0.2s;
                            border-radius: 3px;
                            font-weight: 300;
                        }

                        input.search-input:hover,
                        input.search-input:focus {
                            outline: none;
                            border-color: #2196f3;
                        }

                        input.search-input:focus {
                            box-shadow: 0 0 0 0.2rem #a6d5fa;
                        }
                    `}
                </style>
            </MainLayout>
        </>
    );
};

export default DataviewLayout;
