import React from 'react';
import Styled from 'styled-components';

const BoxMd = Styled.div`
    display:inline-flex;
    justify-content:space-around;
    width: 1121px;
    height: 164.24px;
    margin-left:20.5px;
    margin-right:20.5px;
    color:rgba(0, 0, 0, 0.3) ;
    text-align:center;
    margin:auto;
    h4{
      color: rgba(0, 0, 0, 0.3);
      font-size: 2.25em;
      font-style: normal;
      font-weight: 500;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: center;
    }
   :hover{
    box-shadow: 0px 15px 30px rgba(50, 2, 52, 0.15);
   }
.box1,.box2, .box3{
    height:79.43px;
    width:33.333333333%;
    margin:auto;
}
.box1, .box2{
    border-right: 1px solid #000;
}
`;

function DisplayBoxMd(props) {
    return (
        <BoxMd>
            <div className="box1">
                <p style={{ fontSize: '18px' }}>{props.logistics}</p>
                <h4>{props.logisticamount}</h4>
            </div>
            <div className="box2">
                <p style={{ fontSize: '18px' }}>{props.ads}</p>
                <h4>{props.adsamount}</h4>
            </div>
            <div className="box3">
                <p style={{ fontSize: '18px' }}>{props.products}</p>
                <h4>{props.productamount}</h4>
            </div>
        </BoxMd>
    );
}

export default DisplayBoxMd;
