# GraphQL Hello World

A simple GraphQL API built with Node.js, Apollo Server, and TypeScript. This project demonstrates the basics of GraphQL by providing a single query endpoint that returns a greeting message.

## Features

- **GraphQL API**: Implements a basic GraphQL server using Apollo Server
- **TypeScript**: Written in TypeScript for type safety
- **Single Query**: Provides one simple `hello` query
- **No Database**: Uses hardcoded data for simplicity
- **No Authentication**: No security features implemented
- **Docker Support**: Includes Docker and Docker Compose setup for easy deployment

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd basic/19-graphql-hello-world
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Local Development

Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:4000`

### Production Build

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

### Using Docker

1. Build and run with Docker Compose:
   ```bash
   docker compose up --build
   ```

2. The server will be available at `http://localhost:4000`

## Usage

Once the server is running, you can access the GraphQL playground at `http://localhost:4000`. This provides an interactive interface to test queries.

### Example Query

```graphql
query {
  hello
}
```

**Expected Response:**
```json
{
  "data": {
    "hello": "Hello, GraphQL World!"
  }
}
```

## Project Structure

```
src/
├── index.ts      # Main server file that starts Apollo Server
├── schema.ts     # GraphQL schema definition
└── resolvers.ts  # Query resolvers implementation
```

## Technologies Used

- **Apollo Server**: GraphQL server library
- **GraphQL**: Query language for APIs
- **TypeScript**: Typed JavaScript
- **Node.js**: JavaScript runtime
- **Docker**: Containerization platform
