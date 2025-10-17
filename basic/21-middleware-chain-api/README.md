# Middleware Chain API

This is a middleware-focused backend application built with Node.js, Express, and TypeScript. It demonstrates the concept of chaining custom middlewares in a request pipeline, including logging and authentication middlewares, with basic API endpoints.

## Features

- **Middleware Chaining**: Demonstrates how middlewares are executed in sequence for each request
- **Logging Middleware**: Logs HTTP method and URL for every request
- **Authentication Middleware**: Simple token-based authentication for protected routes
- **Basic Endpoints**: Public and private API routes
- **No Database**: Lightweight, in-memory operations only
- **Docker Deployment**: Containerized for easy deployment and testing

## Project Structure

```
├── src/
│   └── app.ts          # Main application file with Express setup and middlewares
├── Dockerfile           # Docker container configuration
├── docker-compose.yml   # Docker Compose for easy local testing
├── package.json         # Node.js dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Local Development

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

   Or run both in one command:
   ```bash
   npm run dev
   ```

The server will start on port 3000.

### Using Docker

1. Build and run with Docker Compose:
   ```bash
   docker compose up --build
   ```

The application will be available at `http://localhost:3000`.

## API Endpoints

### Public Endpoint
- **GET /api/public**
  - No authentication required
  - Returns a public message with timestamp

### Private Endpoint
- **GET /api/private**
  - Requires authentication header: `Authorization: Bearer secret-token`
  - Returns a private message for authenticated users

## Testing the API

You can test the endpoints using curl or any HTTP client:

```bash
# Public endpoint (no auth needed)
curl http://localhost:3000/api/public

# Private endpoint (requires auth)
curl -H "Authorization: Bearer secret-token" http://localhost:3000/api/private

# Private endpoint without auth (should return 401)
curl http://localhost:3000/api/private
```

## Middleware Chain Explanation

1. **Logging Middleware**: First in the chain, logs every request (method and URL)
2. **JSON Parsing Middleware**: Parses JSON request bodies
3. **Authentication Middleware**: Applied only to private routes, checks for valid token
4. **Route Handler**: Processes the request and sends response

This demonstrates how Express middlewares can be chained to create a processing pipeline for incoming requests.
