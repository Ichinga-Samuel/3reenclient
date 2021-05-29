import styled from 'styled-components';

export const VendorStyle = styled.div`
    .sidebar {
      padding-top:120px;
        margin: 0;
        padding: 0;
        width: 250px;
        left: 0px;
        top: 0px;
        right: -28.47%;
        color: #fff;
        background-color: #590a5b;
        height: 100%;
        overflow: auto;
    }
    .sidebar button {
        max-width: 200px;
        margin-left: 0;
        font-size: bold;
    }
    .sidebar h1 {
        font-size: 'bold';
    }

    .sidebar a {

        display: flex;
        color: white;
        padding: 16px;
        text-decoration: none;
        font-family: MADE TOMMY;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    .sidebarActive {
        background: #fff;
        color: black;
    }
    .inventoryDropDown{
       padding-left: 50px;
       background:white;
       color:black;
    }

    .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
    }

    .content {
        margin-left: 400px;
        padding: 1px 16px;
        /* height: 1000px; */
    }
    .sidebar button {
        display: block;
        color: black;
        padding: 8px;
        text-decoration: none;
        font-family: MADE TOMMY;
        font-size: 10px;
        font-style: normal;
        margin: 0 auto;
        border-radius: 8px;
        font-weight: 400;
        width: 120px;
        height: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
        /* Radius:10px;
    Blend:Pass through; */
    }
    .sideNavbarControl{
       margin-top:20px;
       margin-left:5px;
       display:none;
       margin-bottom:60px;

       @media screen and (max-width: 1000px){
         display:flex;
        }
    }
    .sidebarNavControlRightItem{
      margin-left:80%;
      width:30px;
      height:20px;
    }
    .sidebarNavControlLeftItem{
      width:30px;
      height:20px;
    }
    .sidebarTopText {
      padding-top:120px;
        margin-left: 20px;

        @media screen and (max-width: 1000px){
         padding-top:2px;
        }
    }
    .sideBarIcon {
        margin-right: 10px;
    }
    @media screen and (max-width: 1000px) {
        .sidebar {
            height: 100%;
            position: fixed;
            z-index: 10000000000000;
            transition: 0.5s;
            transform: translateX(-100%);
        }
        .moved-out {
           width:100%;
            transform: translateX(0) !important;
        }
        .allProductsFilters{
           display: block;
        }
    }

    }
    @media screen and (max-width: 400px) {
        .sidebar a {
            text-align: center;
            float: none;
        }
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    .allProductBreadCrumb {
        color: #848484;
        display: flex;
        list-style: none;
        font-weight: bolder;
        font-size: 13px;
    }
    allProductBreadCrumb a {
        color: #848484;
    }

    .breadcrumbActive {
        color: black;
        display: flex;
        list-style: none;
        font-weight: bolder;
        font-size: 13px;
    }
    .allProductsMainContainer {
        margin-left: 15px;
        margin-bottom: 20px;
    }
    .createProductsMainContainer {
        margin-left: 15px;
        margin-bottom: 20px;
        background: 'red';
        width: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .createProductOl {
        margin-bottom: 5px;
    }
    .createProductHeader {
        text-align: center;
        margin: 40px;
    }
    .createProductList {
        padding-left: 200px;
        margin-top: 30px;
        font-size: 15px;
        @media screen and (max-width: 1300px) {
            padding-left: 100px;
        }
    }
    .createProductButtonContainer {
        margin: 0 auto;
        text-align: center;
        margin-bottom: 50px;
    }
    .draftProductSpan {
        display: block;
        margin-left: 7px;
        font-size: 10px;
        font-weight: bolder;
    }
    .draftContainer {
        margin-top: 50px;
        padding-bottom: 25px;
        margin-left: 30px;
    }
    .selectHeaderText {
        margin: 17px;
        color: grey;
    }
    .draftProductsContainer {
        margin-right: 15px;
        @media screen and (max-width: 1000px) {
            display: block;
            margin-right: 15px;
            width: 100%;
        }
    }
    .productDraftLeftHeader {
        padding-left: 0px;
        font-size: 12px;
        font-weight: bolder;
    }
    .productDraftRightHeader {
        margin-right: 20px;
        padding-left: 0px;
        margin-left: auto;
        font-size: 12px;
        font-weight: bolder;
    }
    .productDraftHeader {
        margin-top: 20px;
        margin-bottom: 15px;
    }
    .draftImage {
        width: 20%;
        height: 100%;
    }
    .comboSpan {
        margin-left: auto;
        background: yellow;
        height: 15px;
        border-radius: 10px;
        width: 70px;
        text-align: center;
    }
    .draftProductCol {
        display: flex;
        padding-left: 0px;
        padding: 5px;
        margin: 5px;
        background: #e9dcd1;
        @media screen and (max-width: 1000px) {
            margin-top: 10px;
        }
    }
    .createProductCol {
        border: 1px solid blue;
        border-radius: 10px;
        // margin: 7px;
    }

    .createProductButton {
        color: white;
        background: #590a5b;
        margin-bottom: 30px;
        margin-top: 20px;
        border-radius: 10px;
        width: 300px;
        height: 55px;
        padding: 13px;
        font-size: 13px;
        @media screen and (max-width: 725px) {
            background: green;
            width: 150px;
        }
    }
    .createProductsHeader {
        margin-left: 15px;
        margin-bottom: 20px;
        font-size: 30px;
    }
    .createProductsHeader h3 {
        font-size: 30px;
        font-weight: bolder;
    }
    .allProductHeader {
        color: Black;
        font-weight: bolder;
        margin-bottom: 25px;
    }
    .productHeaderInput {
        width: 20px;
        height: 30px;
        border: 100px solid red;
    }
    .allProductBreadCrumbLink {
        margin-left: 20px;
        text-decoration: none;
        color: grey;
    }
    .allProductBreadCrumbLinkActive {
        margin-left: 20px;
        text-decoration: none;
        color: black;
    }

    .allProductBreadCrumbContainer {
        margin-top: 20px;
        margin-bottom: 50px;
    }
    .allProductsFilters {
        display: flex;
        width: 100%;
        color: white;
        background: #590a5b;
        padding: 20px;
        border-radius: 10px;
        @media screen and (max-width: 1000px) {
            display: block;
            width: 100%;
        }
    }
    .statusFilter {
        margin-left: auto;
        font-size: 12px;
        padding: 10px;
        @media screen and (max-width: 1000px) {
            width: 100%;
            margin: 15px;
            font-size: 20px;
        }
    }
    .allProductsTableHeader {
        background: #590a5b;
        color: white;
        margin-left: 2px;
        margin-right: 2px;
        text-align: center;
        padding: 5px;
    }
    .allProductsTableContent {
        color: black;
        margin-left: 2px;
        margin-right: 2px;
        text-align: center;
        padding: 5px;
    }
    .allProductsTableFilter {
        background: #590a5b;
        color: white;
        display: flex;
        margin-left: 2px;
        margin-top: 35px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-right: 2px;
        padding: 10px;
        border-bottom: 1px solid white;
        display: filter;
        @media screen and (max-width: 1000px) {
            width: 100%;
            display: block;
            font-size: 20px;
        }
    }
    .allProductsFilterRight {
        display: flex;
        margin-left: auto;
    }
    .allProductsFilterRightItem {
        margin: 20px;
        display: flex;
        text-align: center;
    }
    .pointerButton {
        height: 35px;
        color: red;
        border-radius: 5px;
        border: 1px solid red;
        margin-right: 4px;
        background: #590a5b;
        width: 35px;
    }
    .allProductsFilterRightItemButton {
        width: 40px;
        height: 30px;
        background: #590a5b;
        padding: 5px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid grey;
        border-radius: 10px;
        color: white;
    }

    .tableFilterPage {
        font-size: 10px;
        font-weight: normal;
        margin-left: 15px;
        padding: 15px;
        @media screen and (max-width: 1000px) {
            margin-left: 0px;
            font-size: 20px;
        }
    }
    .productContext {
        float: right;
    }
    .allProductsTableContent input {
        width: 20px;
        height: 30px;
        border: 100px solid red;
    }
    .changeRed {
        background: 'red';
        color: white;
    }
    .productActive {
        background: #ffaf38;
        text-align: center;
        border-radius: 12px;
        height: 30px;
        padding: 5px;
    }
    .allProductFilterButton {
        width: 150px;
        height: 50px;
        background: #590a5b;
        border: 1px solid white;
        border-radius: 10px;
        color: white;
        @media screen and (max-width: 1000px) {
            font-size: 20px;
            margin-left: 15px;
        }
    }
    .allProductsSearchInput {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: #590a5b;
        text-align: left;
        font-size: 20px;
        color: white;
        @media screen and (max-width: 1000px) {
            width: 100%;
            font-size: 20px;
        }
    }
    .searchIcon {
        margin-left: 40px;
        height: 100%;
        padding: 5px;
        @media screen and (max-width: 1000px) {
            padding: 0px;
        }
    }
    .viewFilter {
        border: 1px solid white;
        border-radius: 10px;
        margin-right: auto;
        background: #590a5b;
        color: white;
        padding: 10px;
        text-align: center;
        width: 150px;
        height: 45px;
        @media screen and (max-width: 1000px) {
            width: 95%;
            margin: 15px;
            font-size: 20px;
        }
    }
    .filterSearchDiv {
        border: 1px solid white;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        width: 50%;
        height: 45px;
        @media screen and (max-width: 1000px) {
            width: 95%;
            margin: 15px;
            font-size: 20px;
        }
    }
    /* min-height: 100vh; */
`;
export const StyledContent = styled.div`
    flex: 1;
    /* margin-top: 60px; */
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
    h3 {
        font-weight: 'bold';
    }
    .chartIndicatorContainer {
        width: 100%;
        margin: 0 auto;
        max-width: 100%;
    }
    .dashBoardText {
        font-weight: 'bold';
        margin-left: 11px;
    }
    .indicatorContainer {
        display: flex;
    }
    .topMetricsContainer {
        margin-top: 4rem;
        margin-bottom: 2rem;
    }
    .metricsFilter {
        display: flex;
        justify-content: space-between;
    }
    .topSellingProducts {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        border-radius: 10px;
        padding-right: 2rem;
        padding-left: 2rem;
        padding-top: 4rem;
        padding-bottom: 2rem;
    }
    .heading {
        background: #590a5b;
        color: #fff;
    }
    .merticsText {
        margin-left: 20px;
    }
    .topDashboardMetrics {
        margin: 10px;
        background: #590a5b;
        height: 70px;
        display: flex;
        width: 100%;
        color: white;
        border-radius: 10px;
        padding: 15px;
        /* text-align:center; */
    }
    .topSellingCounterContainer {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }
    topSellingCounterContainer p {
        margin: 0;
        padding-left: 1rem;
    }
    .topSellingImageContainer {
        width: 63px;
        height: 63px;
        flex-grow: 0;
        padding: 0;
    }
    .topSellingImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .topSellingCounterNumber {
        padding: 0.2rem 1rem;
        background: purple;
        color: white;
        margin: 2px;
        font-weight: bold;
        font-size: 1rem;
    }
    .chartIndicatorBox {
        max-width: 100%;
        flex: 1;
        flex-grow: 1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
    .OtherDashBoardMetrics {
        display: flex;
        .contentContainer {
            background: red;
        }
    }
    .flex {
        display: flex;
        /* flex-direction: column; */
    }
    .bolo {
        width: 100%;
        max-height: 100%;
        margin: 6px;
        max-width: 100%;
        max-width: 100%;
    }
`;
