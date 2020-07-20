import React from "react";

import "./ChatStream.css";
import ChatMessage from "./ChatMessage";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = ({ messages, currentUser }) => {
  return (
    <section className="chat-stream">
      {messages.map((message) => {
        if (currentUser.username === message.user.username) {
          return (
            <ChatMessage
              key={message.id}
              message={message}
              messageType="sent"
            />
          );
        } else {
          return (
            <ChatMessage
              key={message.id}
              message={message}
              messageType="received"
            />
          );
        }
      })}
    </section>
  );
};

export default ChatStream;
