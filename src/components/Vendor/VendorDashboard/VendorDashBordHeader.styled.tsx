import styled from 'styled-components';

export const StyledContent = styled.div`
    .mobile-search {
        display: none;
        align-items: center;
        /* padding: 0 1rem; */
        padding-top: 1rem;
        @media (max-width: 1000px) {
            display: flex;
            margin: '2px';
        }
    }

    hr {
        background: #fff;
        margin: 0;
    }
    .dropdownItem {
        background: #590a5b;
    }
    Nav {
        color: white;
    }
    .headerContainer {
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.29);
        background: white;
        padding: 1rem 0;
        min-width: 378px;
    }
    .loadMoreCotainer {
        margin: 10px;
        text-align: center;
        color: #fcf009;
    }
    .mainContainer {
        display: flex;
        justify-content: space-between;
        /* max-width: 1640px; */
        margin: 0 auto;
        padding: 0 1rem;
        align-items: center;
    }
    .container {
        flex: 1;
        display: flex;
        align-items: center;
        margin-right: 0;
        flex: 0.85;
        max-width: unset;
        justify-content: space-between;
        @media (max-width: 768px) {
            justify-content: flex-end;
        }
    }
    .form {
        display: flex;
        flex: 1;
        margin-right: 1rem;
    }
    .desktop-search.form {
        flex: 0.75;
        @media (max-width: 991px) {
            flex: 1;
        }
        @media (max-width: 1000px) {
            display: none;
        }
    }
    .formInputHolder {
        width: 100%;
        display: none;
    }
    .formInputHolderSec {
        width: 100%;
    }
    .formInput {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.25);
        outline: none;
        @media (max-width: 768px) {
            display: block;
            margin: '4px';
        }
    }
    .formGroup {
        width: 100%;
        display: flex;
        border: 1ps solid skyblue;
    }
    .formButton {
        background: #ffaf38;
        border: none !important;
        border-radius: 0 !important;
        color: white;
        font-size: 1.5rem;
        font-weight: 400;
        padding: 1rem 4rem;
        @media (max-width: 1000px) {
            display: none;
        }
    }
    .sideToggle {
        margin-left: 10px;
    }
    .sidebar {
        padding-top: 120px;
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
    .sidebar a.active {
        background-color: #fff;
        color: black;
    }
    .dropdownMenuTopContainer {
        width: 350px;
        height: 100%;
        transform: translateX(-300px);
        background: #590a5b;
        @media (max-width: 1000px) {
            transform: translateX(-50px);

            padding: 0 !important;
        }
    }
    .dropDownVav {
        color: white;
    }
    .mobileNavIcon {
        margin-left: 10px;
        margin-right: 10px;
    }
    .dropDownNavHeader {
        margin: 0 auto;
        text-align: center;
    }
    .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
    }

    .toggler {
        background: #590a5b;
        display: none;
    }
    .iconContainer {
        margin-left: 30px;
    }
    .profileIcon {
        margin-left: 60px;
        max-width: 100%;
        max-width: 20%;
    }
    .dropDownNavIcon {
        width: 20%;
        height: 66%;
        background: white;
        border-radius: 50%;
        padding: 10px;
    }
    .orderStatusContainer {
        margin-left: 4px;
    }
    .orderStatus {
        font-size: 13px;
        font-weight: 200;
    }
    .navItemMain {
        display: flex;
        width: 100%;
    }
    .navItemContainer {
        margin: 10px;
        width: 70%;
        display: flex;
    }
    @media screen and (max-width: 1000px) {
        .container {
            flex-grow: 1;
            display: none;
        }
        .toggler {
            background: #590a5b;
            height: 30px;
            width: 60px;
            color: white;
            display: block;
        }
        .dropdownMenuTopContainer {
            width: 350px;
            height: 100%;
            background: #590a5b;
            padding: 10px;
            margin-right: 150px;
        }
    }

    .appLogoContainer {
        margin-left: 60px;
        @media screen and (max-width: 1000px) {
            margin-left: 0px;
            padding-left: 0px;
        }
    }
`;
export const StyledLogo = styled.img`
    @media (max-width: 1000px) {
        display: none !important;
    }
`;

export const StyledToggleIconSmall = styled.img`
    display: none !important;
    @media (max-width: 1000px) {
        display: block !important;
        margin-right: 20px;
        padding-top: 8px;
        margin-left: 20px;
    }
`;
export const StyledToggleIconSmaller = styled.img`
    display: none !important;
    @media (max-width: 1000px) {
        display: block !important;
        margin-right: 20px;
        padding-top: 8px;
        margin-left: 20px;
    }
`;
