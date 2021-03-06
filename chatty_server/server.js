// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  const numOfUser = {
    type: "clients",
    number: wss.clients.size
  }
  //wss.send(JSON.stringify(numOfUser));
  wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(numOfUser));
    });

  ws.on('message', function incoming(data) {
    let message = JSON.parse(data);

    if (message.type === "postMessage"){
      message.id = uuidv1();
      message.type = "incomingMessage";
    } else if (message.type === "postNotification"){
      message.type = "incomingNotification";
    } else if (message.type === "imageMessage"){
      message.type = "incomingImage";
    }

    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(message));
    });
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    const numOfUser = {
      type: "clients",
      number: wss.clients.size
    }
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(numOfUser));
    });
  });
});



