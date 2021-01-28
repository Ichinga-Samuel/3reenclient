import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LogoutIcon } from "../icons/Icons";
import NavItem from "./NavItem";
import styled from "styled-components";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: "/",
      items: [
        {
          path: "/",
          name: "dashboard",
          key: 1,
        },
        {
          path: "/inventory",
          name: "inventory",
          icon: "/icon/Inventory.png",
          key: 2,
        },
        {
          path: "/user-monitoring",
          name: "user monitoring",
          key: 3,
        },
        {
          path: "/logistic-companies",
          name: "logistic companies",
          key: 4,
        },
        {
          path: "/audit",
          name: "audit",
          key: 5,
        },
        {
          path: "/orders-display",
          name: "Orders Display",
          key: 6,
        },
        {
          path: "/SR-display",
          name: "SR Display",
          key: 7,
        },
        {
          path: "/customer-service",
          name: "Customer Service",
          key: 8,
        },
      ],
    };
  }
  onItemClick = (path) => {
    this.setState({
      activePath: path,
    });
  };
  render() {
    const StyledSideNav = styled.div`
      width: 274px;
      height: 1024px;
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
        cursor: pointer;
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
    `;
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        <div className="sideBarLogo">
          <img src={"/icon/LogoName.png"} alt="logo" />
        </div>

        <div style={{ marginTop: "130px" }}>
          {items.map((item) => {
            return (
              <NavItem
                path={item.path}
                name={item.name}
                icon={item.icon}
                onItemClick={this.onItemClick}
                active={item.path === activePath}
                key={item.key}
              />
            );
          })}
        </div>
        <Link to="/">
          <div className="logOutButton">
            <div className="icon">
              <LogoutIcon />
            </div>

            <button>LOG OUT</button>
          </div>
        </Link>
      </StyledSideNav>
    );
  }
}
export default SideNav;
