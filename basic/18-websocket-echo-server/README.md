# WebSocket Echo Server

A simple real-time echo server built with Node.js and TypeScript using the `ws` WebSocket library. This project demonstrates the basics of WebSocket communication by echoing back any message received from connected clients.

## Features

- **Real-time Communication**: Uses WebSockets for bidirectional, real-time messaging.
- **Echo Functionality**: Automatically echoes back any message sent by a client.
- **TypeScript Support**: Written in TypeScript for better type safety and development experience.
- **Docker Support**: Containerized for easy deployment and testing.
- **No Database**: Lightweight implementation with no external dependencies.
- **No Security**: Intended for educational purposes; not suitable for production use.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

## Installation

1. Clone or download this repository.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

## Usage

### Running Locally

To start the server in development mode (with auto-reload):

```bash
npm run dev
```

To start the server normally:

```bash
npm start
```

The server will start on `ws://localhost:8080`.

### Running with Docker

Build and run the container using Docker Compose:

```bash
docker compose up --build
```

The server will be accessible at `ws://localhost:8080`.

## Testing the Server

You can test the WebSocket echo server using various tools:

### Using wscat (Command Line)

Install wscat globally:

```bash
npm install -g wscat
```

Connect to the server:

```bash
wscat -c ws://localhost:8080
```

Type any message and press Enter. The server will echo it back.

### Using Browser Console

Open your browser's developer console and run:

```javascript
const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => console.log('Connected');
ws.onmessage = (event) => console.log('Received:', event.data);
ws.send('Hello, WebSocket!');
```

### Using Online WebSocket Testers

You can use online tools like [WebSocket King](https://websocketking.com/) or [PieSocket WebSocket Tester](https://www.piesocket.com/websocket-tester) to connect to `ws://localhost:8080` and send messages.

## Project Structure

```
.
├── src/
│   └── server.ts          # Main WebSocket server implementation
├── Dockerfile             # Docker image configuration
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # Node.js dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## How It Works

1. The server creates a WebSocket server on port 8080.
2. When a client connects, the server logs the connection.
3. For each message received from a client, the server:
   - Logs the incoming message
   - Echoes the message back to the client
   - Logs the echoed message
4. When a client disconnects, the server logs the disconnection.

## Customization

- **Port**: Change the port in `src/server.ts` (line 4) and update the Docker configuration accordingly.
- **Logging**: Modify console.log statements to change logging behavior.
- **Error Handling**: Enhance error handling for production use.

## Contributing

This is a mini-project for educational purposes. Feel free to fork and modify as needed.

## License

ISC
