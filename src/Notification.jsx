import React, { Component } from 'react';

function Notifcation (props){
  return (
    <div className="notification">
      <span className="notification-content">{props.messageContent.content}</span>
    </div>
  );
}

export default Notifcation;