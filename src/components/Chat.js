import React from "react";
import "../styles/Chat.css";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";
function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatRoom />
      <ChatFooter />
    </div>
  );
}

export default Chat;
