import React, { Component } from 'react';
import Link from 'next/link';
import { LogoutIcon } from '../icons/Icons';
import styled from 'styled-components';
import { SideBar } from '@/components/AdminPages/PageBuilder/Styled';
class SideNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const StyledSideNav = styled.div`
            width: 274px;
            height: 1050px;
            position: absolute;
            left: 0%;
            right: 0%;
            top: 0%;
            bottom: 0%;
            background: #320234;
            margin: 0;
            .sideBarLogo {
                position: absolute;
                top: 49px;
                height: 50px;
                bottom: 0;
                right: 0;
                left: 35px;
            }
            .logOutButton {
                display: inline-flex;
                position: absolute;
                width: 100%;
                height: 58px;
                top: 960px;
                bottom: 0;
                right: 0;
                left: 0;
                cursor: pointer;

                .icon {
                    height: 58px;
                    width: 99px;
                    border: 0;
                    margin: auto;
                    padding: 15px;
                    text-align: center;
                }
                button {
                    height: 58px;
                    width: 173px;
                    border: 0;
                    background-color: transparent;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 200;
                    line-height: 22px;
                    letter-spacing: 0em;
                    text-transform: capitalize;
                    text-align: left;
                    cursor: pointer;
                    color: #be1e2d;

                    :focus {
                        border: 0;
                        outline: none;
                        text-decoration: none;
                    }
                }
            }
            .link {
                padding: 5px;
            }
            .link :hover {
                background-color: #fff;
                color: #590a5b;
                height: 100%;
            }
            img {
                margin-left: 30px;
            }
            .word {
                margin-left: 10px;
            }
        `;
        return (
            <StyledSideNav>
                <SideBar>
                    <div style={flexContainer}>
                        <div style={{ marginLeft: '30px' }}>
                            <img src="../../img/3reen.png" alt="3reen"></img>
                        </div>
                        <Link href="/admin/dashboard">
                            <div style={flexChild} className="link">
                                <img className="img-dash" src="../../img/dash.png" alt="DashBoard"></img>
                                <p className="word">Dashboard</p>
                            </div>
                        </Link>
                        <Link href="admin/inventory">
                            <div style={flexChild} className="link">
                                <img src="../../img/inev.png" alt="Inevntory"></img>
                                <p className="word">Inventory</p>
                            </div>
                        </Link>
                        <Link href="admin/usermonitor">
                            <div style={flexChild} className="link">
                                <img src="../../img/usermonitor.png" alt="User Monitor"></img>
                                <p className="word">User Monitoring</p>
                            </div>
                        </Link>
                        <Link href="admin/logistic">
                            <div style={flexChild} className="link">
                                <img className="logi-img" src="../../img/logi.png" alt="Logi"></img>
                                <p className="word">Logistic Companies</p>
                            </div>
                        </Link>
                        <Link href="admin/audit">
                            <div style={flexChild} className="link">
                                <img src="../../img/audit.png" alt="Audit"></img>
                                <p className="word">Audit</p>
                            </div>
                        </Link>
                        <Link href="admin/orderDisplay">
                            <div style={flexChild} className="link">
                                <img className="" src="../../img/Order Display (4).png" alt="Order"></img>
                                <p className="word">Order Display</p>
                            </div>
                        </Link>
                        <Link href="admin/salesRep">
                            <div style={flexChild} className="link">
                                <img className="" src="../../img/sr.png" alt="Sr"></img>
                                <p className="word">SR Monitor</p>
                            </div>
                        </Link>
                        <Link href="admin/customer">
                            <div style={flexChild} className="link">
                                <img className="customer-img" src="../../img/customer.png" alt="Customer"></img>
                                <p className="word">Customer Service</p>
                            </div>
                        </Link>
                    </div>
                </SideBar>
                <Link href="/">
                    <a>
                        <div className="logOutButton">
                            <div className="icon">
                                <LogoutIcon />
                            </div>

                            <button>LOG OUT</button>
                        </div>
                    </a>
                </Link>
            </StyledSideNav>
        );
    }
}
//Funtional Style
const flexContainer = {
    display: 'flex',
    'flex-direction': 'column',
    color: '#fff',
    'font-size': '18px',
    'object-fit': 'contain',
    'margin-top': '30px',
};
const flexChild = {
    display: 'flex',
    'margin-left': '0px',
    'margin-top': '40px',
    height: '20px',
    'align-items': 'center',
    cursor: 'pointer',
    height: '100%',
};
export default SideNav;
