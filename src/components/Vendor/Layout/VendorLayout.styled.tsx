import styled from 'styled-components';

export const VendorLayoutStyled = styled.div`
    main {
        position: relative;
        width: auto;
        background: #fff;
        // transition: ease all 0.5s;
        transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1) 0.15s;
    }
    .main_container {
        padding: 5rem 2rem 2rem 27rem;
        // transition: ease all 0.5s;
        transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1) 0.15s;
    }
    .breadCrumb {
        margin-top: 10px;
        padding: 15px 0;
        font-size: 13px;
        .ant-breadcrumb {
            font-size: 13px;
            font-weight: bold;
        }
        .ant-breadcrumb-separator {
            margin: 0 23px 0 5px;
        }
    }
    .pageTitle {
        font-size: 2rem;
        color: #323232;
        font-weight: 500;
        padding-bottom: 20px;
        transition: ease all 0.5s;
    }
`;
