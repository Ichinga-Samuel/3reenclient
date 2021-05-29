import React, { useState } from 'react';
import Link from 'next/link';
import SideBar from './SideBar';
import VendorDashBoardHeader from './VendorDashBoardHeader';
import { VendorStyle, StyledContainer, StyledContent } from './VendorDashboard.styled';
import SearchIcon from './searchIcon.svg';
import Select from './Select';
import TableDisplay from './AllProductsTableDisplay';
import AllProductFilterHeader from './AllProductsDisplayTableHeader';

const AllProducts = () => {
    const [movedIn, setMovedIn] = useState(false);
    return (
        <div>
            <VendorDashBoardHeader movedIn={movedIn} setMovedIn={setMovedIn} />
            <StyledContainer>
                <VendorStyle>
                    <div className={`${movedIn && 'moved-out'} sidebar`}>
                        <SideBar setMovedIn={setMovedIn} />
                    </div>
                </VendorStyle>
                <StyledContent>
                    <div className="allProductBreadCrumbContainer">
                        <div className="allProductBreadCrumb">
                            <Link href="/inventory" passHref>
                                <a className="allProductBreadCrumbLink">
                                    Dashboard {'>'}
                                    <span className="allProductBreadCrumbLink"></span>
                                </a>
                            </Link>
                            <Link href="/inventory" passHref>
                                <a className="allProductBreadCrumbLink">
                                    Inventory {'>'}
                                    <span className="allProductBreadCrumbLink"></span>
                                </a>
                            </Link>
                            <Link href="/inventory" passHref>
                                <a className="allProductBreadCrumbLinkActive">
                                    All Products
                                    <span className="allProductBreadCrumbLink breadcrumbActive"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="allProductsMainContainer">
                        <div className="allProductHeader">
                            <h3>All Products</h3>
                        </div>
                        <div className="allProductsFilters">
                            <button className="viewFilter">View Filters</button>
                            <div className="filterSearchDiv">
                                <span className="searchIcon">
                                    <a href="/">
                                        <img alt="search icon" src={SearchIcon} />
                                    </a>
                                </span>
                                <input
                                    className="allProductsSearchInput"
                                    placeholder="Search by Names or Product Id"
                                ></input>
                            </div>
                            <div className="statusFilter" style={{ display: 'flex' }}>
                                {' '}
                                <a>
                                    Status
                                    <span className="allProductBreadCrumbLink">
                                        <Select />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <AllProductFilterHeader />
                            <TableDisplay />
                        </div>
                    </div>
                </StyledContent>
            </StyledContainer>
        </div>
    );
};

export default AllProducts;
