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
      messages: [
        {
          id: 123,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 341,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  handleMessageSubmit = (message) => {
    const newMessage = {
      id: Math.floor((Math.random() * 100) + 1),
      username: this.state.currentUser.name,
      content: message
    }
    this.state.messages.push(newMessage);
    this.setState(this.state.messages);
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} onMessageSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }
}
export default App;
