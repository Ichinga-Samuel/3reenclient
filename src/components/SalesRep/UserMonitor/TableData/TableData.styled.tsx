import styled from 'styled-components';

export const TableDataStyled = styled.div`
    table.bottomBorder {
        border-collapse: collapse;
    }
    table.bottomBorder td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        text-align: start;
        align-content: flex-start;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.87);
    }
    table td:last-child* {
        border: none;
    }
    table.bottomBorder td,
    table.bottomBorder th {
        padding: 10px 22px;
    }
    table.bottomBorder th {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #fafafa;
        margin: 20px;
    }

    .pagination {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .page {
        border: 1px solid #333;
        padding: 0 6px;
        margin: 0 2px;
        font-size: 12px;
    }

    .current {
        background-color: #ffaf38;
        color: #fff;
        border: none;
    }
`;
