import { WebSocketServer } from 'ws';

// Create a WebSocket server instance listening on port 8080
const wss = new WebSocketServer({ port: 8080 });

console.log('WebSocket Echo Server is running on ws://localhost:8080');

// Event listener for when a client connects to the server
wss.on('connection', (ws) => {
  console.log('A new client connected!');

  // Event listener for when the server receives a message from the client
  ws.on('message', (data) => {
    // Convert the received data (Buffer) to a string
    const message = data.toString();
    console.log(`Received message: ${message}`);

    // Echo the message back to the client
    ws.send(message);
    console.log(`Echoed message: ${message}`);
  });

  // Event listener for when the client disconnects
  ws.on('close', () => {
    console.log('A client disconnected');
  });

  // Optional: Handle errors on the WebSocket connection
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

console.log('Server is ready to accept WebSocket connections...');
