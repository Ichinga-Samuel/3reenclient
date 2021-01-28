import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import Styled from "styled-components";

export class MessageTabs extends Component {
  render() {
    const TabStyles = Styled.div`
        display:flex;
        width:288px;
        height:789px;
        ul{
          margin-top:61px;
          .mini-header{
            margin:10px 0 0 45px;
            h4{
              font-size: 30px;
              line-height: 37px;
              display: flex;
              align-items: center;
              text-align: center;
              color: rgba(0, 0, 0, 0.67);
            }
           
          }
            li{
              
                list-style-type: none;
                .active{
                    border-left: 7px solid #590A5B;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
                    color: #590A5B;
                    
                }
            }
            
        }
        button{
            width: 288px;
            height: 79px; 
            border:none;
            background:none;
            margin:0;
            
            :focus {
                outline: none;
                text-decoration: none;
              }
            :hover{
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
            }
           
        }

        `;

    return (
      <TabStyles>
        <ul>
          <div className="mini-header ">
            {" "}
            <h4>Inbox</h4>
          </div>

          {this.props.senders.map((sender) => {
            const active = sender.name === this.props.selected ? "active " : "";
            return (
              <li key={Math.random()}>
                <button
                  className={" " + active}
                  onClick={() => this.props.setSelected(sender.name)}
                >
                  <ContactDetails
                    isSelected={sender.name === this.props.selected}
                    name={sender.name}
                    username={sender.username}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <div>{this.props.children}</div>
      </TabStyles>
    );
  }
}

export default MessageTabs;
