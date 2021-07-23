import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 1024px;
  width: 1440px;
  positionn: relative;
  left: 2340px;
  top: 894px;
  border-radius: 0px;
  background-image: url("/img/adminLandingPage.png");
  background-position: 100% center;
  background-repeat: no-repeat;
  background-size: cover;
  .box {
    height: 405px;
    width: 405px;
    position: absolute;
    left: 518px;
    top: 234px;
    background: #590A5B    ;
    opacity: 0.8;
    color: #fff;
    h1 {
      font-family: MADE TOMMY;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 3px;
    }
    h2 {
      font-family: MADE TOMMY;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 29px;
    }
  }
  .details {
    height: auto;
    width: auto;
    left: 608px;
    top: 944px;
    margin-top: 100px;
    text-align: center;
  }
  .logoBox {
    position: absolute;
    width: 99.21px;
    height: 232.04px;
    left: 672px;
    top: 600.23px;
    background: rgba(255, 255, 255, 0.61);
    border-radius: 14px;
    transform: rotate(-89.98deg);
  }
  .logo {
    position: absolute;
    width: 182px;
    height: 76px;
    left: -3vw;
    margin-left:0px;
    top: 55px;
    background-image: url("/img/logo.png");
    transform: rotate(90deg);
  }
`;

function LandingPage() {
  return (
    <Container>
      <div className="box">
        <div className="details">
          <h1 style={{color:'#fff'}}>WELCOME</h1>
          <h2 style={{color:'#fff'}}> Jack Hanniel</h2>
          <img src="/img/User.png" alt="avatar" />
        </div>
      </div>
      <div className="logoBox">
        <div className="logo"></div>
      </div>
    </Container>
  );
}

export default LandingPage;
