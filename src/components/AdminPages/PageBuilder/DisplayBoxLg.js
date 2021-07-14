import React from "react";
import Styled from "styled-components";

const Boxlg = Styled.div`
width: 353.38px;
height: 353.38px;
margin-left:20.5px;
margin-right:20.5px;
color:rgba(0, 0, 0, 0.3) ;
h4{
color: rgba(0, 0, 0, 0.3);
font-size: 2.25em;
font-style: normal;
font-weight: 500;
line-height: 45px;
letter-spacing: 0em;
text-align: left;


}

:hover{
    box-shadow: 0px 15px 30px rgba(50, 2, 52, 0.15);
}
.d-info{
  height:120px;
  width:100%;
  padding:20px;
  margin-left:10px;
  margin-top:10px;
  font-weight:bolder;
}
  p.{
   
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:0px;
  }
  
 }

.bottom{
    display:inline-flex;
    width:100%;
    height:70.42px;
    text-align:center;
    margin-bottom:40px;
    font-size: 14px;
    line-height: 17px;

    .first{
      width:50%;
      border-right: 3px solid rgba(51, 51, 51, 0.3);
      margin-left:10px;
      padding:5px;
      // transform: rotate(90deg);
      
    }
    .second{
      width:50%;
      margin-left:10px;
      padding:5px;
      
    }
}
.icons{
  display:inline-flex;
  width:100%;
  margin:20px 5px 5px 10px;
  padding-top:20px;
  
  .icon1{
    margin-left:20px;
  }
  .icon2{
    margin-left:45%;
  }
   }


 
`;

function DisplayBoxLg(props) {
  return (
    <Boxlg>
      <div className="icons">
        <span className="icon1">
          <img src={props.icon1} alt="" />
        </span>
        <span className="icon2">
          <img src={props.icon2} alt="" />
        </span>
      </div>
      <div className="d-info">
        <h5 style={{color:'rgba(0, 0, 0, 0.3)', fontWeight:'bold', fontSize:'18px'}}>{props.title}</h5>
        <h4 style={{color:'#590A5B', fontSize:'24px'}}>{props.info}</h4>
      </div>
      <div className="bottom">
        <div className="first ">
          <p>{props.secondarytitle1}</p>
          <p style={{color:'#000'}}>{props.secondaryinfo1}</p>
        </div>
        <div className="second">
          <p>{props.secondarytitle2}</p>
          <p style={{color:'#000'}}>{props.secondaryinfo2}</p>
        </div>
      </div>
    </Boxlg>
  );
}

export default DisplayBoxLg;
