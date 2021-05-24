import styled from 'styled-components';

export const ReviewsStyled = styled.div`
    .pagination {
        position: unset !important;
    }
    .reviewContainer {
        margin: 10px 0 0 0;
        border-radius: 10px 10px 0 0;
        overflow: hidden;
        &__header {
            padding: 10px;
            background: #590a5b;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__body {
            // display: flex;
            table {
                width: 100%;
                thead {
                    width: 100%;
                    background: #590a5b;
                    color: #fff;
                    tr,
                    th {
                        padding: 10px 0px 20px 15px;
                        font-size: 1.2rem;
                        font-weight: 400;
                    }
                }
                tbody {
                    width: 100%;
                    tr,
                    td {
                        padding: 10px 0px 20px 15px;
                        font-size: 1.2rem;
                        font-weight: 400;
                    }
                }
            }
        }
        &__rating {
            display: flex;
            margin: 0 2px;
            .anticon {
                color: #ffaf38;
            }
            li {
                margin-right: 2px !important;
            }
        }
        &__nodata {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 4rem 10px;
            background: #eee;
            margin-bottom: 10px;
            border-radius: 0 0 5px 5px;
            td {
                padding: 20px;
            }
            .nodata_icon {
                color: #696868;
                font-size: 4.2rem;
            }
            span {
                font-size: 1.5rem;
                color: #696868;
            }
        }
    }
    .sorting {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
            flex: 1 0 0;
            margin: 0 12px 0 4px;
        }
        span {
            color: #fff;
            font-weight: lighter;
        }
        .ant-select:not(.ant-select-customize-input) .ant-select-selector {
            padding: 4px 15px;
            background-color: transparent;
            border-radius: 10px;
            height: 40px;
        }
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
            border-color: #fcf009;
        }
    }
    .pagination {
        display: flex !important;
        .ant-pagination {
            color: #fff;
            // &.mini {
            //     .ant-pagination-prev {
            //         .ant-pagination-item-link
            //     }
            // }
        }
        .ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link,
        .ant-pagination.mini .ant-pagination-next .ant-pagination-item-link {
            display: flex;
            align-items: center;
            color: #fcf009;
        }
        .ant-pagination-item-active {
            font-weight: 500;
            background: transparent;
            border-color: #ffaf38;
        }
    }
`;
