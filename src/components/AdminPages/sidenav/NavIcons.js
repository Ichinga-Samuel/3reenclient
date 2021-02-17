import React from 'react';
import Styled from 'styled-components';
import {
    BoardIcon,
    AuditIcon,
    CostumerServiceIcon,
    InventoryIcon,
    LogisticCompanyIcon,
    OrderIcon,
    SRMonitorIcon,
    UserMonitorIcon,
} from '../icons/Icons';

const Styles = Styled.div`
height: 58px;
width: 99px;
border: 0;
margin: auto;
padding:15px;
text-align:center;
`;

function NavIcons(props) {
    const { active } = props;

    if (props.name === 'dashboard') {
        return (
            <Styles>
                <BoardIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'audit') {
        return (
            <Styles>
                <AuditIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'Customer Service') {
        return (
            <Styles>
                <CostumerServiceIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'inventory') {
        return (
            <Styles>
                <InventoryIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'logistic companies') {
        return (
            <Styles>
                <LogisticCompanyIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'Orders Display') {
        return (
            <Styles>
                <OrderIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'SR Display') {
        return (
            <Styles>
                <SRMonitorIcon active={active} />
            </Styles>
        );
    }
    if (props.name === 'user monitoring') {
        return (
            <Styles>
                <UserMonitorIcon active={active} />
            </Styles>
        );
    }
}

export default NavIcons;
