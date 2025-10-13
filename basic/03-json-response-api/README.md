# JSON Response API

This is a minimal API built with Node.js, Express, and TypeScript. It provides a simple endpoint that returns JSON data from an in-memory data store. This project is designed for quick prototyping and demonstration purposes.

## Features

- **Node.js with Express**: Lightweight web framework for handling HTTP requests.
- **TypeScript**: Strongly typed JavaScript for better code quality and developer experience.
- **JSON Responses**: Returns data in JSON format on GET requests.
- **In-Memory Storage**: Data is stored in memory (not persistent across restarts).
- **Single Endpoint**: One GET endpoint for retrieving data.
- **No Security**: Basic implementation without authentication or authorization.
- **Docker Deployment**: Easily deployable using Docker for containerized environments.

## API Endpoint

- **GET /api/data**: Returns a list of sample items in JSON format.

### Response Example

```json
[
  {
    "id": 1,
    "name": "Item 1",
    "description": "This is the first item"
  },
  {
    "id": 2,
    "name": "Item 2",
    "description": "This is the second item"
  },
  {
    "id": 3,
    "name": "Item 3",
    "description": "This is the third item"
  }
]
```

## Running the Application

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Docker (for containerized deployment)

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode (with ts-node):
   ```bash
   npm run dev
   ```

3. Or build and run:
   ```bash
   npm run build
   npm start
   ```

The server will start on `http://localhost:3000`.

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t json-response-api .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 json-response-api
   ```

The API will be available at `http://localhost:3000/api/data`.

## Usage

After starting the server, you can test the endpoint using tools like curl, Postman, or your web browser:

```bash
curl http://localhost:3000/api/data
```

This will return the JSON data as shown in the response example above.

## Project Structure

- `src/index.ts`: Main application code with Express server and API endpoint.
- `package.json`: Node.js dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `Dockerfile`: Docker build instructions.
- `README.md`: This documentation file.

## Notes

- Data is stored in memory and will be reset on server restart.
- This is a basic implementation without error handling, validation, or security measures.
- For production use, consider adding proper error handling, database integration, and security features.
