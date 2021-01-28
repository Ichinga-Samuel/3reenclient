import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "2",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "3",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "4",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "5",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "6",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "7",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "8",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "9",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "10",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "11",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
  {
    key: "12",
    date: "19/08/2020",
    product: "Mac Book Pro",
    qty: "1",
    itemId: "#20695",
    tracking: "3cw32gvf",
    amount: "$350.00",
    status: "Approved",
    paymentType: "Debit Card",
    action: "...",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Item ID",
    dataIndex: "itemId",
    key: "itemId",
  },
  {
    title: "Tracking",
    dataIndex: "tracking",
    key: "tracking",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Payment Type",
    dataIndex: "paymentType",
    key: "paymentType",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

export const OrderTable = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        defaultCurrent: "1",
        total: "30",
        position: ["bottomCenter"],
      }}
      style={{ width: "100%" }}
    />
  );
};

export default OrderTable;
