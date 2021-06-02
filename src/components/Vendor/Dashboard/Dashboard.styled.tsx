import styled from 'styled-components';

export const DashboardStyled = styled.div`
    transition: ease all 0.5s;
    animation: fadeIn 2s ease-out 1s;
    .dashboard {
        padding: 0;
    }
    .topMetricsContainer {
        margin-bottom: 2rem;
        transition: ease all 0.5s;
    }
    .topDashboardMetrics {
        margin: 0 8px 20px;
        transition: ease all 0.5s;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #590a5b;
        height: 70px;
        display: flex;
        width: 100%;
        color: white;
        border-radius: 10px;
        padding: 15px;
        /* text-align:center; */
        .merticsText {
            margin-left: 20px;
            h3 {
                color: var(--white-color);
            }
        }
        .count {
            width: 40px;
            height: 40px;
            border-radius: 50px;
            background: var(--white-color);
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                font-size: 2rem;
                fill: #590a5b;
                stroke: #590a5b;
            }
        }
    }
    .topSellingProducts {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 1.5rem 2rem;
        margin-bottom: 10px;
        &.heading {
            background: #590a5b;
            color: #fff;
            h2 {
                color: var(--white-color);
                font-size: 1.3rem;
                font-weight: lighter;
            }
            .ant-select {
                font-size: 0.9rem;
                &:not(.ant-select-customize-input) {
                    .ant-select-selector {
                        background-color: transparent;
                        color: var(--white-color);
                    }
                }
            }
            .ant-select-arrow {
                color: var(--white-color);
            }
        }
        .topSellingCounterContainer {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            p {
                margin: 0;
                padding-left: 1rem;
            }
        }
        .topSellingImageContainer {
            width: 63px;
            height: 63px;
            flex-grow: 0;
            padding: 0;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .topSellingCounterNumber {
            padding: 0.2rem 1rem;
            background: purple;
            color: white;
            margin: 2px;
            font-weight: bold;
            font-size: 1rem;
        }
        h4 {
            font-size: 1.2rem;
        }
        .no-data {
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
        }
    }
    .metricsFilter {
        display: flex;
        justify-content: space-between;
        padding: 9px;
        align-items: center;
        .ant-select {
            font-size: 0.9rem;
            &:not(.ant-select-customize-input) {
                .ant-select-selector {
                    border-radius: 5px;
                    height: 20px;
                    align-items: center;
                }
            }
        }
        .ant-select-arrow {
            color: var(--black-color);
            svg {
                font-size: 0.9rem;
            }
        }
        h3 {
            font-size: 1rem;
            margin-bottom: 0;
        }
    }
    .chartIndicatorBox {
        flex-grow: 1;
        max-height: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 0 0 30px;
        padding: 10px;
        .metricsFilter {
            display: flex;
            justify-content: space-between;
            padding: 9px;
            align-items: center;
            .ant-select {
                font-size: 0.9rem;
                &:not(.ant-select-customize-input) {
                    .ant-select-selector {
                        border-radius: 5px;
                        height: 20px;
                        align-items: center;
                    }
                }
            }
            h3 {
                font-size: 1rem;
                margin-bottom: 0;
            }
        }
    }
    .bolo {
        width: 100%;
        max-height: 100%;
        margin: 6px;
        max-width: 100%;
        max-width: 100%;
    }
`;
