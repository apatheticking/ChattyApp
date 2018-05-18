import React, {Component} from 'react';

  function ChatBar (props) {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={props.currentUser.name}
        onKeyPress={
            (event) => {
              if(event.key === 'Enter') {
                props.onUserNameSubmit(event.target.value);
              }
            }
          }
        />
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

// class ChatBar extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: this.props.currentUser.name,
//       message: ""
//     };
//   }

//   render(){
//     return (
//       <footer className="chatbar">
//         <input className="chatbar-username" defaultValue={this.state.userName} onKeyPress={}/>
//         <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
//       </footer>
//     );
//   }
// }

export default ChatBar;