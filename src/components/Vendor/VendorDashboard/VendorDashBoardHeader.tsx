import React from 'react';
import { StyledContent } from './VendorDashBordHeader.styled';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    NavbarToggler,
} from 'reactstrap';
import VendorNotifications from './VendorNotifications';
import VendorSearchForm from './VenDorSearchForm';
import { UserProfileAction, FancyCart } from '@/components/AdminPages/icons/Icons';
// import svgLogo from './logo.svg';

// remove later reactstrap
const VendorDashBoardHeader = ({ setMovedIn }) => {
    // const [notifications,setNotifications] = useState([
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    //       {status:'order delivered',day:'today',time:'35 mins ago',items:'5'},
    // ])
    return (
        <StyledContent>
            <div className="headerContainer">
                <div>
                    <div className="mainContainer">
                        <span className="appLogoContainer">
                            <img src="" alt="#3rreen shop" />
                        </span>
                        <div className="container">
                            <VendorSearchForm placeHolder="search" />
                            <div style={{ display: 'flex' }}>
                                <div className="iconContainer">
                                    {' '}
                                    <FancyCart />
                                </div>
                                <div className="profileIcon">
                                    <UserProfileAction />
                                </div>
                                <UncontrolledDropdown wn setActiveFromChild>
                                    <DropdownToggle tag="a" className="nav-link" caret>
                                        Hi Jack
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownMenuTopContainer">
                                        <DropdownItem tag="a" href="#" className="dropdownItem">
                                            <Nav className="dropDownVav" vertical>
                                                <NavItem>
                                                    <h3 style={{ margin: '0 auto', textAlign: 'center' }}>
                                                        Notifications
                                                    </h3>
                                                </NavItem>

                                                <VendorNotifications />
                                                <hr></hr>
                                                <NavItem>
                                                    <h4 className="loadMoreCotainer">Load more{'>'} </h4>
                                                </NavItem>
                                            </Nav>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavbarToggler
                                    onClick={() => setMovedIn((prevState) => !prevState)}
                                    className="toggler"
                                >
                                    Menu
                                </NavbarToggler>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-search">
                        <form className="form">
                            <input
                                type="email"
                                className="formInput"
                                name="email"
                                id="exampleEmail"
                                placeholder="Search..."
                            />
                            <button className="formButton">SEARCH</button>
                        </form>
                    </div>
                </div>
            </div>
        </StyledContent>
    );
};

export default VendorDashBoardHeader;
