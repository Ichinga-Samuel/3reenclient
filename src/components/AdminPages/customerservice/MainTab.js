import React, { Component } from "react";
import MessageTabs from "./MessageTabs";
import Tab from "./Tab";
import SendMessageForm from "./SendMessageForm";

export class MainTab extends Component {
  state = {
    selected: "",
    senders: [
      {
        name: "Jack Hanniel",
        username: "Admin 001",
        messages: [
          {
            username: "Admin 001",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna 1.",
            date: "02/01/21",
            time: "08 35pm",
          },
          {
            username: "Admin 001",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna.",
            date: "02/01/21",
            time: "08 35pm",
          },
          {
            username: "self",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna.",
            date: "02/01/21",
            time: "08 35pm",
          },
        ],
      },
      {
        name: "Jack Hanniels",
        username: "Admin 002",
        messages: [
          {
            username: "Admin 002",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna 2.",
            date: "02/01/21",
            time: "08 35pm",
          },
          {
            username: "Admin 002",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna.",
            date: "02/01/21",
            time: "08 35pm",
          },
          {
            username: "self",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna.",
            date: "02/01/21",
            time: "08 35pm",
          },
        ],
      },
      {
        name: "Jack Danniels",
        username: "Admin 003",
        messages: [
          {
            username: "Admin 003",
            text:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel massa magna 3.",
            date: "02/01/21",
            time: "08 35pm",
          },
          {
            username: "Admin 003",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sagittis elementum turpis eleifend pharetra, arcu, tempor in.",
            date: "02/01/21",
            time: "08 35pm",
          },
          {
            username: "self",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sagittis elementum turpis eleifend pharetra, arcu, tempor in.",
            date: "02/01/21",
            time: "08 35pm",
          },
        ],
      },
    ],
  };

  setSelected = (sender) => {
    this.setState({ selected: sender });
  };
  render() {
    return (
      <div>
        <MessageTabs
          senders={this.state.senders}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab senders={this.state.senders} selected={this.state.selected} />
          <SendMessageForm isSelected={this.state.selected} />
        </MessageTabs>
      </div>
    );
  }
}

export default MainTab;
