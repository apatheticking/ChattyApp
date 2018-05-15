import React, { Component } from 'react';
import Message from './Message.jsx';

// class MessageList extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render(){
//     return(
//       <div className="messages">
//         {
//           this.props.messages.map((message) => {
//             <Message message={message} />
//           })
//         }
//       </div>
//     );
//   }
// }

function MessageList (props){
  const messageListItem = props.messages.map((message, i) => {
           return <Message key={i} messageContent={message} test="this works"/>
        });

  return (
    <div className="messages">
      {messageListItem}
    </div>
  );
}

export default MessageList;