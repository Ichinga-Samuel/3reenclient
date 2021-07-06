import React from "react";
import Profile from "../PageBuilder/Profile";
import BodyHead from "../PageBuilder/BodyHead";
import { MainContainer } from "../PageBuilder/Styled";
import SalesRep from "./SalesRep";

function SrMonitorDisplay() {
  return (
    <MainContainer>
      <Profile />
      <BodyHead
        title={"Sales Representative"}
        searchplaceholder={"search Sales Rep Monitor"}
        hide={"true"}
      />
      <div>
        <SalesRep />
        <SalesRep />
        <SalesRep />
        <SalesRep />
      </div>
    </MainContainer>
  );
}

export default SrMonitorDisplay;
