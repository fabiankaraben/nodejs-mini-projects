# Compression Enabled Server

This mini-project is a Node.js server built with TypeScript that demonstrates the use of compression middleware to serve large text responses efficiently. It's designed to showcase performance basics by compressing HTTP responses, reducing bandwidth usage and improving load times.

## Features

- **Express.js Framework**: Lightweight web framework for Node.js
- **TypeScript**: Provides type safety and better development experience
- **Compression Middleware**: Automatically compresses responses using gzip to reduce size
- **Large Text Response**: Serves a sizable text payload to demonstrate compression benefits
- **Docker Support**: Containerized deployment for easy testing and portability

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

## Installation and Usage

### Local Development

1. **Clone or navigate to the project directory**
   ```bash
   cd basic/22-compression-enabled-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode** (with hot reload)
   ```bash
   npm run dev
   ```

4. **Or build and run in production mode**
   ```bash
   npm run build
   npm start
   ```

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker compose up
   ```

The server will start on port 3000.

## Testing the Compression

1. Open your browser and visit `http://localhost:3000`
2. The server will respond with a large text payload
3. Check the response headers to verify compression:
   - Look for `Content-Encoding: gzip` in the headers
   - Compare the response size with and without compression

You can also use tools like curl to inspect headers:
```bash
curl -H "Accept-Encoding: gzip" -v http://localhost:3000
```

## How It Works

- The server uses Express.js with the `compression` middleware
- When a client supports gzip encoding (most modern browsers do), the middleware automatically compresses the response
- This reduces the amount of data transferred over the network
- For large text responses, this can significantly improve performance and reduce bandwidth costs

## Project Structure

```
22-compression-enabled-server/
├── src/
│   └── server.ts          # Main server code with compression setup
├── Dockerfile             # Docker container configuration
├── docker-compose.yml     # Docker Compose for easy deployment
├── package.json           # Node.js dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```
