# Form Data Parser

This is a form handling service implemented in Node.js with TypeScript. It parses POST form data using body-parser middleware, performs basic input validation, and echoes the validated data back as a JSON response. There is no database integration, no security features, and it is designed for local testing with Docker deployment. This project serves as practice for handling and validating form inputs.

## Features

- **Form Data Parsing**: Parses URL-encoded form data from POST requests using body-parser middleware.
- **Basic Input Validation**: Performs simple validation on form fields (e.g., non-empty strings) for practice purposes.
- **Echo Response**: Returns the parsed and validated form data as a JSON response.
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

3. The server will be running on `http://localhost:3000`. You can test it using a tool like curl or Postman.

### Testing the API

- **GET /**: Returns information about the service.

  ```bash
  curl http://localhost:3000
  ```

  Expected response:
  ```json
  {
    "message": "Form Data Parser Service",
    "endpoints": {
      "POST_parse": "Send POST requests with form data to /parse to parse and validate it"
    }
  }
  ```

- **POST /parse**: Parses and validates form data.

  Example using curl:

  ```bash
  curl -X POST http://localhost:3000/parse \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "name=John&email=john@example.com&message=Hello%20World"
  ```

  Expected response:
  ```json
  {
    "message": "Form data parsed and validated successfully",
    "data": {
      "name": "John",
      "email": "john@example.com",
      "message": "Hello World"
    }
  }
  ```

  If validation fails (e.g., empty field):
  ```json
  {
    "error": "Invalid value for field 'name'. Must be a non-empty string."
  }
  ```

### Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t form-data-parser .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 form-data-parser
   ```

3. Access the server at `http://localhost:3000` as above.

## Development

For development with hot reloading, use:

```bash
npm run dev
```

This uses `ts-node` to run TypeScript directly without compiling.

## Project Structure

- `src/server.ts`: Main server implementation with Express and body-parser
- `dist/`: Compiled JavaScript files (generated after build)
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `Dockerfile`: Docker container configuration
- `README.md`: This file

## API

- **GET /**: Returns service information with available endpoints.
- **POST /parse**: Accepts URL-encoded form data, validates it, and returns the parsed data as JSON. Returns 400 error for invalid data.
