# Error Handling API

This is a mini-project demonstrating error management in a Node.js API built with Express and TypeScript. The API gracefully handles 404 (Not Found) and 500 (Internal Server Error) errors. It includes test endpoints for simulating errors and is containerized with Docker for robustness testing.

## Features

- **Express Server**: Lightweight web framework for Node.js
- **TypeScript**: Static typing for better code reliability
- **Error Handling**: Middleware to catch and respond to errors appropriately
- **Test Endpoints**: Routes that intentionally throw errors for testing
- **No Database**: Stateless API for simplicity
- **No Security**: Focus on error handling without authentication/authorization
- **Docker Deployment**: Containerized for easy deployment and testing

## Project Structure

```
├── src/
│   └── server.ts       # Main server file with routes and error handling
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── Dockerfile          # Docker build instructions
├── docker-compose.yml  # Docker Compose configuration
└── README.md           # This file
```

## Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Run the server in development mode with hot reloading:
```bash
npm run dev
```

### Production

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000`.

### Docker

Build and run with Docker:
```bash
# Build the image
npm run docker:build

# Run the container
npm run docker:run
```

Or use Docker Compose:
```bash
docker compose up
```

## API Endpoints

### GET /api/test
Returns a success message to verify the API is working.

**Response:**
```json
{
  "message": "API is working correctly!"
}
```

### GET /api/error/500
Simulates an internal server error (500).

**Response:**
```json
{
  "error": {
    "message": "This is a simulated internal server error",
    "name": "Error",
    "status": 500
  }
}
```

### GET /api/error/custom
Simulates a custom error.

**Response:**
```json
{
  "error": {
    "message": "Custom error for testing",
    "name": "CustomError",
    "status": 500
  }
}
```

### Any other route
Returns a 404 Not Found error.

**Response:**
```json
{
  "error": {
    "message": "Route not found",
    "status": 404
  }
}
```

## Error Handling

The API uses Express middleware to handle errors gracefully:

- **500 Errors**: Caught by error-handling middleware, logged to console, and returned as JSON with appropriate status code
- **404 Errors**: Handled by a catch-all route at the end of the middleware stack
- All error responses follow a consistent JSON format with `message`, `name`, and `status` fields

This setup ensures that the API never crashes due to unhandled errors and provides meaningful responses to clients.
