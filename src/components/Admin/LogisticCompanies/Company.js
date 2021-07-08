import React, { useEffect, useState } from 'react';
import CompanyRating from './CompanyRating';
import Styled from 'styled-components';
import axios from 'axios';
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
       margin-right:100px;
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
    const [getCompany, setCompany] = useState([]);
    const changeText = (text) => setButtonText(text);
    const APP_BASE_URL = process.env.APP_BASE_URL;
    const token = localStorage.getItem('qatoken');
    useEffect(async () => {
        try {
            const config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }
            const res = await axios.get(`${APP_BASE_URL}/users/company`, config);
            setCompany(res.data.users);
            console.log(res.data.users)
        } catch (error) {
            if(error){
                console.log(error)
            }
        }
}, [])
    return (
        <Card>
            <div className="companydetails">
                {' '}
                {getCompany.map(eachName => (
                    <div style={{fontSize:'18px', fontWeight:'bold'}}>
                        <b>{eachName.fullName}</b>
                    </div>
                ))}
                {/* <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    <b> full name of logistic company </b> | office address
                </div>
                <div style={{ fontSize: '16px' }}>state | location</div> */}
            </div>
            <div className="rating">
                <div style={{ fontSize: '16px' }}> ratings | reviews</div>{' '}
                <div>
                    <CompanyRating />
                </div>
            </div>
            <div className="btn-container">
                <button
                    style={{ fontSize: '18px', color: '#fff' }}
                    onClick={() => changeText('Selected Logistic Company')}
                >
                    <div>
                        {buttonText == 'Tap To Select' ? (
                            <h2 style={{ color: '#FFAF38', fontSize: '18px' }}>Tap To Select</h2>
                        ) : (
                            'Selected Logistic Company'
                        )}
                    </div>
                </button>
            </div>
        </Card>
    );
}

export default Company;
