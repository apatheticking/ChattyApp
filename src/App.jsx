import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
      clients: 0
    };
  }

  componentDidMount() {
    const localhost = "ws://localhost:3001";
    this.socket = new WebSocket(localhost);
    console.log("Connected to server");

    //when a message is sent back from the server
    this.socket.onmessage = (event) => {
      let message = JSON.parse(event.data);
      if(message.type === "clients"){
        this.setState({clients: message.number});
      } else {
        this.setState(previousState => ({
          messages: [...previousState.messages, message],
        }));
      }
    };
  }

  handleMessageSubmit = (message) => {
    let imageCheck = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|JPG|GIF|PNG)/g;
    let type = (imageCheck.test(message) ? "imageMessage" : "postMessage");

    const newMessage = {
      type: type,
      username: this.state.currentUser.name,
      content: message
    }
    //sends message to server
    this.socket.send(JSON.stringify(newMessage));
  }

  handleUserNameSubmit = (userName) => {
    const contentMessage = `${this.state.currentUser.name} has change their name to ${userName}`;
    const newUser = {name: userName}
    const newMessage = {
      type: "postNotification",
      username: userName,
      content: contentMessage
    }
    this.setState({currentUser: newUser});
    this.socket.send(JSON.stringify(newMessage));
  }

  render() {
    return (
      <div>
        <NavBar users={this.state.clients}/>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser}
          onMessageSubmit={this.handleMessageSubmit}
          onUserNameSubmit={this.handleUserNameSubmit}
        />
      </div>
    );
  }
}
export default App;
