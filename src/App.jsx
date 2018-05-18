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

//----------Life cycle functions--------------------
  componentDidMount() {
    //creates the connection to the server
    const localhost = "ws://localhost:3001";
    this.socket = new WebSocket(localhost);
    console.log("Connected to server");

    //when a message is sent back from the server it will handle either the number
    //of clients currently on the server or the message that will be added to the state
    this.socket.onmessage = (event) => {
      let message = JSON.parse(event.data);
      if(message.type === "clients"){
        this.setState({clients: message.number});//updates number of users
      } else {
        this.setState(previousState => ({
          messages: [...previousState.messages, message],//updates the message array in state
        }));
      }
    };
  }

//------------------User input functions--------------------------
  //handles the input from chatbar component
  handleMessageSubmit = (message) => {
    //regular expression to handle if the message sent by the user is an image link or not
    let imageCheck = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|JPG|GIF|PNG)/g;
    let type = (imageCheck.test(message) ? "imageMessage" : "postMessage");
    //creates an object to be sent to the server
    const newMessage = {
      type: type,
      username: this.state.currentUser.name,
      content: message
    }
    //sends message to server
    this.socket.send(JSON.stringify(newMessage));
  }

  //handles the user changing their screen name
  //creates an object to be sent to the server and updates the state of ther user name
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
//---------------Render--------------------------
  render() {
    return (
      <div>
        <NavBar users={this.state.clients}/>
        <MessageList messages={this.state.messages}/>
        <ChatBar
          currentUser={this.state.currentUser}
          onMessageSubmit={this.handleMessageSubmit}
          onUserNameSubmit={this.handleUserNameSubmit}
        />
      </div>
    );
  }
}
export default App;
