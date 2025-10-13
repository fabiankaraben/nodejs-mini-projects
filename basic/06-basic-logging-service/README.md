# Basic Logging Service

A simple logging-enabled HTTP server built with Node.js, TypeScript, and Express. This service logs all incoming requests to the console and provides multiple endpoints for basic interactions. It includes Docker support for easy deployment and log monitoring.

## Features

- **Logging**: All requests are automatically logged to the console with timestamps.
- **Multiple Endpoints**: Includes root, health check, custom logging, and logs retrieval endpoints.
- **No Database**: Logs are output to console only; no persistence.
- **No Security**: Basic implementation without authentication or authorization.
- **Docker Deployment**: Containerized for easy deployment and log monitoring.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker (for containerized deployment)

## Installation

1. Clone or download the project.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

## Usage

### Development

To run the server in development mode with automatic TypeScript compilation:

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

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## Endpoints

- **GET /**: Returns a greeting message.
- **GET /health**: Returns a JSON health check status.
- **POST /log**: Accepts a JSON body with a `message` field and logs it to the console.
  - Example request: `curl -X POST http://localhost:3000/log -H "Content-Type: application/json" -d '{"message": "Test log"}'`
- **GET /logs**: Returns information about log handling (logs are output to console).

## Docker Deployment

1. Build the Docker image:

```bash
docker build -t basic-logging-service .
```

2. Run the container:

```bash
docker run -p 3000:3000 basic-logging-service
```

For log monitoring, use Docker logs:

```bash
docker logs <container-id>
```

## Logging

All requests are logged to the console in the format: `[timestamp] METHOD URL`

Custom logs can be added via the `/log` endpoint.

Note: Logs are not persisted and are only visible in the console or Docker logs.
