import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavIcons from './NavIcons';
import styled from 'styled-components';

class NavItem extends Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    };
    render() {
        const StyledNavItem = styled.div`
            margin-top: 7px;

            .items {
                display: inline-flex;
                width: 100%;
                height: 58px;
                margin-top: 7px;
                background: ${(props) => (props.active ? 'white' : 'none')};
            }
            button {
                height: 58px;
                width: 173px;
                border: 0;
                background-color: transparent;
                // margin-left: 90px;
                font-size: 18px;
                font-style: normal;
                font-weight: 200;
                line-height: 22px;
                letter-spacing: 0em;
                text-transform: capitalize;
                text-align: left;
                cursor: pointer;
                color: ${(props) => (props.active ? '#590A5B' : '#ffff')};

                :focus {
                    border: 0;
                    outline: none;
                    text-decoration: none;
                    transition: all 0.5s ease-out;
                }
            }
        `;

        const { active, path, name } = this.props;

        return (
            <StyledNavItem active={active}>
                <Link to={path} onClick={this.handleClick}>
                    <div className="items">
                        <NavIcons active={active} name={name}>
                            {this.props.children}
                        </NavIcons>
                        <button>{name}</button>
                    </div>
                </Link>
            </StyledNavItem>
        );
    }
}
export default NavItem;
