import React from 'react';
import Styled from 'styled-components';

const Boxlg2 = Styled.div`
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
    display:block;
    width:100%;
    height:70.42px;
    text-align:center;
    margin-bottom:40px;
    font-size: 14px;
    line-height: 17px;
    

    button{
        width: 297.99px;
        height: 36.9px;
        background: #C4C4C4;
        color:white;
        margin:5px;
        border:none;
    }

    .first{
      
      margin-left:10px;
      padding:5px;
      // transform: rotate(90deg);
      
    }
    .second{
     
      margin-left:10px;
      padding:5px;
      
    }
}
.icons{
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

function DisplayBoxLg2(props) {
    return (
        <Boxlg2>
            <div className="icons">
                <span className="icon1">
                    <img src={props.icon1} alt="" />
                </span>
                <span className="icon2">
                    <img src={props.icon2} alt="" />
                </span>
            </div>
            <div className="d-info">
                <p>{props.title}</p>
                <h4>{props.info}</h4>
            </div>
            <div className="bottom">
                <button>View Audit</button>
                <button>View Inventory</button>
            </div>
        </Boxlg2>
    );
}

export default DisplayBoxLg2;
