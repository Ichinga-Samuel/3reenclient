import React from "react";
import OrderTable from "./OrderTable";
import Profile from "../PageBuilder/Profile";
import BodyHead from "../PageBuilder/BodyHead";
import { MainContainer, TableContainer } from "../PageBuilder/Styled";

function OrderDisplay() {
  return (
    <MainContainer>
      <Profile />
      <BodyHead title={"Orders"} searchplaceholder={"search orders"} />
      <TableContainer>
        <OrderTable />
      </TableContainer>
    </MainContainer>
  );
}

export default OrderDisplay;
