import React, {Component} from 'react';

function ChatBar (props) {
  return (
    <footer className="chatbar">
      <input className="chatbar-username" defaultValue={props.currentUser.name} />
      <input className="chatbar-message"
        onKeyPress={
          (event) => {
            if(event.key === 'Enter') {
              props.onMessageSubmit(event.target.value);
              event.target.value = ''
            }
          }
        }
        placeholder="Type a message and hit ENTER" />
    </footer>
  );
}

export default ChatBar;