# JWT Token Generator

This is a token issuance API implemented in Node.js with TypeScript. It provides a simple login endpoint that authenticates users (with hardcoded credentials) and generates JSON Web Tokens (JWTs) for authentication practice. There is no database integration, and it is designed for local testing with Docker deployment.

## Features

- **Login Endpoint**: POST `/login` accepts username and password, returns a JWT if credentials are valid.
- **JWT Generation**: Uses the `jsonwebtoken` library to create signed tokens with expiration.
- **Hardcoded Authentication**: Simple username/password check without database.
- **No Security Features**: No additional authentication, authorization, or encryption beyond JWT.
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

3. The server will be running on `http://localhost:3000`.

### Testing the API

#### Login to get a JWT

Send a POST request to `/login` with JSON body containing username and password:

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username": "user", "password": "pass"}'
```

Expected response (JWT will be different):

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Invalid credentials

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username": "wrong", "password": "wrong"}'
```

Expected response:

```json
{
  "message": "Invalid credentials"
}
```

#### Root endpoint

```bash
curl http://localhost:3000
```

Expected response: `JWT Token Generator API. Use POST /login to get a token. Use GET /profile with Bearer token to access protected data.`

#### Profile endpoint (protected)

First, obtain a token from `/login`, then use it to access the profile:

```bash
curl -X GET http://localhost:3000/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

Expected response:

```json
{
  "userId": 1,
  "username": "user",
  "email": "user@example.com",
  "profile": "This is a sample user profile."
}
```

If no token or invalid token:

```json
{
  "message": "Access token required"
}
```

1. Build the Docker image:

   ```bash
   docker build -t jwt-token-generator .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 jwt-token-generator
   ```

3. Access the API at `http://localhost:3000` as above.

### Running with Docker Compose

1. Ensure Docker Compose is installed.
2. Run the application:

   ```bash
   docker compose up --build
   ```

3. Access the API at `http://localhost:3000` as above.

4. To run in the background:

   ```bash
   docker compose up -d --build
   ```

   Stop with:

   ```bash
   docker compose down
   ```

## Development

For development with hot reloading, use:

```bash
npm run dev
```

This uses `ts-node` to run TypeScript directly without compiling.

## Project Structure

- `src/server.ts`: Main server implementation with login endpoint, JWT generation, and protected profile endpoint
- `dist/`: Compiled JavaScript files (generated after build)
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `Dockerfile`: Docker container configuration
- `docker-compose.yml`: Docker Compose configuration for easy deployment
- `README.md`: This file

## API

- **POST /login**: Accepts JSON with `username` and `password`. Returns JWT token if valid, 401 if invalid.
- **GET /profile**: Protected endpoint requiring JWT in Authorization header. Returns user profile data if token is valid, 401/403 if not.
- **GET /**: Returns basic API information.

## Notes

- This is for educational purposes and authentication token practice.
- Credentials are hardcoded: username="user", password="pass".
- JWT secret is hardcoded; in production, use environment variables.
- Tokens expire after 1 hour.
- No database; authentication is in-memory only.
