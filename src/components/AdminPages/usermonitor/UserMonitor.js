import React from "react";
import Profile from "../PageBuilder/Profile";
import DisplayBox from "../PageBuilder/DisplayBox";
import UserMonitorTable from "./UserMonitorTable";
import {
  MainContainer,
  HeaderContainer,
  BoxContainer,
  TableContainer,
} from "../PageBuilder/Styled";

function UserMonitor() {
  return (
    <MainContainer>
      <Profile />
      <HeaderContainer>
        <div className="rec">
          <div className="pageheader">
            <div className="title">
              <h1>User Monitoring</h1>
            </div>
            <div className="quantity">
              <input type="text" id="qty" value="50" />
            </div>
          </div>
          <BoxContainer>
            <DisplayBox title={"number of users"} info={"120 users"} />
            <DisplayBox
              title={"number of users online"}
              info={"45 online users"}
            />
            <DisplayBox title={"total cancelled"} info={"N 300 000 000 000"} />
          </BoxContainer>
        </div>
      </HeaderContainer>

      <TableContainer style={{ marginTop: "70px" }}>
        <UserMonitorTable />
      </TableContainer>
    </MainContainer>
  );
}

export default UserMonitor;
