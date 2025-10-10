# Hello World HTTP Server

This is a simple HTTP server implemented in Node.js with TypeScript. It serves a "Hello World" response on a single endpoint using basic GET request handling. There is no database integration, no security features, and it is designed for local testing with Docker deployment.

## Features

- **Simple Endpoint**: Responds with "Hello World" to GET requests on the root path (`/`).
- **Basic GET Handling**: Only handles GET requests; other methods or paths return 404.
- **No Database**: Purely in-memory, no data persistence.
- **No Security**: No authentication, authorization, or encryption.
- **Docker Support**: Can be run in a Docker container for easy local testing.

## Prerequisites

- Node.js (version 18 or later)
- npm
- Docker (for containerized deployment)

## Installation

1. Clone or download this project to your local machine.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Running Locally

1. Build the TypeScript code:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The server will be running on `http://localhost:3000`. You can visit it in your browser or use a tool like curl:

   ```bash
   curl http://localhost:3000
   ```

   Expected response: `Hello World`

### Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t hello-world-server .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 hello-world-server
   ```

3. Access the server at `http://localhost:3000` as above.

## Development

For development with hot reloading, use:

```bash
npm run dev
```

This uses `ts-node` to run TypeScript directly without compiling.

## Project Structure

- `src/server.ts`: Main server implementation
- `dist/`: Compiled JavaScript files (generated after build)
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `Dockerfile`: Docker container configuration
- `README.md`: This file

## API

- **GET /**: Returns "Hello World" with a 200 status code.
- **Any other request**: Returns "Not Found" with a 404 status code.
