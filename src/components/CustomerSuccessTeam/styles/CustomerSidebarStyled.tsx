/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Sidebar = styled.div`
    width: 274px;
    background: #320234;
    color: #ffffff;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
`;

export const SidebarContent = styled.div`
    margin-top: 40px;

    & > img {
        padding-left: 22px;
    }
`;
