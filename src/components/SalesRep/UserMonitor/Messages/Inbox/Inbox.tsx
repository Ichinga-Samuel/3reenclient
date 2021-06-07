import React, { useState } from 'react';
import axios from 'axios';

import { InboxStyled } from './Inbox.styled';
import { apiUrl } from '@/components/SalesRep/lib/auth';

const Messages = ({ name, roomId, senderId }) => {
    const [msgRead, setMsgRead] = useState(false);
    const [chatMsg, setChatMsg] = useState([]);
    const [chatErr, setChatErr] = useState('');
    const [body, setBody] = useState('');

    const token = localStorage.getItem("userToken");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const displayChat = async() => {

        setMsgRead(!msgRead);
        try {
            const { data } = await axios.get(`${apiUrl}messages/userChat/${roomId}`, config);
            console.log(data);
            setChatMsg(data.messages)

        } catch(err) {
            console.log(`Error: ${err}`);
            setChatErr("Please login to see chat")
            
        }
        // const { data } = await axios.get(`${apiUrl}messages/userChat/${roomId}`);
        // console.log(data);
        // setChatMsg(data.messages)
        
    };

    const handleChange = (evt:any) => {
        setBody(evt.target.value);
    }

    const chatSubmit = async(evt:any) => {
        evt.preventDefault();
        try {
            const { data } = await axios.post(`${apiUrl}messages/messageUser/${senderId}`,{ body }, config);
            console.log(data);
            // setChatMsg(data.messages)

        } catch(err) {
            console.log(`Error: ${err}`);
            setChatErr("sorry can't send message")
        }
        
    }

    return (
        <>
        <InboxStyled>
            <div className="container">
                <div className="icons user__details" onClick={displayChat}>
                    <div className="avatar">
                        <img src="/Icons/Avatar.svg" alt="" />
                    </div>

                    <div className="user__name">
                        <h5>{name}...</h5>
                        <p>{msgRead ? <span>Close message</span> : <span>Read message</span>}</p>
                        {/* <p>Admin 002</p> */}
                    </div>
                </div>
            </div>
        </InboxStyled>

        <div className="chat">
            <div className="card message__box col-lg-6">
                <div className="card-body">
                    {
                        msgRead && chatMsg.map(chat => (
                            <>
                                <p key={chat._id}> { chat.body } </p>
                                
                            </>
                        ))
                    }

                    {
                        chatErr && <p>{ chatErr }</p>
                    }
                    {
                        chatMsg && msgRead ?
                        <form onSubmit={chatSubmit}>
                            <textarea name="body" id="reply" placeholder="reply msg" onChange={handleChange} value=""></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        :
                        null
                    }
                   
                </div>
            </div>
            {/* <div className="card message__box col-lg-6">
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptatum. Quod
                        ratione possimus nisi corrupti, sit quia, culpa deleniti voluptatibus recusandae at
                        dolor esse ipsum laborum minus vero! Minima, alias.
                    </p>
                </div>
            </div> */}
        </div>

        </>
    );
};

export default Messages;
