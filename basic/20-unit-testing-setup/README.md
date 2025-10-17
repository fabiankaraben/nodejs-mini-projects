# Unit Testing Setup - Node.js Math API

A testable Node.js service built with TypeScript that provides a simple math API. This project demonstrates unit testing with Jest, API development with Express, and containerization with Docker for CI/CD practice.

## Features

- **TypeScript**: Strongly typed JavaScript for better development experience
- **Express API**: RESTful endpoints for basic mathematical operations
- **Jest Testing**: Comprehensive unit tests for all math functions
- **Docker Support**: Containerized deployment with multi-stage Dockerfile
- **No Database**: Simple stateless service focusing on logic and testing

## Available Operations

The API provides the following mathematical operations:

- `GET /add?a=1&b=2` - Addition
- `GET /subtract?a=5&b=3` - Subtraction
- `GET /multiply?a=4&b=5` - Multiplication
- `GET /divide?a=10&b=2` - Division
- `GET /factorial?n=5` - Factorial calculation
- `GET /health` - Health check endpoint

## Installation

1. Clone the repository and navigate to this project:
   ```bash
   cd basic/20-unit-testing-setup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Run the application in development mode with hot-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### Production Build

Build the TypeScript code:
```bash
npm run build
```

Start the compiled application:
```bash
npm start
```

### Testing

Run the Jest test suite:
```bash
npm test
```

Run tests in watch mode for development:
```bash
npm run test:watch
```

## Docker Deployment

### Build and Run with Docker Compose

```bash
docker compose up --build
```

The application will be available at `http://localhost:3000`.

### Manual Docker Build

```bash
# Build the image
docker build -t math-api .

# Run the container
docker run -p 3000:3000 math-api
```

## API Examples

### Addition
```bash
curl "http://localhost:3000/add?a=10&b=5"
# Response: {"operation":"add","a":10,"b":5,"result":15}
```

### Division
```bash
curl "http://localhost:3000/divide?a=20&b=4"
# Response: {"operation":"divide","a":20,"b":4,"result":5}
```

### Factorial
```bash
curl "http://localhost:3000/factorial?n=6"
# Response: {"operation":"factorial","n":6,"result":720}
```

## Error Handling

The API includes proper error handling for:
- Invalid number inputs
- Division by zero
- Negative factorial inputs

Example error response:
```json
{
  "error": "Division by zero is not allowed"
}
```

## Project Structure

```
src/
├── math.ts          # Math utility functions
├── math.test.ts     # Unit tests for math functions
└── server.ts        # Express API server
package.json         # Project dependencies and scripts
tsconfig.json        # TypeScript configuration
jest.config.js       # Jest testing configuration
Dockerfile           # Docker container configuration
docker-compose.yml   # Docker Compose setup
README.md           # This file
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **TypeScript**: Typed JavaScript
- **Express**: Web framework for Node.js
- **Jest**: Testing framework
- **Docker**: Containerization platform
- **Docker Compose**: Multi-container orchestration

## CI/CD Practice

This project is designed for CI/CD pipeline practice:
- Automated testing with Jest
- Containerized deployment with Docker
- Health checks for container monitoring
- Multi-stage Docker build for optimized images

## License

MIT
