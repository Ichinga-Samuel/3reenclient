import React from 'react';
import QAMainLayout from '../QALayout/QAMainLayout';

const QAMessages = () => {
    return (
        <QAMainLayout pageTitle="Message">
            <div className="container">
                <div className="chatbox">
                    <div className="middle">
                        <div className="voldemort">
                            <div className="incoming">
                                <div className="bubble">Hey, Father Day is coming up..</div>
                                <div className="bubble">What are you getting.. Oh, oops sorry dude.</div>
                            </div>
                            <div className="outgoing">
                                <div className="bubble lower">Nah, it cool.</div>
                                <div className="bubble">
                                    Well you should get your Dad a cologne. Here smell it. Oh wait! ...
                                </div>
                            </div>
                            <div className="typing">
                                <div className="bubble">
                                    <div className="ellipsis one"></div>
                                    <div className="ellipsis two"></div>
                                    <div className="ellipsis three"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="chat">
                            <input type="text" placeholder="Type a message..." />
                            <button type="submit">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="messages"></div>
                <div className="profile-inb">
                    <div className="name2">
                        <p className="email">Inbox</p>
                    </div>
                </div>
                <ul className="people">
                    <li className="person focus">
                        <span className="title">Voldemort </span>
                        <span className="time">2:50pm</span>
                        <br />
                        <span className="preview">What are you getting... Oh, oops...</span>
                    </li>
                    <li className="person">
                        <span className="title">Ron</span>
                        <span className="time">2:25pm</span>
                        <br />
                        <span className="preview">Meet me at Hogsmeade and bring...</span>
                    </li>
                    <li className="person">
                        <span className="title">Hermione</span>
                        <span className="time">2:12pm</span>
                        <br />
                        <span className="preview">Have you and Ron done your hom...</span>
                    </li>
                </ul>
            </div>
        </QAMainLayout>
    );
};

export default QAMessages;
