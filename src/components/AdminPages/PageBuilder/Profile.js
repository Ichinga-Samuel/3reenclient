import React from "react";
import { MessageIcon } from "../../Admin/icons/Icons";
import {useRouter} from 'next/router'
import Link from 'next/link'
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
.msg-num{
  padding: 4px;
  clip-path: circle();
  position: absolute;
  top: 8px;
  right:165px;
  color:#fff;
  transform: translate(-10px,-10px);
  background: #EB5757;
}
.notify{
  padding: 4px;
  clip-path: circle();
  position: absolute;
  top: 8px;
  right:120px;
  color:#fff;
  transform: translate(-10px,-10px);
  background: #FFAF38;
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
    background: ${(props) =>
      props.active ? "rgba(89, 10, 91, 0.5)" : "white"};
      
      box-shadow: ${(props) =>
        props.active ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
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

function Profile(props) {
  return (
    <ProfileContainer active={props.active}>
      {props.active ? (
        <div className="backbtn">
          <Link href="/">
            <button>
              <img src="../../img/back-arrow.png" alt="back" /> Back
            </button>
          </Link>
        </div>
      ) : null}

      <div className="avatar">
        <Link href="/messages">
          <a>
          <div className="messageicon">
            {" "}
            <MessageIcon />
            <p className='msg-num'>2</p>
          </div>{" "}
          </a>
        </Link>
        <Link href="/">
          <a>
          <div className="notificon">
            <img 
               src='/img/notify.png'
              alt="notifications"
              id="notification"
            />{" "}
            <p className='notify'>1</p>
          </div>
          </a>
        </Link> 
        <div className="details">
          {" "}
          <img src='/img/User.png' alt="avatar" id="avatar" />
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
