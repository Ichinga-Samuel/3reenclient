import React from 'react';

const AllProductsDisplayTableHeader = () => {
    const pageValue = 25;
    const totalNumber = 1975;

    return (
        <div className="allProductsTableFilter">
            <div>
                <button className="allProductFilterButton">Export All</button>
            </div>
            <div className="tableFilterPage">
                <h4>
                    Showing {pageValue} of {totalNumber}
                </h4>
            </div>
            <div className="allProductsFilterRight">
                <div className="allProductsFilterRightItem">
                    <h4>Page</h4>
                </div>
                <div className="allProductsFilterRightItem">
                    <div>
                        <h4 className="allProductsFilterRightItemButton">11</h4>
                    </div>
                    <div style={{ margin: '5px' }}>
                        <h4>of 120</h4>
                    </div>
                </div>
                <div className="allProductsFilterRightItem">
                    <button className="pointerButton">{'<'}</button>
                    <button className="pointerButton">{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default AllProductsDisplayTableHeader;
