# CORS-Enabled Server

This is a simple CORS-configured backend server built with Node.js and TypeScript. It allows cross-origin requests from frontend applications, making it suitable for integration with web frontends running on different domains or ports.

## Features

- **CORS Enabled**: Allows cross-origin requests from any origin
- **Express Middleware**: Uses Express.js for routing and middleware
- **TypeScript**: Written in TypeScript for better type safety
- **Simple API Endpoints**: Basic GET and POST endpoints for demonstration
- **No Database**: Stateless server, no data persistence
- **No Security**: No authentication or authorization (for demo purposes only)
- **Docker Deployment**: Containerized for easy deployment

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker (for containerized deployment)

## Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd basic/08-cors-enabled-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Run the server in development mode with hot-reloading:
```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### Production

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### GET /
Returns a welcome message.

**Response:**
```json
{
  "message": "Welcome to the CORS-enabled API server!"
}
```

### GET /api/users
Returns a list of mock users.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com"
  }
]
```

### POST /api/data
Accepts JSON data and echoes it back with a timestamp.

**Request Body:**
```json
{
  "key": "value"
}
```

**Response:**
```json
{
  "received": true,
  "timestamp": "2023-10-13T16:07:00.000Z",
  "data": {
    "key": "value"
  }
}
```

## Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t cors-enabled-server .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 cors-enabled-server
   ```

The server will be accessible at `http://localhost:3000`.

## Frontend Integration

This server is designed to be called from frontend applications. Since CORS is enabled for all origins, you can make requests from any domain. For example, in a React app:

```javascript
// Fetch users
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

// Post data
fetch('http://localhost:3000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: 'Hello from frontend!' }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Notes

- This is a demo server and should not be used in production without proper security measures.
- CORS is configured to allow all origins, which is not recommended for production applications.
- No authentication or input validation is implemented.
