import React, { Component } from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';
import Image from './Image.jsx'

function MessageList (props){
  //this array.map handles the incoming messages from the server
  //depending on what type of message is coming in it render the
  //appropriate component
  const messageListItem = props.messages.map((message, i) => {
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