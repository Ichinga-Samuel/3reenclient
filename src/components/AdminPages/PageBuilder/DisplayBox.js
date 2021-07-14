import React from "react";
import Styled from "styled-components";

const Box = Styled.div`
    display:inline-flex;
    height: 143.4px;
    width: 357.6px;
    padding:20px;
    text-align:left;
    box-shadow: 0px 4px 5px rgba(79, 0, 81, 0.1);
    margin-left:20.5px;
    margin-right:20.5px;
    color:rgba(0, 0, 0, 0.3) ;
    text-transform: capitalize;
    h4{
      font-weight: 500;
      font-size: 2.25em;
      line-height: 45px;
      color:${(props) => (props.color ? "#590A5B" : "rgba(0, 0, 0, 0.3)")} ;
    }
    img{
      transform:translateX(-40px);
    }
    p{
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    
    }
    .icon{
      position:absolute;
      margin-top:0px;
      margin-left:280px;
    

}

`;

function DisplayBox(props) {
  return (
    <Box color={props.color}>
      <div className="info">
        <p>{props.title}</p>
        <h4 style={{color:'#590A5B'}}>{props.info}</h4>
      </div>

      <div className="icon">
        {" "}
        <img src={props.icon} alt="" />
      </div>
    </Box>
  );
}

export default DisplayBox;
