# Basic Authentication API

This is a basic authentication service implemented in Node.js with Express and TypeScript. It demonstrates HTTP Basic Authentication with in-memory user storage, protected endpoints, and role-based access control. The service is designed for learning purposes and includes Docker deployment for easy testing.

## Features

- **HTTP Basic Authentication**: Uses standard HTTP Basic Auth for user authentication
- **In-Memory User Storage**: Simple user database stored in memory (not for production use)
- **Protected Endpoints**: Multiple endpoints with different access levels
- **Role-Based Access Control**: Admin and user roles with different permissions
- **No Database**: Purely in-memory, no data persistence
- **TypeScript**: Full TypeScript implementation for type safety
- **Docker Support**: Containerized deployment for easy testing

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

3. The server will be running on `http://localhost:3000`.

### Running with Docker

1. Build the Docker image:

   ```bash
   docker build -t basic-auth-api .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 basic-auth-api
   ```

3. Access the server at `http://localhost:3000`.

### Testing the API

The API includes several endpoints you can test with different authentication levels.

#### Test Users
- **Admin**: username: `admin`, password: `admin123`
- **User**: username: `user`, password: `user123`

#### Using curl for Testing

**Public endpoint (no authentication required):**
```bash
curl http://localhost:3000
```

**Protected endpoint (basic auth required):**
```bash
curl -u admin:admin123 http://localhost:3000/login
curl -u user:user123 http://localhost:3000/profile
```

**Admin-only endpoint:**
```bash
curl -u admin:admin123 http://localhost:3000/admin
curl -u user:user123 http://localhost:3000/admin  # This will return 403 Forbidden
```

#### Using Browser
When accessing protected endpoints in a browser, you'll be prompted for username and password.

## Development

For development with hot reloading, use:

```bash
npm run dev
```

This uses `ts-node` to run TypeScript directly without compiling.

## Project Structure

- `src/server.ts`: Main server implementation with authentication middleware and endpoints
- `dist/`: Compiled JavaScript files (generated after build)
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `Dockerfile`: Docker container configuration
- `README.md`: This file

## API Endpoints

### Public Endpoints
- **GET /**: Welcome message with available endpoints overview

### Protected Endpoints (Require Authentication)
- **GET /login**: Returns welcome message with user info
- **GET /profile**: Returns user profile information
- **GET /admin**: Admin-only endpoint with server information (requires admin role)

## Security Notes

- **Not for Production**: This implementation uses in-memory storage and plain text passwords for demonstration purposes only.
- **Basic Auth Limitations**: HTTP Basic Authentication sends credentials with every request (Base64 encoded, but not encrypted).
- **HTTPS Required**: In production, always use HTTPS with Basic Auth to protect credentials in transit.
- **Password Storage**: Never store passwords in plain text in a real application.

## Authentication Flow

1. Client makes request to protected endpoint
2. Server checks for `Authorization` header
3. If missing, returns 401 with `WWW-Authenticate: Basic realm="Secure Area"`
4. Client sends credentials as `Authorization: Basic <base64(username:password)>`
5. Server decodes and validates credentials against in-memory user store
6. If valid, attaches user info to request and proceeds; otherwise returns 401

## Future Improvements

- Database integration (MongoDB, PostgreSQL, etc.)
- JWT token-based authentication
- Password hashing (bcrypt)
- User registration and management
- Rate limiting and security middleware
