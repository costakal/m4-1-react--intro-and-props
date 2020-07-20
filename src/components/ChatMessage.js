import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message">
      <img
        className="user-photo"
        src={props.message.user.avatar}
        alt={props.message.user.username}
      ></img>
      <div>
        <p className="user-name">{props.message.user.username}</p>
        <p className="chat-bubble">{props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
