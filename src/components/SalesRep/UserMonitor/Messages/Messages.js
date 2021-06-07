import React, {useState, useEffect, useRef} from 'react';
import SalesRepSidebar from '../../Sidebar/Sidebar';

import SalesRepHeader from '../Header/Header';
import SalesInbox from './Inbox/Inbox';
import axios from 'axios';

import { MessagesStyled } from './Messages.styled';
import { apiUrl } from '../../lib/auth';


const Messages = () => {
    const isMount = useRef(false)
    const [allMsgs, setAllMsgs] = useState([]);
    // const [nonDuplicateChat, setnonDuplicateChat] = useState(initialState)

    // function unDuplicateArraySingleValues(array) {
    //     // Check if we are dealing with an Array that is not empty
    //     if (!array || !Array.isArray(array) || array.length === 0) {
    //       return array;
    //     }
      
    //     // Return a Array of unique values thanks to the Set
    //     return [...new Set(array)];
    //   }

    // function unDuplicateArrayObjects(array, propertyName) {
    //     if (!array || !Array.isArray(array) || array.length === 0 || !propertyName) {
    //       return array;
    //     }
    //     // Create an Array off the values of the keys we want to check
    //     let objectArrayKeys = array.map(item => item[propertyName]);
      
    //     // Remove duplicate values from those values with our previous function
    //     let uniqueKeys = unDuplicateArraySingleValues(objectArrayKeys);
      
    //     // Return an Array with only unique Objects
    //     return uniqueKeys.map(key => array.find(item => item[propertyName] === key));
    //   }


    useEffect(() => {
        isMount.current = true
        const getAllMsgs = async() => {
            // const userid = localStorage.getItem("userid");
            try {
                const { data } = await axios.get(`${apiUrl}messages`);
                debugger;
                // if(data.doc.receiver === userid && isMount.current) {
                //     setAllMsgs(data.doc);
                // }
                if(isMount.current) {
                    // const dataArr = data.doc;
                    // setAllMsgs(unDuplicateArrayObjects(dataArr, "roomId"));
                    const dataArr = data.doc;
                    console.log(dataArr);
                    const mapArr =  [...new Map(dataArr.map(item => [item.roomId, item])).values()];
                    // let mapArr = dataArr.map(data => {
                    //     return [data.roomId, data]
                    // });
                    // let result = new Map(mapArr);
                    // const newArr = [...result.values()]
                    setAllMsgs(mapArr)
                }
                
            } catch(err) {
                console.log(`Err: ${err}`);
            }
        }
        getAllMsgs();
        
        // clean up
        return () => {
            isMount.current = false;
        }
        
    }, [])
    return (
        <MessagesStyled>
            <SalesRepSidebar />
            <div className="contain container">
                <SalesRepHeader />

                <h2>Messages</h2>

                <h3>Inbox</h3>
                <div>
                    {
                        allMsgs.map(message => (
                            <SalesInbox key={message._id} name={message.body.substring(0, 15)} roomId={message.roomId} senderId={message.senderId} />
                        ))
                    }
                    {/* <SalesInbox name={'Jack Hanniel'} />
                    <SalesInbox name={'Jack Hanniel'} />

                    <SalesInbox name={'Jack Hanniel'} /> */}
                </div>
                {/* <div className="chat">
                    <div className="card message__box col-lg-6">
                        <div className="card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptatum. Quod
                                ratione possimus nisi corrupti, sit quia, culpa deleniti voluptatibus recusandae at
                                dolor esse ipsum laborum minus vero! Minima, alias.
                            </p>
                        </div>
                    </div>
                    <div className="card message__box col-lg-6">
                        <div className="card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptatum. Quod
                                ratione possimus nisi corrupti, sit quia, culpa deleniti voluptatibus recusandae at
                                dolor esse ipsum laborum minus vero! Minima, alias.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </MessagesStyled>
    );
};

export default Messages;
