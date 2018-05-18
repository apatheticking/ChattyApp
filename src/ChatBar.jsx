import React, {Component} from 'react';

function ChatBar (props) {
  return (
    <footer className="chatbar">
      <input className="chatbar-username" defaultValue={props.currentUser.name}
      onKeyPress={
          (event) => {
            if(event.key === 'Enter') {//handles user name change on enter
              props.onUserNameSubmit(event.target.value);
            }
          }
        }
      />
      <input className="chatbar-message"
        onKeyPress={
          (event) => {
            if(event.key === 'Enter') {//handles message input on enter
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