import React, { Component } from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';
import Image from './Image.jsx'

function MessageList (props){

  const messageListItem = props.messages.map((message, i) => {
    console.log(message);
    if(message.type === "incomingMessage"){
      return <Message key={i} messageContent={message}/>
    } else if (message.type === "incomingNotification"){
      return <Notification key={i} messageContent={message}/>
    } else if (message.type === "incomingImage"){
      return <Image key={i} messageContent={message}/>
    }
  });

  return (
    <div className="messages">
      {messageListItem}
    </div>
  );
}

export default MessageList;