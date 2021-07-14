import React, { useEffect, useState } from 'react';
import CompanyRating from './CompanyRating';
import Styled from 'styled-components';
import axios from 'axios';
const Card = Styled.div`



   
   button{
       width:203px;
       height:82.02px;
       margin:0;
       margin-top:20px;
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
    display:flex;
    width: 50%;
    width: 1121px;
height:123.02px;
// border:1px solid black;
margin-right:21px;
margin-left:21px;
align-items:center;
margin-top:10px;
text-transform:capitalize;
box-shadow: 0px 15px 30px rgba(50, 2, 52, 0.15);

:hover{
  box-shadow: 0 8px 8px -7px black;
}
    margin: auto;
   
}
.rating{
    width:290px;
    margin: auto;
}
.companydetails b {
    margin-left:20px;
    font-size:18px;
    color:#000000;
}

`;

function Company() {
    const APP_BASE_URL = process.env.APP_BASE_URL;
    const token = localStorage.getItem('token');
    useEffect(async () => {
        // return () => {};
        try {
            const response = await axios.get(`${APP_BASE_URL}/users/company`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setCompany(response.data.users)
            console.log(response);
        } catch (error) {
            if(error){
                console.log(error)
            }
        }
    }, []);
    const [buttonText, setButtonText] = useState('Tap To Select');
    const changeText = (text) => setButtonText(text);
    const [getCompany, setCompany] = useState([]);
    return (
        <Card>
            {getCompany.map(eachName => (
                <div className='companydetails'>
                    <b>{eachName.fullName}</b>
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
                </div>
            ))}
        </Card>
        
    );
}

export default Company;
