import React from "react";
import { MessageIcon } from "../icons/Icons";
import Link from "next/dist/client/link";
import Styled from "styled-components";

const ProfileContainer = Styled.div`

height:130px;
width:1125px;

button{
  border:none;
  background:none;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  :focus {
    border: 0;
    outline: none;
  }
}
}
.backbtn{
  position:absolute;
  margin: 35px 0 0 20px
 
}
.avatar{
  display:inline-flex;
  width:auto;
  height:40px;
  position:absolute;
  left: 70%;
  margin-top:15px;
 

  .messageicon{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right:10px;
    text-align:center;
    padding:8.5px;
    
  }
  .notificon{
    padding:7px;
  }
  img{
    width:24px;
    height:25px;
    margin:auto;
    margin-right:10px;
    padding:2px;
  }
  .details{
    display:inline-flex;
    margin:auto;
    height:40px;
   
    p{
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      color:#590A5B;
      margin:auto;
    }
    img#avatar{
      width:30px;
      height:30px;
      margin:4px;
    }
  }
}
`;

function Profile() {
  return (
    <ProfileContainer>
     

      <div className="avatar">
        <Link href="/admin/login">
          <div className="messageicon">
            <MessageIcon />
          </div>
        </Link>
        <Link to="/admin/login">
          <div className="notificon">
            <img
              src=" /icon/notification.png"
              alt="notifications"
              id="notification"
            />
          </div>
        </Link>
        <div className="details">
          <img src=" /icon/avatar-small.png" alt="avatar" id="avatar" />
          <div>
            <p>Jack Hanniel</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
