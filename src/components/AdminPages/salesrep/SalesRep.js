import React, { useState } from 'react';
import SalesRepGraph from './SalesRepGraph';
import Rating from '../PageBuilder/Rating';
import Styled from 'styled-components';

const Card = Styled.div`
width: 1120px;
text-transform:capitalize;
margin-right:21px;
margin-left:21px;


:hover{
  box-shadow: 0px 15px 30px rgba(50, 2, 52, 0.15);

}
.details{
  display:inline-flex;
  width: 1120px;
  height:82.02px;
  margin:auto;
  
}
.thumbnail{
  width: 51.37px;
  height: 51.37px;
  margin:auto;

 }
.btn-container{
  width:203px;
  height:82.02px;
  text-align:left;
  text-transform:lowercase;
  color:#FFAF38;
  
  button{
    background-color:transparent;
    border: none;

    :focus {     
     outline:none;
    }
     .arrow {
       border: solid #FFAF38;;
       border-width: 0 2px 2px 0;
       display: inline-block;
       padding: 3px;
     }
    
     .right {
       transform: rotate(-45deg);
       -webkit-transform: rotate(-45deg);
     }
     .up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
   }
}
   
.SRdetails{
    width: 50%;
    margin: auto;
   
}
.rating{
    width:290px;
    margin: auto;
}
.graphbox{
  margin: auto;
}

`;

function SalesRep() {
    const [showGraph, setShowGraph] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setShowGraph(!showGraph);
        setIsActive(!isActive);
    };

    return (
        <Card>
            <div className="details">
                <div className="thumbnail">
                    <img src="/img/thumbnail.png" alt="" />
                </div>

                <div className="SRdetails">
                    {' '}
                    <div>
                        <b> full name of SR Monitor </b> | Mid-Level/Senior...
                    </div>
                    <div>state | location</div>
                </div>
                <div className="rating">
                    <div> ratings | reviews</div>{' '}
                    <div>
                        <Rating />
                    </div>
                </div>
                <div className="btn-container">
                    more
                    <button onClick={() => handleClick()}>
                        <i className={isActive ? 'arrow up' : 'arrow right'}></i>
                    </button>
                </div>
            </div>
            <div className="graphbox">{showGraph ? <SalesRepGraph /> : null}</div>
        </Card>
    );
}

export default SalesRep;
