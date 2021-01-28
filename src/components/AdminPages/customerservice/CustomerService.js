import React from "react";
import { MainContainer, CustomerServiceContainer } from "../PageBuilder/Styled";

function CustomerService() {
  return (
    <MainContainer>
      <CustomerServiceContainer>
        <div className="image-container">
          <img src="/img/contactus.png" alt="contact us" />
        </div>
        <div className="text">
          <h1>Communicating with your customers and vendors is important</h1>
        </div>
        <div className="callbuttons">
          <button>Email Contact List</button>
          <button>Phone Contact List</button>
        </div>
      </CustomerServiceContainer>
    </MainContainer>
  );
}

export default CustomerService;
