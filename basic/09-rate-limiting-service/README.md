# Rate Limiting Service

This is a simple rate-limited API built with Node.js, Express, and TypeScript. It demonstrates how to implement rate limiting per IP address using the `express-rate-limit` middleware to prevent abuse.

## Features

- **Rate Limiting**: Limits requests per IP address (100 requests per 15 minutes).
- **Basic Endpoints**: Provides simple API endpoints for demonstration.
- **No Database**: In-memory rate limiting, no persistent storage required.
- **No Security**: Basic implementation without authentication or advanced security measures.
- **Docker Deployment**: Containerized for easy deployment and scaling.

## Prerequisites

- Node.js (version 18 or higher)
- Docker and Docker Compose (for containerized deployment)

## Installation and Usage

### Local Development

1. Clone or download the project.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```
4. For development (with hot reload):
   ```
   npm run dev
   ```
5. Or build and run:
   ```
   npm run build
   npm start
   ```

The API will be available at `http://localhost:3000`.

### Docker Deployment

1. Build and run with Docker Compose:
   ```
   docker compose up --build
   ```

The API will be accessible at `http://localhost:3000`.

## API Endpoints

- `GET /` - Welcome message with available endpoints.
- `GET /api/health` - Health check endpoint.
- `GET /api/data` - Returns sample data (rate limited).

All endpoints are subject to rate limiting.

## Rate Limiting Details

- **Window**: 15 minutes
- **Max Requests**: 100 per IP address per window
- **Headers**: Standard rate limit headers are included in responses

When the limit is exceeded, the API returns a 429 status code with an error message.

## Project Structure

```
.
├── src/
│   └── server.ts          # Main server code
├── Dockerfile             # Docker build configuration
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # Node.js dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Dependencies

- `express`: Web framework for Node.js
- `express-rate-limit`: Middleware for rate limiting
- `typescript`: For TypeScript support
- `@types/express`: Type definitions for Express

## Contributing

This is a mini-project for learning purposes. Feel free to modify and experiment with the code.
