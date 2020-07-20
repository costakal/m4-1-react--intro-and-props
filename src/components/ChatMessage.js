import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  return (
    <div className="user-chat-message">
      <div>
        <p className="user-name">{props.message.user.username}</p>
        <p className="user-chat-bubble">{props.message.body}</p>
      </div>
      <img
        className="user-photo"
        src={props.message.user.avatar}
        alt={props.message.user.username}
      ></img>
    </div>
  );
};

const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <img
        className="photo"
        src={props.message.user.avatar}
        alt={props.message.user.username}
      ></img>
      <div>
        <p className="name">{props.message.user.username}</p>
        <p className="chat-bubble">{props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
