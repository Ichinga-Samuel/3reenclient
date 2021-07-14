import React from "react";
import Profile from "../PageBuilder/Profile";
import BodyHead from "../PageBuilder/BodyHead";
import { MainContainer } from "../PageBuilder/Styled";
import Products from "./Products";
import SpinnerLoading from "../SpinnerLoading";

function InventoryDisplay() {
  return (
    <MainContainer>
      <Profile />
      <BodyHead title={"Inventory"} searchplaceholder={" Search inventory"} />
      <Products />
    </MainContainer>
  );
}

export default InventoryDisplay;
