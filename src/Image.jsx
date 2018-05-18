import React, { Component } from 'react';

const imageCss = {
  'max-width': '60%'
}

function Image (props){
  return(
    <main className="messages">
      <div className="messages">
        <span className="message-username">{props.messageContent.username}</span>
        <img src={props.messageContent.content} style={imageCss}/>
      </div>
    </main>
  );
}

export default Image;