import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MessageList = () => {
  const messages = useSelector((state) => state.msg.messages);

  return(
    <div className="message-list">
      {messages.map((message) => 
        <div className="message" key={message.id}>{message.text}</div>
      )}
    </div>
  )
}

export default MessageList;