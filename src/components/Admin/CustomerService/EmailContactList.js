import React from 'react';
import Styled from 'styled-components';

const EmailContactListStyle = Styled.div`
.flex-container{
    background-color:#fff;
    display:flex;
    min-height:100vh;
    align-items:center;
    justify-content:center;
}
.inner-flex{
    display:flex;
    flex-direction:column;
    margin-right:600px;
    margin-top:100px;    
    font-family: MADE TOMMY;
}
img{
    position: absolute;
    width: 500px;
    height: 450px;
    left: 633px;
    top: 150px;
}
h1{
    font-size:64px;
}
button{
    margin-right:300px;
    color:#590A5B;
    padding:10px;
    margin-top:15px;
    font-size:18px;
    border: 2px solid #590A5B;
    width:260px;
}
.delivery{
    width:300px;
}
`;
const EmailContactList = () => {
    return (
        <EmailContactListStyle>
            <div className="flex-container">
                <div className="inner-flex">
                    <h1>EMAIL</h1>
                    <h1>CONTACT LIST</h1>
                    <button>Vendor Contact List</button>
                    <button>Customer Contact List</button>
                    <button className="delivery">Delivery Agent Contact List</button>
                </div>
                <img src="../../img/Frame.png" alt="Frame"></img>
            </div>
        </EmailContactListStyle>
    );
};

export default EmailContactList;
