# Environment Variables Configuration Service

This is a simple Node.js configuration service built with TypeScript that loads environment variables using the `dotenv` package. It provides a GET endpoint to expose the application's configuration settings. The service is designed for Docker deployment with environment variable injection.

## Features

- Loads configuration from environment variables using `dotenv`
- Exposes configuration via a RESTful GET endpoint (`/config`)
- No database dependencies
- No security features (for simplicity)
- Docker containerized deployment
- TypeScript for type safety

## Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (for containerized deployment)

### Installation

1. Clone the repository and navigate to the project directory.
2. Install dependencies:

```bash
npm install
```

3. Copy the environment variables file:

```bash
cp .env.example .env
```

4. Modify `.env` with your desired configuration values.

## Running Locally

### Development Mode

To run the service in development mode with auto-reload:

```bash
npm run dev
```

### Production Mode

1. Build the TypeScript code:

```bash
npm run build
```

2. Start the service:

```bash
npm start
```

The service will start on the port specified in `PORT` (default: 3000).

## Docker Deployment

### Build the Docker Image

```bash
docker build -t config-service .
```

### Run the Container

Run the container with environment variables injected:

```bash
docker run -p 3000:3000 -e PORT=3000 -e NODE_ENV=production -e APP_NAME="My Config Service" config-service
```

You can override any environment variable using the `-e` flag.

## Usage

### Get Configuration

Send a GET request to the `/config` endpoint:

```bash
curl http://localhost:3000/config
```

Response example:

```json
{
  "port": 3000,
  "nodeEnv": "development",
  "appName": "Config Service",
  "databaseUrl": "postgresql://user:password@localhost:5432/db"
}
```

This endpoint returns the current configuration as a JSON object, reflecting the environment variables loaded at startup.
