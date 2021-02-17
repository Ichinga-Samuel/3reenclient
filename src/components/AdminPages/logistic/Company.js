import React, { useState } from 'react';
import CompanyRating from './CompanyRating';
import Styled from 'styled-components';

const Card = Styled.div`
display:inline-flex;
width: 1121px;
height:82.02px;
// border:1px solid black;
margin-right:21px;
margin-left:21px;
text-transform:capitalize;
box-shadow: 0 8px 25px -25px black;
:hover{
  box-shadow: 0 8px 8px -7px black;
}


   
   button{
       width:203px;
       height:82.02px;
       margin:0;
       border: 1px solid #FFAF38;
       :focus {     
        background-color:#FFAF38;
        outline:none;
        box-sizing: border-box;
        box-shadow: 0 8px 6px -8px black;
      }

   }

.companydetails{
    width: 50%;
    margin: auto;
   
}
.rating{
    width:290px;
    margin: auto;
}

`;

function Company() {
    const [buttonText, setButtonText] = useState('Tap To Select');

    const changeText = (text) => setButtonText(text);
    return (
        <Card>
            <div className="companydetails">
                {' '}
                <div>
                    <b> full name of logistic company </b> | office address
                </div>
                <div>state | location</div>
            </div>
            <div className="rating">
                <div> ratings | reviews</div>{' '}
                <div>
                    <CompanyRating />
                </div>
            </div>
            <div className="btn-container">
                <button onClick={() => changeText('Selected Logistic Company')}>{buttonText}</button>
            </div>
        </Card>
    );
}

export default Company;
