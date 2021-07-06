import React from "react";
import SelectDisplay from "./SelectDisplay";
import Styled from "styled-components";

export const HeaderContainer = Styled.div`
display:inline-flex;
flex-direction:row;
width:auto;
height:140px;
color:black;
// border:2px solid black;
.rightbox, .leftbox{
  width: 50%;
  // border:2px solid black;
}
.header{
  display:inline-flex;
  margin:auto;
  height:31px;
  position:absolute;
  top:150px;
  left:20px;

  .title{
    margin:auto;
  }
 .quantity{
   margin:auto;
   padding:8px;
 }
  h1{
    
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;

  }

  input#qty{
    width:40px;
    height:27px;
    border:0;
    text-align:center;
    background: #EEEEEE;
    
  }
}
.switchCategories{
  display:flex;
  width:auto;
  height:31px;
  position:absolute;
  top:195px;
  left:20px;
}
.hidden{
  display:none;
}

.searchcontainer{
  display:inline-flex;
  position:relative;
  margin-top:77px;
  width:auto;

  .searchbar{
    display:inline-flex;
    border: 1px solid rgba(0, 0, 0, 0.38);
    width:294px;
    height: 40px;
    input#searchorder{
      height: 35px;
      width: 294px;
      border:0;
      :focus {
        border: 0;
        outline: none;
        
      }
    }
    
    img{
      padding:10px;
    }
  }
  button{
    height: 40px;
    width: 187px;
    margin-left:16px;
    background:#FFAF38;
    color:#ffff;
    border:0;
  }
}

`;
function BodyHead(props) {
  return (
    <HeaderContainer>
      <div className="leftbox">
        <div className="header">
          <div className="title">
            <h1>{props.title}</h1>
          </div>
          <div className="quantity">
            <input type="text" id="qty" defaultValue="50" style={{fontSize:'16px'}}/>
          </div>
        </div>
        <div className={props.hide ? "hidden" : "switchCategories"}>
          {" "}
          <SelectDisplay />
        </div>
      </div>

      <div className="rightbox">
        <div className="searchcontainer">
          {" "}
          <div className="searchbar">
            {" "}
            <img src="../../img/search.png" alt="search" />
            <input
              type="search"
              id="searchorder"
              placeholder='Search Logistic Companies'
            />
          </div>
          <button style={{fontSize:'18px'}}>Search</button>{" "}
        </div>
      </div>
    </HeaderContainer>
  );
}

export default BodyHead;
