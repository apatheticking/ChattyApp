import React, {Component} from 'react';

function Message(props) {
  return (
    <main className="messages">
      <div className="message">
        <span className="message-username">{props.messageContent.username}</span>
        <span className="message-content">{props.messageContent.content}</span>
      </div>
    </main>
  );
}

export default Message;